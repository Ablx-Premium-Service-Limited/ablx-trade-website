import { createHmac, timingSafeEqual, randomBytes } from 'node:crypto'
import {
  createError,
  getCookie,
  setCookie,
  getRequestHeader
} from 'h3'

export const ADMIN_SESSION_COOKIE = 'admin_session'

const LOGIN_WINDOW_MS = 15 * 60 * 1000
const LOGIN_MAX_ATTEMPTS = 5
const loginAttempts = new Map()

function getSecret() {
  // Prefer process.env so this util stays Nitro-safe (no `#imports`).
  const secret = String(process.env.ADMIN_SESSION_SECRET || '').trim()
  if (!secret || secret.length < 32) {
    throw createError({
      statusCode: 500,
      statusMessage: 'ADMIN_SESSION_SECRET is not configured'
    })
  }
  return secret
}

function getSiteUrl() {
  return String(process.env.NUXT_PUBLIC_SITE_URL || 'https://ablxtrade.com').replace(/\/$/, '')
}

function signPayload(payload, secret) {
  const body = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  const sig = createHmac('sha256', secret).update(body).digest('base64url')
  return `${body}.${sig}`
}

function verifySignedToken(token, secret) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null

  const [body, sig] = token.split('.')
  if (!body || !sig) return null

  const expected = createHmac('sha256', secret).update(body).digest('base64url')
  const sigBuf = Buffer.from(sig)
  const expectedBuf = Buffer.from(expected)
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
    return null
  }

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'))
    if (!payload?.exp || Date.now() > payload.exp) return null
    if (payload.role !== 'admin' || !payload.email) return null
    return payload
  } catch {
    return null
  }
}

export function createAdminSessionToken({ email, name, remember }) {
  const secret = getSecret()
  const maxAgeSec = remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60
  const now = Date.now()
  const payload = {
    email,
    name: name || 'Administrator',
    role: 'admin',
    jti: randomBytes(16).toString('hex'),
    iat: now,
    exp: now + maxAgeSec * 1000
  }
  return {
    token: signPayload(payload, secret),
    maxAgeSec,
    user: { email: payload.email, name: payload.name, role: payload.role }
  }
}

export function readAdminSession(event) {
  const token = getCookie(event, ADMIN_SESSION_COOKIE)
  if (!token) return null
  try {
    return verifySignedToken(token, getSecret())
  } catch {
    return null
  }
}

export function requireAdmin(event) {
  const session = readAdminSession(event)
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Not authenticated'
    })
  }
  return session
}

export function setAdminSessionCookie(event, token, maxAgeSec) {
  setCookie(event, ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: maxAgeSec
  })
}

export function clearAdminSessionCookie(event) {
  setCookie(event, ADMIN_SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0
  })
  setCookie(event, 'adminAuth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0
  })
  setCookie(event, 'adminUser', '', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0
  })
}

export function assertSameOrigin(event) {
  if (process.env.NODE_ENV !== 'production') return

  const host = getRequestHeader(event, 'host')
  const origin = getRequestHeader(event, 'origin')
  const referer = getRequestHeader(event, 'referer')

  const allowed = []
  if (host) {
    allowed.push(`https://${host}`, `http://${host}`)
  }
  const siteUrl = getSiteUrl()
  if (siteUrl) allowed.push(siteUrl)

  let candidate = origin || ''
  if (!candidate && referer) {
    try {
      candidate = new URL(referer).origin
    } catch {
      candidate = ''
    }
  }

  if (!candidate || !allowed.some((a) => candidate === a)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Invalid request origin'
    })
  }
}

function clientIp(event) {
  const xf = getRequestHeader(event, 'x-forwarded-for')
  if (xf) return xf.split(',')[0].trim()
  return getRequestHeader(event, 'x-real-ip') || event.node?.req?.socket?.remoteAddress || 'unknown'
}

export function assertLoginRateLimit(event) {
  const ip = clientIp(event)
  const now = Date.now()
  let entry = loginAttempts.get(ip)

  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + LOGIN_WINDOW_MS }
    loginAttempts.set(ip, entry)
  }

  if (entry.count >= LOGIN_MAX_ATTEMPTS) {
    const retryAfterSec = Math.ceil((entry.resetAt - now) / 1000)
    throw createError({
      statusCode: 429,
      statusMessage: `Too many login attempts. Try again in ${retryAfterSec}s`,
      data: { retryAfterSec }
    })
  }

  entry.count += 1
}

export function clearLoginRateLimit(event) {
  loginAttempts.delete(clientIp(event))
}
