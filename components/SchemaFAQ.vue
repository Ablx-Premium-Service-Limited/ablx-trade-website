<script setup>
useHead({
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is AblxTrade?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ABLX Trade is a leading trading company that specializes in facilitating cryptocurrency and gift card exchanges. We provide a secure and reliable platform for users to buy and sell digital assets and gift card.",
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ABLX Trade work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ABLX Trade is a secure and user-friendly cryptocurrency exchange platform that allows you to buy, sell, and trade digital assets seamlessly. Here's how it works:\n1. Sign Up & Verify: Create an account and complete the Know Your Customer (KYC) verification for security and compliance.\n2. Request wallet: request wallet to trade your crypto currencies by clicking on trade, choosing your preferred asset to trade and inputing the amount you intend to exchange then clicking proceed.\n3. Trade Crypto: sell cryptocurrencies at real-time market rates.\n4. Withdraw Your Funds: Securely withdraw your fiat to your preferred  bank account.\n5. Stay Secure & Updated: Enable two-factor authentication (2FA) and receive price alerts for better trading decisions.",
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I trust ABLX Trade with my funds?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely! At ABLX Trade, we prioritize the security and protection of our users' funds. We employ state-of-the-art security measures, including encryption and multi-factor authentication, to safeguard your assets. Additionally, we have a robust verification process for users to ensure the legitimacy of transactions.",
                        }
                    }
                ]
            })
        }
    ]
})
</script>
