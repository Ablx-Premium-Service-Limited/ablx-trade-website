<script setup>
useHead({
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FinancialService",
                "name": "AblxTrade",
                "url": "https://ablxtrade.com",
                "logo": "https://ablxtrade.com/favi.png",
                "description": "Experience seamless trading with ABLX Trade. Join us today and take your trading to the next level!",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nigeria",
                    "addressCountry": "NG"
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+2348109657477",
                        "contactType": "customer support"
                    }
                ],
                "sameAs": [
                    "https://www.facebook.com/profile.php?id=100095155584258",
                    "https://x.com/ablxtrade",
                    "https://www.instagram.com/ablxtrade/"
                ]
            })
        }
    ]
})
</script>
