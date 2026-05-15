import type { StaticImageData } from "next/image";


export interface PricingFeature {
    icon: string;
    title: string;
    items: string[];
}

export interface PricingPackage {
    name: string;
    icon?: string;
    oneTimePrice: number;
    partPaymentPrice?: number;
    recommendedFor: string[];
    installments: {
        first: { percentage: number; description: string };
        second: { percentage: number; description: string };
        third: { percentage: number; description: string };
    };
    features: PricingFeature[];
    highlights: string[];
    popular?: boolean;
}

export interface Challenge {
    icon: string;
    title: string;
    description: string;
}

export interface Offering {
    icon: string;
    title: string;
    description: string;
    benefits: string[];
}

export interface ServiceItem {
    keywords: string;
    id: number;
    title: string;
    subtitle: string;
    description: string;
    descriptionContent: string;
    detailedDescription: string[];
    challenges: Challenge[];
    offerings: Offering[];
    pricing: PricingPackage[];
    image?: string | StaticImageData;
    svgComponent?: string;
    path: string;
    stats: {
        clients: number;
        projects: number;
        satisfaction: number;
    };
    startingPrice: string;
}

export const services: ServiceItem[] = [
    {
        id: 1,

        title: "Digital Presence",

        subtitle: "Build a powerful online identity that drives visibility, trust, and business growth.",

        startingPrice: "Starts from ₹13,999",

        description: "We help businesses establish a strong digital presence through modern websites, branding, SEO, social media, and automation solutions. Our goal is to make your brand discoverable, engaging, and growth-focused across every digital platform.",

        descriptionContent: "Our Digital Presence solutions are designed to help businesses grow online with a complete ecosystem of branding, websites, SEO, social media marketing, and automation tools. We focus on creating user-friendly digital experiences that improve visibility, strengthen customer engagement, and generate consistent leads. From startups to established businesses, we deliver scalable digital solutions that help brands stand out, build trust, and achieve long-term success in the digital world.",

        detailedDescription: [
            "In today's competitive market, having a strong digital presence is essential for business growth.",
            "We help businesses create a professional and impactful online identity.",
            "Our solutions are tailored to improve discoverability, customer engagement, and brand credibility.",
            "From responsive websites to social media promotion, we provide complete digital support.",
            "We focus on SEO-driven strategies that help your business rank higher and attract quality leads.",
            "Our team creates visually appealing and user-friendly digital experiences that connect with your audience.",
            "We combine creativity, technology, and automation to streamline your digital operations.",
            "Whether you need branding, online marketing, or business automation, we provide end-to-end digital solutions.",
            "Partner with us to transform your digital presence into a powerful growth engine for your business."
        ],

        challenges: [
            {
                icon: "🔍",
                title: "Low Online Visibility",
                description: "Difficulty reaching customers online"
            },
            {
                icon: "🎯",
                title: "Weak Brand Identity",
                description: "Lack of professional digital branding"
            },
            {
                icon: "📉",
                title: "Poor Lead Generation",
                description: "Not getting quality enquiries online"
            },
            {
                icon: "📱",
                title: "Inactive Social Presence",
                description: "Low engagement on social platforms"
            },
            {
                icon: "⚡",
                title: "No Automation",
                description: "Manual business operations and workflows"
            },
            {
                icon: "💬",
                title: "Customer Trust Issues",
                description: "Unprofessional or outdated online presence"
            }
        ],

        offerings: [
            {
                icon: "🎨",
                title: "Brand Identity",
                description: "Create a professional and memorable brand image",
                benefits: [
                    "Logo Design",
                    "Brand Style Guide",
                    "Business Branding",
                    "Digital Brand Assets"
                ]
            },
            {
                icon: "🌐",
                title: "Website Development",
                description: "Modern and responsive websites for your business",
                benefits: [
                    "Responsive Website Design",
                    "SEO-Friendly Structure",
                    "Fast Loading Speed",
                    "Mobile Optimization"
                ]
            },
            {
                icon: "📍",
                title: "Online Visibility",
                description: "Improve your business reach online",
                benefits: [
                    "Google Business Profile",
                    "Local SEO Optimization",
                    "Search Engine Visibility",
                    "Directory Listings"
                ]
            },
            {
                icon: "📱",
                title: "Social Media Marketing",
                description: "Build audience engagement and brand awareness",
                benefits: [
                    "Content Creation",
                    "Social Media Strategy",
                    "Paid Advertising",
                    "Campaign Management"
                ]
            },
            {
                icon: "📊",
                title: "SEO & Lead Generation",
                description: "Generate quality leads and improve conversions",
                benefits: [
                    "Keyword Optimization",
                    "Landing Pages",
                    "Lead Capture Forms",
                    "Analytics & Reporting"
                ]
            },
            {
                icon: "🤖",
                title: "Automation Solutions",
                description: "Simplify operations with smart automation",
                benefits: [
                    "Workflow Automation",
                    "CRM Integration",
                    "Email & SMS Automation",
                    "Admin Dashboard"
                ]
            }
        ],

        pricing: [
            {
                name: "Essential 💫",

                oneTimePrice: 13999,

                partPaymentPrice: 14999,

                recommendedFor: ["Small businesses", "Startups", "Local brands"],

                installments: {
                    first: { percentage: 30, description: "🎨 Brand Identity" },
                    second: { percentage: 50, description: "🌐 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🎨",
                        title: "Brand Identity",
                        items: [
                            "Logo Design",
                            "Digital Visiting Card",
                            "Letter Head Design",
                            "Business Profile Deck Upto 10 Pages"
                        ]
                    },
                    {
                        icon: "🌐",
                        title: "Website Development",
                        items: [
                            "Mobile-Optimized Website Upto 5 Pages",
                            "SEO Upto 10 Keywords",
                            "Whatsapp Chat Integration",
                            "Contact Form Integration",
                            "Domain, SSL & Hosting Setup Upto 1 Year",
                            "QR Code for Easy Sharing"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for businesses starting online",
                    "3 months of basic support",
                    "SEO-friendly website structure"
                ]
            },

            {
                name: "Elite 🌟",

                oneTimePrice: 23999,

                partPaymentPrice: 24999,

                recommendedFor: ["Growing businesses", "Retail stores", "Service providers"],

                installments: {
                    first: { percentage: 30, description: "📍 Online Visibility" },
                    second: { percentage: 50, description: "📱 Social Media Marketing" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "💫",
                        title: "Everything in Essential",
                        items: []
                    },
                    {
                        icon: "📍",
                        title: "Online Visibility",
                        items: [
                            "Google Business Profile Setup",
                            "Google Map Integration",
                            "Local SEO Optimization",
                            "Directory Listing Setup"
                        ]
                    },
                    {
                        icon: "📱",
                        title: "Social Media Marketing",
                        items: [
                            "Social Media Branding",
                            "Content Creation & Scheduling",
                            "Festival & Seasonal Campaigns",
                            "Brand Awareness Ads",
                            "Meta Ads Management"
                        ]
                    }
                ],

                highlights: [
                    "Complete online presence setup",
                    "6 months of priority support",
                    "Monthly performance reports"
                ],

                popular: true
            },

            {
                name: "Excellence 👑",

                oneTimePrice: 33999,

                partPaymentPrice: 34999,

                recommendedFor: ["Established businesses", "Agencies", "E-commerce brands"],

                installments: {
                    first: { percentage: 30, description: "📊 SEO & Lead Generation" },
                    second: { percentage: 50, description: "🤖 Automation Solutions" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Elite",
                        items: []
                    },
                    {
                        icon: "📊",
                        title: "SEO & Lead Generation",
                        items: [
                            "Advanced SEO Strategy",
                            "Landing Page Optimization",
                            "Lead Funnel Development",
                            "Lead Capture Integration",
                            "Analytics & Tracking"
                        ]
                    },
                    {
                        icon: "🤖",
                        title: "Automation Solutions",
                        items: [
                            "Workflow Automation",
                            "CRM Integration",
                            "Email & SMS Campaigns",
                            "Invoice Automation",
                            "Centralized Admin Dashboard",
                            "Real-Time Analytics"
                        ]
                    }
                ],

                highlights: [
                    "Complete digital growth solution",
                    "12 months of premium support",
                    "Quarterly strategy reviews",
                    "Custom business integrations"
                ]
            }
        ],

        svgComponent: 'DigitalPresenceSVG',

        path: "/services/digital-presence",

        stats: {
            clients: 150,
            projects: 200,
            satisfaction: 98
        },

        keywords: "digital presence, branding, website development, SEO, social media marketing, lead generation, automation, online visibility"
    },
    {
        id: 2,

        title: "Website Development",

        subtitle: "Modern, fast, and conversion-focused websites for your business growth.",

        startingPrice: "Starts from ₹9,999",

        description: "We create modern, responsive, and high-performance websites designed to elevate your brand and grow your business online. From business websites to custom web platforms, we deliver scalable solutions with seamless user experiences.",

        descriptionContent: "Our Website Development solutions are crafted to help businesses establish a strong digital foundation with visually stunning, responsive, and SEO-friendly websites. We focus on performance, user experience, and scalability to ensure your website not only looks professional but also drives leads and conversions. Whether you need a business website, portfolio, landing page, or custom web application, we provide complete end-to-end development solutions tailored to your business goals.",

        detailedDescription: [
            "Your website is the digital face of your business and the first impression for potential customers.",
            "We design and develop modern websites that combine aesthetics with functionality.",
            "Our websites are responsive, fast-loading, and optimized for all devices.",
            "We focus on creating user-friendly experiences that increase engagement and conversions.",
            "From startup websites to advanced business platforms, we build scalable digital solutions.",
            "Our team integrates SEO best practices to improve your online visibility and search rankings.",
            "We ensure secure, reliable, and future-ready development with the latest technologies.",
            "Whether you need a portfolio website, e-commerce store, or custom dashboard, we deliver tailored solutions.",
            "Partner with us to create a powerful online platform that drives growth and builds trust."
        ],

        challenges: [
            {
                icon: "📱",
                title: "Outdated Website",
                description: "Old designs reduce customer trust"
            },
            {
                icon: "⚡",
                title: "Slow Performance",
                description: "Poor loading speed affects users"
            },
            {
                icon: "🔍",
                title: "Low Search Visibility",
                description: "Website not ranking on Google"
            },
            {
                icon: "🛒",
                title: "Low Conversions",
                description: "Visitors are not converting into leads"
            },
            {
                icon: "📉",
                title: "Poor User Experience",
                description: "Difficult navigation and interaction"
            },
            {
                icon: "🔒",
                title: "Security Issues",
                description: "Lack of proper website protection"
            }
        ],

        offerings: [
            {
                icon: "🎨",
                title: "UI/UX Design",
                description: "Beautiful and user-friendly website interfaces",
                benefits: [
                    "Modern UI Design",
                    "Responsive Layouts",
                    "Interactive User Experience",
                    "Brand-Focused Design"
                ]
            },
            {
                icon: "🌐",
                title: "Business Websites",
                description: "Professional websites for businesses and startups",
                benefits: [
                    "Corporate Websites",
                    "Portfolio Websites",
                    "Landing Pages",
                    "Service Websites"
                ]
            },
            {
                icon: "🛒",
                title: "E-Commerce Development",
                description: "Sell products online with advanced store features",
                benefits: [
                    "Online Store Setup",
                    "Payment Gateway Integration",
                    "Product Management",
                    "Order Tracking"
                ]
            },
            {
                icon: "⚡",
                title: "Performance Optimization",
                description: "Fast and optimized websites for better results",
                benefits: [
                    "Speed Optimization",
                    "SEO Optimization",
                    "Mobile Optimization",
                    "Core Web Vitals Improvement"
                ]
            },
            {
                icon: "🔒",
                title: "Security & Maintenance",
                description: "Keep your website secure and updated",
                benefits: [
                    "SSL Security",
                    "Regular Backups",
                    "Bug Fixes",
                    "Technical Support"
                ]
            },
            {
                icon: "🤖",
                title: "Custom Web Solutions",
                description: "Advanced web applications tailored to your business",
                benefits: [
                    "Admin Dashboards",
                    "Automation Features",
                    "CRM Integrations",
                    "Custom Functionalities"
                ]
            }
        ],

        pricing: [
            {
                name: "Starter 💫",

                oneTimePrice: 9999,

                partPaymentPrice: 10999,

                recommendedFor: ["Startups", "Small businesses", "Personal brands"],

                installments: {
                    first: { percentage: 30, description: "🎨 UI/UX Design" },
                    second: { percentage: 50, description: "🌐 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌐",
                        title: "Business Website",
                        items: [
                            "Responsive Website Upto 5 Pages",
                            "Modern UI Design",
                            "Contact Form Integration",
                            "Whatsapp Chat Integration",
                            "SEO-Friendly Structure",
                            "Domain, SSL & Hosting Setup Upto 1 Year"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for new businesses",
                    "Mobile-friendly responsive design",
                    "3 months of basic support"
                ]
            },

            {
                name: "Professional 🌟",

                oneTimePrice: 19999,

                partPaymentPrice: 20999,

                recommendedFor: ["Growing businesses", "Agencies", "Service providers"],

                installments: {
                    first: { percentage: 30, description: "⚡ Performance Optimization" },
                    second: { percentage: 50, description: "🛒 Advanced Website Features" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "💫",
                        title: "Everything in Starter",
                        items: []
                    },
                    {
                        icon: "⚡",
                        title: "Advanced Features",
                        items: [
                            "Website Upto 10 Pages",
                            "Advanced SEO Optimization",
                            "Blog Integration",
                            "Google Analytics Setup",
                            "Performance Optimization",
                            "Custom Animations"
                        ]
                    }
                ],

                highlights: [
                    "Optimized for speed and SEO",
                    "6 months of priority support",
                    "Monthly website performance reports"
                ],

                popular: true
            },

            {
                name: "Enterprise 👑",

                oneTimePrice: 34999,

                partPaymentPrice: 35999,

                recommendedFor: ["Large businesses", "E-commerce brands", "Enterprises"],

                installments: {
                    first: { percentage: 30, description: "🛒 E-Commerce & Custom Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Professional",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Solutions",
                        items: [
                            "Custom Admin Dashboard",
                            "E-Commerce Functionality",
                            "Payment Gateway Integration",
                            "CRM & API Integrations",
                            "Workflow Automation",
                            "Advanced Security Features",
                            "Real-Time Analytics"
                        ]
                    }
                ],

                highlights: [
                    "Complete custom web solution",
                    "12 months of premium support",
                    "Scalable enterprise-ready architecture",
                    "Custom integrations and automation"
                ]
            }
        ],

        svgComponent: 'WebsiteDevelopmentSVG',

        path: "/services/website-development",

        stats: {
            clients: 120,
            projects: 180,
            satisfaction: 99
        },

        keywords: "website development, web design, responsive website, ecommerce development, custom website, SEO website, web application, UI UX design"
    },
    {
        id: 3,

        title: "Wedding Website",

        subtitle: "Beautiful and personalized wedding websites to celebrate your special journey.",

        startingPrice: "Starts from ₹7,999",

        description: "Create a stunning wedding website to share your love story, wedding details, gallery, RSVP, and memorable moments with friends and family in one elegant digital space.",

        descriptionContent: "Our Wedding Website solutions are designed to make your big day even more memorable with elegant, personalized, and mobile-friendly websites. From sharing your love story to managing RSVPs and displaying galleries, we create beautiful digital experiences that reflect your unique celebration. Whether it’s a traditional wedding, destination wedding, or modern celebration, we design websites that help couples connect with guests seamlessly and create unforgettable memories online.",

        detailedDescription: [
            "Your wedding is one of the most special moments of your life, and your website should reflect that beautifully.",
            "We create elegant and personalized wedding websites tailored to your theme and style.",
            "Share your love story, event details, schedules, and memorable moments with guests online.",
            "Our websites include RSVP systems, photo galleries, countdowns, and location integration.",
            "We design mobile-friendly and easy-to-use websites so guests can access details anytime.",
            "From traditional weddings to modern destination celebrations, we create websites that capture your emotions perfectly.",
            "Our team ensures visually stunning designs combined with smooth functionality.",
            "We also integrate social sharing, invitation sections, and event reminders for a seamless experience.",
            "Celebrate your special day with a modern digital presence that keeps your memories alive forever."
        ],

        challenges: [
            {
                icon: "📅",
                title: "Managing Invitations",
                description: "Difficult to track guest responses manually"
            },
            {
                icon: "📍",
                title: "Sharing Event Details",
                description: "Guests may miss important venue or timing updates"
            },
            {
                icon: "📸",
                title: "Photo Sharing",
                description: "No centralized place for memories and galleries"
            },
            {
                icon: "💌",
                title: "Traditional Invitation Limits",
                description: "Printed invitations lack interactive features"
            },
            {
                icon: "🌐",
                title: "Guest Accessibility",
                description: "Information not easily accessible online"
            },
            {
                icon: "⏳",
                title: "Event Coordination",
                description: "Managing multiple wedding events becomes stressful"
            }
        ],

        offerings: [
            {
                icon: "💍",
                title: "Custom Wedding Design",
                description: "Personalized wedding themes and elegant layouts",
                benefits: [
                    "Custom Wedding Themes",
                    "Romantic UI Design",
                    "Mobile-Friendly Layout",
                    "Personalized Branding"
                ]
            },
            {
                icon: "📖",
                title: "Love Story & Event Details",
                description: "Share your journey and wedding information beautifully",
                benefits: [
                    "Couple Story Section",
                    "Wedding Schedule",
                    "Venue Information",
                    "Google Maps Integration"
                ]
            },
            {
                icon: "📸",
                title: "Gallery & Memories",
                description: "Display photos and memorable moments online",
                benefits: [
                    "Photo Gallery",
                    "Pre-Wedding Albums",
                    "Video Embedding",
                    "Memory Timeline"
                ]
            },
            {
                icon: "✅",
                title: "RSVP Management",
                description: "Easy online guest response management",
                benefits: [
                    "Online RSVP Form",
                    "Guest Count Tracking",
                    "Meal Preferences",
                    "Confirmation Messages"
                ]
            },
            {
                icon: "🎉",
                title: "Wedding Features",
                description: "Interactive features for guests and family",
                benefits: [
                    "Countdown Timer",
                    "Music Integration",
                    "Event Reminders",
                    "Social Sharing"
                ]
            },
            {
                icon: "🔒",
                title: "Hosting & Support",
                description: "Secure hosting with complete technical support",
                benefits: [
                    "Domain & Hosting Setup",
                    "SSL Security",
                    "Technical Support",
                    "Performance Optimization"
                ]
            }
        ],

        pricing: [
            {
                name: "Classic 💫",

                oneTimePrice: 7999,

                partPaymentPrice: 8999,

                recommendedFor: ["Simple weddings", "Small family events", "Traditional ceremonies"],

                installments: {
                    first: { percentage: 30, description: "💍 Design & Setup" },
                    second: { percentage: 50, description: "📖 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "💍",
                        title: "Wedding Essentials",
                        items: [
                            "Responsive Wedding Website",
                            "Love Story Section",
                            "Event Schedule",
                            "Photo Gallery",
                            "Contact & RSVP Form",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for elegant wedding celebrations",
                    "Mobile-friendly design",
                    "3 months of support"
                ]
            },

            {
                name: "Royal 🌟",

                oneTimePrice: 14999,

                partPaymentPrice: 15999,

                recommendedFor: ["Grand weddings", "Destination weddings", "Premium celebrations"],

                installments: {
                    first: { percentage: 30, description: "📸 Gallery & RSVP Features" },
                    second: { percentage: 50, description: "🎉 Interactive Wedding Features" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Classic",
                        items: []
                    },
                    {
                        icon: "🎉",
                        title: "Premium Features",
                        items: [
                            "Advanced RSVP Management",
                            "Countdown Timer",
                            "Google Maps Integration",
                            "Custom Wedding Animations",
                            "Music Integration",
                            "Social Media Sharing"
                        ]
                    }
                ],

                highlights: [
                    "Elegant premium wedding experience",
                    "6 months of priority support",
                    "Interactive guest engagement features"
                ],

                popular: true
            },

            {
                name: "Luxury 👑",

                oneTimePrice: 24999,

                partPaymentPrice: 25999,

                recommendedFor: ["Celebrity weddings", "Luxury weddings", "Large-scale celebrations"],

                installments: {
                    first: { percentage: 30, description: "📸 Premium Design & Features" },
                    second: { percentage: 50, description: "🤖 Custom Integrations" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Royal",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Luxury Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Guest Management System",
                            "Multi-Event Scheduling",
                            "Video Invitation Integration",
                            "Live Streaming Integration",
                            "Premium Animation Effects",
                            "Advanced Gallery Management"
                        ]
                    }
                ],

                highlights: [
                    "Luxury wedding digital experience",
                    "12 months of premium support",
                    "Fully customized wedding platform",
                    "Exclusive premium design"
                ]
            }
        ],

        svgComponent: 'WeddingWebsiteSVG',

        path: "/services/wedding-website",


        stats: {
            clients: 80,
            projects: 120,
            satisfaction: 99
        },

        keywords: "wedding website, wedding invitation website, RSVP website, wedding gallery, wedding digital invitation, wedding planner website, destination wedding website"
    },
    {
        id: 4,

        title: "Birthday Website",

        subtitle: "Create unforgettable birthday celebrations with personalized digital experiences.",

        startingPrice: "Starts from ₹5,999",

        description: "Design a fun, interactive, and personalized birthday website to share invitations, event details, memories, galleries, and celebrations with friends and family online.",

        descriptionContent: "Our Birthday Website solutions are crafted to make birthday celebrations more memorable with creative, interactive, and mobile-friendly websites. Whether it’s a kid’s birthday, milestone celebration, surprise party, or themed event, we create visually engaging websites that bring your celebration to life online. From invitations and RSVP systems to photo galleries and countdowns, we provide everything needed for a modern digital birthday experience.",

        detailedDescription: [
            "Birthdays are special moments that deserve unforgettable celebrations and memories.",
            "We create personalized birthday websites that reflect your unique style and theme.",
            "Share invitations, party details, countdowns, and galleries in one beautiful digital platform.",
            "Our websites are mobile-friendly, responsive, and easy for guests to access anytime.",
            "From kids’ birthday parties to milestone celebrations, we design websites for every age and style.",
            "We include interactive features like RSVP forms, music, photo galleries, and animations.",
            "Our creative designs ensure your birthday celebration stands out and leaves a lasting impression.",
            "Whether it’s a surprise party, themed event, or luxury celebration, we create digital experiences that guests will love.",
            "Celebrate your special day with a modern birthday website that captures memories forever."
        ],

        challenges: [
            {
                icon: "💌",
                title: "Invitation Management",
                description: "Difficult to manage guest invitations manually"
            },
            {
                icon: "📅",
                title: "Event Coordination",
                description: "Guests may miss party schedules or updates"
            },
            {
                icon: "📸",
                title: "Memory Sharing",
                description: "No organized space for photos and videos"
            },
            {
                icon: "🎉",
                title: "Theme Presentation",
                description: "Traditional invites cannot showcase themes well"
            },
            {
                icon: "🌐",
                title: "Online Accessibility",
                description: "Party information not easily accessible digitally"
            },
            {
                icon: "⏳",
                title: "Guest Engagement",
                description: "Limited interactive experience for guests"
            }
        ],

        offerings: [
            {
                icon: "🎨",
                title: "Custom Birthday Themes",
                description: "Creative and personalized birthday website designs",
                benefits: [
                    "Custom Theme Design",
                    "Animated Layouts",
                    "Responsive Design",
                    "Personalized Branding"
                ]
            },
            {
                icon: "📖",
                title: "Party Details & Invitations",
                description: "Share event information beautifully online",
                benefits: [
                    "Digital Invitations",
                    "Party Schedule",
                    "Venue Details",
                    "Google Maps Integration"
                ]
            },
            {
                icon: "📸",
                title: "Gallery & Memories",
                description: "Showcase memorable birthday moments",
                benefits: [
                    "Photo Gallery",
                    "Video Embedding",
                    "Memory Timeline",
                    "Guest Photo Sharing"
                ]
            },
            {
                icon: "✅",
                title: "RSVP & Guest Management",
                description: "Manage guest responses easily online",
                benefits: [
                    "RSVP Forms",
                    "Guest Tracking",
                    "Confirmation Messages",
                    "Special Requests Management"
                ]
            },
            {
                icon: "🎵",
                title: "Interactive Features",
                description: "Fun and engaging experiences for guests",
                benefits: [
                    "Countdown Timer",
                    "Music Integration",
                    "Party Animations",
                    "Social Sharing"
                ]
            },
            {
                icon: "🔒",
                title: "Hosting & Support",
                description: "Secure and reliable website hosting solutions",
                benefits: [
                    "Domain & Hosting Setup",
                    "SSL Security",
                    "Technical Support",
                    "Performance Optimization"
                ]
            }
        ],

        pricing: [
            {
                name: "Fun Party 💫",

                oneTimePrice: 5999,

                partPaymentPrice: 6999,

                recommendedFor: ["Kids birthday parties", "Family celebrations", "Small gatherings"],

                installments: {
                    first: { percentage: 30, description: "🎨 Theme Design & Setup" },
                    second: { percentage: 50, description: "📖 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🎉",
                        title: "Birthday Essentials",
                        items: [
                            "Responsive Birthday Website",
                            "Digital Invitation",
                            "Party Schedule",
                            "Photo Gallery",
                            "RSVP Form",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for fun birthday celebrations",
                    "Mobile-friendly responsive design",
                    "3 months of support"
                ]
            },

            {
                name: "Celebration 🌟",

                oneTimePrice: 11999,

                partPaymentPrice: 12999,

                recommendedFor: ["Theme parties", "Milestone birthdays", "Large gatherings"],

                installments: {
                    first: { percentage: 30, description: "📸 Gallery & RSVP Features" },
                    second: { percentage: 50, description: "🎵 Interactive Features" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Fun Party",
                        items: []
                    },
                    {
                        icon: "🎵",
                        title: "Premium Features",
                        items: [
                            "Advanced RSVP Management",
                            "Countdown Timer",
                            "Music Integration",
                            "Custom Animations",
                            "Google Maps Integration",
                            "Social Media Sharing"
                        ]
                    }
                ],

                highlights: [
                    "Interactive birthday celebration experience",
                    "6 months of priority support",
                    "Creative and engaging design"
                ],

                popular: true
            },

            {
                name: "Grand Bash 👑",

                oneTimePrice: 19999,

                partPaymentPrice: 20999,

                recommendedFor: ["Luxury birthday parties", "Corporate birthday events", "Premium celebrations"],

                installments: {
                    first: { percentage: 30, description: "🎨 Premium Design & Features" },
                    second: { percentage: 50, description: "🤖 Custom Integrations" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Celebration",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Luxury Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Guest Management System",
                            "Video Invitation Integration",
                            "Live Event Streaming",
                            "Advanced Gallery Management",
                            "Premium Animation Effects",
                            "Real-Time Event Updates"
                        ]
                    }
                ],

                highlights: [
                    "Luxury digital birthday experience",
                    "12 months of premium support",
                    "Fully customized birthday platform",
                    "Exclusive premium design"
                ]
            }
        ],

        svgComponent: 'BirthdayWebsiteSVG',

        path: "/services/birthday-website",


        stats: {
            clients: 60,
            projects: 90,
            satisfaction: 99
        },

        keywords: "birthday website, birthday invitation website, birthday RSVP website, birthday gallery, online birthday invitation, kids birthday website, birthday celebration website"
    },
    {
        id: 5,

        title: "Taxi Website Service",

        subtitle: "Modern taxi booking websites with smart features for seamless ride management.",

        startingPrice: "Starts from ₹14,999",

        description: "Build a professional taxi booking website with online ride booking, fare management, driver profiles, customer support, and real-time business growth features.",

        descriptionContent: "Our Taxi Website Service solutions are designed to help taxi businesses establish a powerful online presence with modern booking systems, responsive designs, and advanced management tools. We create user-friendly taxi websites that simplify ride booking, improve customer engagement, and streamline operations. Whether you run a local cab service, airport taxi, or fleet management business, we deliver scalable digital solutions that help your transportation business grow efficiently.",

        detailedDescription: [
            "A professional taxi website helps customers book rides quickly and improves business credibility.",
            "We create responsive and easy-to-use taxi booking websites tailored for modern transportation businesses.",
            "Our solutions include online booking systems, fare enquiry forms, and driver management features.",
            "We focus on providing smooth user experiences that make ride booking simple for customers.",
            "From local taxi services to large fleet operations, we develop scalable and secure digital platforms.",
            "Our websites are optimized for mobile devices, ensuring customers can book rides anytime and anywhere.",
            "We integrate maps, payment gateways, and automation features to streamline taxi operations.",
            "Whether you need a simple taxi website or a complete booking management system, we provide end-to-end solutions.",
            "Partner with us to grow your taxi business with a modern digital transportation platform."
        ],

        challenges: [
            {
                icon: "📞",
                title: "Manual Booking Process",
                description: "Customers rely only on phone calls for bookings"
            },
            {
                icon: "📍",
                title: "Lack of Online Presence",
                description: "Taxi services are difficult to discover online"
            },
            {
                icon: "⏳",
                title: "Slow Ride Management",
                description: "Managing rides manually wastes time"
            },
            {
                icon: "💳",
                title: "Payment Difficulties",
                description: "No online payment or booking system"
            },
            {
                icon: "📉",
                title: "Low Customer Trust",
                description: "Unprofessional digital experience"
            },
            {
                icon: "🚖",
                title: "Fleet Coordination Issues",
                description: "Difficulty managing drivers and vehicles"
            }
        ],

        offerings: [
            {
                icon: "🌐",
                title: "Taxi Booking Website",
                description: "Professional and responsive taxi business websites",
                benefits: [
                    "Modern UI Design",
                    "Mobile-Friendly Layout",
                    "SEO-Friendly Structure",
                    "Fast Performance"
                ]
            },
            {
                icon: "📅",
                title: "Online Ride Booking",
                description: "Enable customers to book rides online easily",
                benefits: [
                    "Ride Booking Forms",
                    "Pickup & Drop Selection",
                    "Fare Enquiry System",
                    "Booking Confirmation"
                ]
            },
            {
                icon: "📍",
                title: "GPS & Map Integration",
                description: "Real-time location and route support",
                benefits: [
                    "Google Maps Integration",
                    "Location Tracking",
                    "Route Navigation",
                    "Distance Calculation"
                ]
            },
            {
                icon: "💳",
                title: "Payment Integration",
                description: "Secure online payment systems",
                benefits: [
                    "Online Payment Gateway",
                    "UPI & Card Payments",
                    "Invoice Generation",
                    "Booking Payment Tracking"
                ]
            },
            {
                icon: "🚖",
                title: "Fleet & Driver Management",
                description: "Manage drivers and vehicles efficiently",
                benefits: [
                    "Driver Profiles",
                    "Fleet Information",
                    "Ride Assignment",
                    "Availability Management"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Advanced admin tools for taxi operations",
                benefits: [
                    "Admin Dashboard",
                    "Booking Analytics",
                    "Customer Management",
                    "Automated Notifications"
                ]
            }
        ],

        pricing: [
            {
                name: "Starter Ride 💫",

                oneTimePrice: 14999,

                partPaymentPrice: 15999,

                recommendedFor: ["Local taxi services", "Small cab operators", "Startup taxi businesses"],

                installments: {
                    first: { percentage: 30, description: "🌐 Website Design & Setup" },
                    second: { percentage: 50, description: "📅 Booking System Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🚖",
                        title: "Taxi Website Essentials",
                        items: [
                            "Responsive Taxi Website",
                            "Online Ride Booking Form",
                            "Contact & Enquiry Integration",
                            "Google Maps Integration",
                            "Whatsapp Chat Integration",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for small taxi businesses",
                    "Mobile-friendly responsive website",
                    "3 months of support"
                ]
            },

            {
                name: "Business Fleet 🌟",

                oneTimePrice: 27999,

                partPaymentPrice: 28999,

                recommendedFor: ["Growing taxi businesses", "Airport taxi services", "Fleet operators"],

                installments: {
                    first: { percentage: 30, description: "📍 Maps & Booking Features" },
                    second: { percentage: 50, description: "💳 Payment & Fleet Management" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Starter Ride",
                        items: []
                    },
                    {
                        icon: "💳",
                        title: "Advanced Taxi Features",
                        items: [
                            "Online Payment Integration",
                            "Driver & Fleet Management",
                            "Fare Estimation System",
                            "Advanced Booking Management",
                            "SEO Optimization",
                            "Customer Notification System"
                        ]
                    }
                ],

                highlights: [
                    "Complete taxi business management solution",
                    "6 months of priority support",
                    "Optimized booking and customer experience"
                ],

                popular: true
            },

            {
                name: "Smart Transport 👑",

                oneTimePrice: 44999,

                partPaymentPrice: 45999,

                recommendedFor: ["Large taxi companies", "Corporate transport services", "Multi-city fleet businesses"],

                installments: {
                    first: { percentage: 30, description: "🚖 Advanced Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Business Fleet",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Real-Time Booking Management",
                            "Advanced Analytics & Reports",
                            "Automated SMS & Email Alerts",
                            "Multi-Driver Access",
                            "Fleet Tracking System",
                            "Custom API Integrations"
                        ]
                    }
                ],

                highlights: [
                    "Complete smart transportation platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable enterprise-ready system"
                ]
            }
        ],

        svgComponent: 'TaxiWebsiteSVG',

        path: "/services/taxi-website-service",


        stats: {
            clients: 70,
            projects: 110,
            satisfaction: 98
        },

        keywords: "taxi website, taxi booking website, cab booking website, taxi management system, online taxi booking, fleet management website, cab service website"
    },
    {
        id: 6,

        title: "Astrology Website",

        subtitle: "Spiritual and modern astrology websites designed to grow your online presence.",

        startingPrice: "Starts from ₹11,999",

        description: "Build a professional astrology website with consultation booking, horoscope services, kundli reports, spiritual branding, and online client engagement features.",

        descriptionContent: "Our Astrology Website solutions are crafted for astrologers, spiritual consultants, tarot readers, and Vastu experts who want to establish a powerful digital presence. We create elegant, responsive, and feature-rich astrology websites that help you connect with clients, offer online consultations, manage bookings, and showcase your spiritual services professionally. From horoscope sections to payment integration and kundli report systems, we provide complete end-to-end digital solutions tailored for the astrology industry.",

        detailedDescription: [
            "A professional astrology website helps build trust and credibility with clients online.",
            "We create elegant and spiritual-themed astrology websites tailored to your expertise and services.",
            "Our websites are designed to showcase horoscope services, kundli reports, consultations, and spiritual guidance beautifully.",
            "We integrate appointment booking systems, payment gateways, and customer enquiry forms for smooth client interactions.",
            "Our responsive designs ensure users can access your astrology services seamlessly on any device.",
            "From Vedic astrology and tarot reading to numerology and Vastu consultation, we create websites for every spiritual niche.",
            "We focus on creating calming, engaging, and user-friendly digital experiences.",
            "Our SEO-friendly structure helps astrologers improve visibility and attract more clients online.",
            "Partner with us to grow your astrology business with a modern and spiritually aligned digital platform."
        ],

        challenges: [
            {
                icon: "🔍",
                title: "Low Online Visibility",
                description: "Difficulty reaching spiritual clients online"
            },
            {
                icon: "📅",
                title: "Manual Appointment Handling",
                description: "Managing consultations manually becomes difficult"
            },
            {
                icon: "💳",
                title: "Payment Collection Issues",
                description: "No secure online payment system"
            },
            {
                icon: "📱",
                title: "Weak Digital Branding",
                description: "Lack of professional online presence"
            },
            {
                icon: "🌐",
                title: "Limited Service Accessibility",
                description: "Clients cannot access services online easily"
            },
            {
                icon: "📉",
                title: "Low Client Engagement",
                description: "Poor interaction and follow-up with customers"
            }
        ],

        offerings: [
            {
                icon: "✨",
                title: "Spiritual Website Design",
                description: "Beautiful astrology-themed website designs",
                benefits: [
                    "Custom Spiritual Themes",
                    "Responsive Design",
                    "Modern User Interface",
                    "Brand-Focused Layouts"
                ]
            },
            {
                icon: "📅",
                title: "Consultation Booking System",
                description: "Allow clients to schedule appointments online",
                benefits: [
                    "Appointment Booking",
                    "Time Slot Management",
                    "Online Consultation Requests",
                    "Booking Notifications"
                ]
            },
            {
                icon: "🔮",
                title: "Astrology Service Features",
                description: "Showcase your astrology and spiritual services",
                benefits: [
                    "Horoscope Sections",
                    "Kundli Services",
                    "Tarot Reading Pages",
                    "Vastu Consultation Listings"
                ]
            },
            {
                icon: "💳",
                title: "Online Payment Integration",
                description: "Secure payment collection for services",
                benefits: [
                    "UPI & Card Payments",
                    "Consultation Payments",
                    "Invoice Generation",
                    "Payment Tracking"
                ]
            },
            {
                icon: "📈",
                title: "SEO & Online Growth",
                description: "Improve visibility and attract more clients",
                benefits: [
                    "SEO Optimization",
                    "Google Visibility",
                    "Lead Capture Forms",
                    "Analytics Integration"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Manage your astrology business efficiently",
                benefits: [
                    "Admin Dashboard",
                    "Client Management",
                    "Automated Notifications",
                    "Service Management"
                ]
            }
        ],

        pricing: [
            {
                name: "Spiritual Start 💫",

                oneTimePrice: 11999,

                partPaymentPrice: 12999,

                recommendedFor: ["Individual astrologers", "Tarot readers", "Spiritual startups"],

                installments: {
                    first: { percentage: 30, description: "✨ Design & Branding" },
                    second: { percentage: 50, description: "📅 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🔮",
                        title: "Astrology Essentials",
                        items: [
                            "Responsive Astrology Website",
                            "Consultation Booking Form",
                            "Horoscope & Service Pages",
                            "Whatsapp Chat Integration",
                            "Contact & Enquiry Forms",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for astrologers starting online",
                    "Mobile-friendly spiritual website",
                    "3 months of support"
                ]
            },

            {
                name: "Cosmic Growth 🌟",

                oneTimePrice: 24999,

                partPaymentPrice: 25999,

                recommendedFor: ["Growing astrology businesses", "Professional consultants", "Vastu experts"],

                installments: {
                    first: { percentage: 30, description: "🔮 Astrology Features" },
                    second: { percentage: 50, description: "💳 Booking & Payment System" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Spiritual Start",
                        items: []
                    },
                    {
                        icon: "💳",
                        title: "Advanced Features",
                        items: [
                            "Online Payment Integration",
                            "Advanced Appointment Scheduling",
                            "SEO Optimization",
                            "Kundli Report Features",
                            "Google Analytics Setup",
                            "Social Media Integration"
                        ]
                    }
                ],

                highlights: [
                    "Complete astrology business solution",
                    "6 months of priority support",
                    "Enhanced online client engagement"
                ],

                popular: true
            },

            {
                name: "Divine Empire 👑",

                oneTimePrice: 39999,

                partPaymentPrice: 40999,

                recommendedFor: ["Astrology agencies", "Large spiritual platforms", "Multi-service consultants"],

                installments: {
                    first: { percentage: 30, description: "📈 Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Cosmic Growth",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Client Management System",
                            "Automated Consultation Notifications",
                            "Advanced Service Management",
                            "Real-Time Analytics",
                            "Custom API Integrations",
                            "Premium UI Animations"
                        ]
                    }
                ],

                highlights: [
                    "Complete astrology business platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable multi-service solution"
                ]
            }
        ],

        svgComponent: 'AstrologyWebsiteSVG',

        path: "/services/astrology-website",


        stats: {
            clients: 55,
            projects: 85,
            satisfaction: 99
        },

        keywords: "astrology website, astrologer website, kundli website, horoscope website, tarot reading website, vastu consultation website, spiritual business website"
    },
    {
        id: 7,

        title: "Dance Website",

        subtitle: "Creative and energetic dance websites designed to showcase talent and grow your academy online.",

        startingPrice: "Starts from ₹9,999",

        description: "Build a stunning dance website for dance academies, choreographers, performers, and studios with class management, event promotion, galleries, and online registrations.",

        descriptionContent: "Our Dance Website solutions are designed for dance academies, choreographers, performers, and event organizers who want to establish a strong digital presence. We create visually engaging, responsive, and feature-rich dance websites that help promote classes, showcase performances, manage registrations, and connect with students online. From dance portfolios and event galleries to online booking and academy management systems, we provide complete digital solutions tailored for the dance industry.",

        detailedDescription: [
            "A professional dance website helps showcase your talent and build credibility online.",
            "We create visually stunning and energetic websites that reflect the creativity of your dance brand.",
            "Our websites are designed to promote dance classes, workshops, performances, and academy events effectively.",
            "We integrate online registration systems, galleries, schedules, and enquiry forms for smooth user interaction.",
            "Our responsive designs ensure students and audiences can access information easily on any device.",
            "From classical dance academies to modern choreography studios, we create websites tailored to every dance style.",
            "We focus on creating engaging user experiences with animations, videos, and interactive sections.",
            "Our SEO-friendly structure helps dance academies improve online visibility and attract more students.",
            "Partner with us to grow your dance academy or performance brand with a powerful digital platform."
        ],

        challenges: [
            {
                icon: "📱",
                title: "Low Online Presence",
                description: "Difficulty reaching students and audiences online"
            },
            {
                icon: "📅",
                title: "Manual Class Management",
                description: "Managing schedules and registrations manually"
            },
            {
                icon: "🎥",
                title: "Showcasing Performances",
                description: "No professional platform to display dance work"
            },
            {
                icon: "📉",
                title: "Low Student Engagement",
                description: "Limited interaction with students and parents"
            },
            {
                icon: "💳",
                title: "Payment Management Issues",
                description: "No secure online fee collection system"
            },
            {
                icon: "🎟️",
                title: "Event Promotion Challenges",
                description: "Difficulty promoting dance events and workshops"
            }
        ],

        offerings: [
            {
                icon: "🎨",
                title: "Creative Website Design",
                description: "Modern and artistic dance-themed website designs",
                benefits: [
                    "Custom Dance Themes",
                    "Responsive Design",
                    "Interactive Animations",
                    "Modern User Interface"
                ]
            },
            {
                icon: "📅",
                title: "Class & Registration Management",
                description: "Manage dance classes and student registrations online",
                benefits: [
                    "Online Registration Forms",
                    "Class Schedules",
                    "Batch Management",
                    "Student Enquiry Forms"
                ]
            },
            {
                icon: "🎥",
                title: "Portfolio & Gallery",
                description: "Showcase performances and achievements beautifully",
                benefits: [
                    "Photo Galleries",
                    "Dance Video Embedding",
                    "Performance Portfolio",
                    "Achievement Showcase"
                ]
            },
            {
                icon: "🎟️",
                title: "Events & Workshops",
                description: "Promote dance events and workshops effectively",
                benefits: [
                    "Event Listings",
                    "Workshop Registration",
                    "Countdown Timers",
                    "Online Promotions"
                ]
            },
            {
                icon: "💳",
                title: "Payment Integration",
                description: "Secure online payments for classes and events",
                benefits: [
                    "UPI & Card Payments",
                    "Fee Collection",
                    "Invoice Generation",
                    "Payment Tracking"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Simplify academy management with smart tools",
                benefits: [
                    "Admin Dashboard",
                    "Student Management",
                    "Automated Notifications",
                    "Analytics & Reporting"
                ]
            }
        ],

        pricing: [
            {
                name: "Rhythm Start 💫",

                oneTimePrice: 9999,

                partPaymentPrice: 10999,

                recommendedFor: ["Dance beginners", "Small dance studios", "Independent choreographers"],

                installments: {
                    first: { percentage: 30, description: "🎨 Design & Branding" },
                    second: { percentage: 50, description: "📅 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "💃",
                        title: "Dance Essentials",
                        items: [
                            "Responsive Dance Website",
                            "Class Schedule Section",
                            "Photo & Video Gallery",
                            "Student Enquiry Form",
                            "Whatsapp Chat Integration",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for dance startups and small studios",
                    "Creative mobile-friendly website",
                    "3 months of support"
                ]
            },

            {
                name: "Stage Performer 🌟",

                oneTimePrice: 21999,

                partPaymentPrice: 22999,

                recommendedFor: ["Growing dance academies", "Dance instructors", "Performance groups"],

                installments: {
                    first: { percentage: 30, description: "🎥 Gallery & Event Features" },
                    second: { percentage: 50, description: "💳 Registration & Payment System" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Rhythm Start",
                        items: []
                    },
                    {
                        icon: "🎟️",
                        title: "Advanced Features",
                        items: [
                            "Online Class Registration",
                            "Workshop & Event Management",
                            "Payment Gateway Integration",
                            "SEO Optimization",
                            "Google Analytics Setup",
                            "Social Media Integration"
                        ]
                    }
                ],

                highlights: [
                    "Complete dance academy management solution",
                    "6 months of priority support",
                    "Enhanced student engagement features"
                ],

                popular: true
            },

            {
                name: "Dance Empire 👑",

                oneTimePrice: 37999,

                partPaymentPrice: 38999,

                recommendedFor: ["Large dance academies", "Dance franchises", "Event organizers"],

                installments: {
                    first: { percentage: 30, description: "🎟️ Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Stage Performer",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Advanced Student Management",
                            "Automated Notifications",
                            "Real-Time Analytics",
                            "Multi-Instructor Access",
                            "Custom API Integrations",
                            "Premium UI Animations"
                        ]
                    }
                ],

                highlights: [
                    "Complete digital dance academy platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable multi-branch solution"
                ]
            }
        ],

        svgComponent: 'DanceWebsiteSVG',

        path: "/services/dance-website",


        stats: {
            clients: 65,
            projects: 100,
            satisfaction: 99
        },

        keywords: "dance website, dance academy website, choreography website, dance studio website, online dance classes website, dance portfolio website, dance event website"
    },
    {
        id: 8,

        title: "Gym Website",

        subtitle: "Powerful fitness websites designed to grow your gym and engage members online.",

        startingPrice: "Starts from ₹12,999",

        description: "Build a modern gym website with membership management, fitness programs, trainer profiles, online registrations, and performance-driven digital features.",

        descriptionContent: "Our Gym Website solutions are designed for fitness centers, personal trainers, yoga studios, and health clubs looking to establish a strong online presence. We create responsive, visually impactful, and feature-rich fitness websites that help attract members, manage classes, showcase trainers, and boost engagement. From membership systems and online registrations to workout schedules and fitness blogs, we provide complete digital solutions tailored for the fitness industry.",

        detailedDescription: [
            "A professional gym website helps attract new members and build trust in your fitness brand.",
            "We create modern and energetic fitness websites tailored to gyms, trainers, and fitness studios.",
            "Our websites are designed to showcase workout programs, memberships, trainer profiles, and transformation stories effectively.",
            "We integrate online registration systems, membership plans, schedules, and enquiry forms for seamless user interaction.",
            "Our responsive designs ensure members can access fitness information anytime on any device.",
            "From local gyms to premium fitness centers, we create scalable websites tailored to every fitness business.",
            "We focus on creating engaging user experiences with dynamic visuals, videos, and motivational design elements.",
            "Our SEO-friendly structure helps gyms improve online visibility and attract more fitness enthusiasts.",
            "Partner with us to transform your fitness business into a powerful digital fitness brand."
        ],

        challenges: [
            {
                icon: "📉",
                title: "Low Membership Growth",
                description: "Difficulty attracting new fitness members online"
            },
            {
                icon: "📅",
                title: "Manual Class Scheduling",
                description: "Managing workout schedules manually becomes difficult"
            },
            {
                icon: "💳",
                title: "Membership Payment Issues",
                description: "No online payment and subscription system"
            },
            {
                icon: "📱",
                title: "Weak Online Branding",
                description: "Lack of a professional fitness presence"
            },
            {
                icon: "🎥",
                title: "Limited Fitness Showcase",
                description: "No engaging platform for workouts and transformations"
            },
            {
                icon: "🤝",
                title: "Low Member Engagement",
                description: "Limited communication with gym members"
            }
        ],

        offerings: [
            {
                icon: "🏋️",
                title: "Fitness Website Design",
                description: "Modern and energetic gym website designs",
                benefits: [
                    "Custom Fitness Themes",
                    "Responsive Design",
                    "Interactive Layouts",
                    "Modern User Experience"
                ]
            },
            {
                icon: "📅",
                title: "Membership & Class Management",
                description: "Manage memberships and workout schedules online",
                benefits: [
                    "Online Membership Registration",
                    "Workout Schedules",
                    "Class Booking System",
                    "Member Enquiry Forms"
                ]
            },
            {
                icon: "💪",
                title: "Trainer & Program Showcase",
                description: "Display trainers and fitness programs professionally",
                benefits: [
                    "Trainer Profiles",
                    "Workout Program Pages",
                    "Transformation Galleries",
                    "Video Embedding"
                ]
            },
            {
                icon: "💳",
                title: "Online Payment Integration",
                description: "Secure online payments for memberships and classes",
                benefits: [
                    "UPI & Card Payments",
                    "Membership Payments",
                    "Invoice Generation",
                    "Subscription Tracking"
                ]
            },
            {
                icon: "📈",
                title: "SEO & Marketing Features",
                description: "Grow your fitness business online",
                benefits: [
                    "SEO Optimization",
                    "Fitness Blog Integration",
                    "Google Analytics Setup",
                    "Social Media Integration"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Smart tools to simplify gym management",
                benefits: [
                    "Admin Dashboard",
                    "Member Management",
                    "Automated Notifications",
                    "Analytics & Reporting"
                ]
            }
        ],

        pricing: [
            {
                name: "Fitness Start 💫",

                oneTimePrice: 12999,

                partPaymentPrice: 13999,

                recommendedFor: ["Small gyms", "Personal trainers", "Yoga studios"],

                installments: {
                    first: { percentage: 30, description: "🏋️ Design & Branding" },
                    second: { percentage: 50, description: "📅 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "💪",
                        title: "Gym Essentials",
                        items: [
                            "Responsive Gym Website",
                            "Workout Schedule Section",
                            "Trainer Profile Pages",
                            "Membership Enquiry Form",
                            "Whatsapp Chat Integration",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for small gyms and fitness startups",
                    "Mobile-friendly fitness website",
                    "3 months of support"
                ]
            },

            {
                name: "Power Fitness 🌟",

                oneTimePrice: 26999,

                partPaymentPrice: 27999,

                recommendedFor: ["Growing gyms", "Fitness studios", "Health clubs"],

                installments: {
                    first: { percentage: 30, description: "💪 Fitness Features" },
                    second: { percentage: 50, description: "💳 Membership & Payment System" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Fitness Start",
                        items: []
                    },
                    {
                        icon: "📈",
                        title: "Advanced Features",
                        items: [
                            "Online Membership Registration",
                            "Workout Program Management",
                            "Payment Gateway Integration",
                            "SEO Optimization",
                            "Fitness Blog Setup",
                            "Google Analytics Integration"
                        ]
                    }
                ],

                highlights: [
                    "Complete fitness business solution",
                    "6 months of priority support",
                    "Enhanced member engagement tools"
                ],

                popular: true
            },

            {
                name: "Fitness Empire 👑",

                oneTimePrice: 42999,

                partPaymentPrice: 43999,

                recommendedFor: ["Large fitness chains", "Premium gyms", "Multi-branch fitness businesses"],

                installments: {
                    first: { percentage: 30, description: "📈 Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Power Fitness",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Advanced Member Management",
                            "Automated Notifications",
                            "Real-Time Analytics",
                            "Multi-Trainer Access",
                            "Custom API Integrations",
                            "Premium UI Animations"
                        ]
                    }
                ],

                highlights: [
                    "Complete digital fitness platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable multi-branch solution"
                ]
            }
        ],

        svgComponent: 'GYMWebsiteSVG',

        path: "/services/gym-website",


        stats: {
            clients: 75,
            projects: 120,
            satisfaction: 99
        },

        keywords: "gym website, fitness website, gym management website, personal trainer website, fitness studio website, workout website, health club website"
    },
    {
        id: 9,

        title: "Salon Website",

        subtitle: "Elegant and modern salon websites designed to attract clients and grow your beauty business.",

        startingPrice: "Starts from ₹10,999",

        description: "Build a professional salon website with online appointment booking, beauty service showcases, staff profiles, customer engagement tools, and modern branding features.",

        descriptionContent: "Our Salon Website solutions are designed for beauty salons, spas, makeup artists, hair studios, and wellness centers looking to establish a strong digital presence. We create stylish, responsive, and feature-rich salon websites that help attract clients, manage appointments, showcase services, and build trust online. From online booking systems and beauty galleries to membership features and digital promotions, we provide complete website solutions tailored for the beauty and wellness industry.",

        detailedDescription: [
            "A professional salon website helps build trust and attract more beauty clients online.",
            "We create elegant and stylish salon websites tailored to your beauty brand and services.",
            "Our websites are designed to showcase salon services, pricing, offers, and beauty transformations effectively.",
            "We integrate appointment booking systems, enquiry forms, and customer engagement tools for smooth interactions.",
            "Our responsive designs ensure clients can browse services and book appointments from any device.",
            "From beauty salons and spas to makeup studios and wellness centers, we create websites for every beauty business.",
            "We focus on creating luxurious and user-friendly digital experiences with attractive visuals and branding.",
            "Our SEO-friendly structure helps salons improve visibility and attract local customers online.",
            "Partner with us to grow your salon business with a modern and professional digital platform."
        ],

        challenges: [
            {
                icon: "📅",
                title: "Manual Appointment Booking",
                description: "Managing appointments manually takes time"
            },
            {
                icon: "📱",
                title: "Weak Online Presence",
                description: "Difficulty attracting clients online"
            },
            {
                icon: "💇",
                title: "Service Showcase Issues",
                description: "No professional platform to display beauty services"
            },
            {
                icon: "💳",
                title: "Payment & Membership Problems",
                description: "No online payment or membership management"
            },
            {
                icon: "📉",
                title: "Low Customer Engagement",
                description: "Limited interaction with beauty clients"
            },
            {
                icon: "🌐",
                title: "Branding Challenges",
                description: "Lack of modern digital branding"
            }
        ],

        offerings: [
            {
                icon: "✨",
                title: "Salon Website Design",
                description: "Elegant and modern beauty website designs",
                benefits: [
                    "Custom Beauty Themes",
                    "Responsive Design",
                    "Luxury User Interface",
                    "Modern Branding"
                ]
            },
            {
                icon: "📅",
                title: "Appointment Booking System",
                description: "Allow clients to book salon services online",
                benefits: [
                    "Online Appointment Booking",
                    "Time Slot Management",
                    "Booking Notifications",
                    "Customer Enquiry Forms"
                ]
            },
            {
                icon: "💇",
                title: "Service & Staff Showcase",
                description: "Display beauty services and salon professionals",
                benefits: [
                    "Service Listing Pages",
                    "Pricing Sections",
                    "Staff Profiles",
                    "Beauty Gallery"
                ]
            },
            {
                icon: "💳",
                title: "Payment & Membership Features",
                description: "Secure payments and customer memberships",
                benefits: [
                    "UPI & Card Payments",
                    "Membership Plans",
                    "Invoice Generation",
                    "Subscription Tracking"
                ]
            },
            {
                icon: "📈",
                title: "SEO & Marketing Features",
                description: "Grow your beauty business online",
                benefits: [
                    "SEO Optimization",
                    "Google Business Integration",
                    "Social Media Integration",
                    "Google Analytics Setup"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Simplify salon management with smart tools",
                benefits: [
                    "Admin Dashboard",
                    "Customer Management",
                    "Automated Notifications",
                    "Analytics & Reporting"
                ]
            }
        ],

        pricing: [
            {
                name: "Beauty Start 💫",

                oneTimePrice: 10999,

                partPaymentPrice: 11999,

                recommendedFor: ["Small salons", "Makeup artists", "Beauty startups"],

                installments: {
                    first: { percentage: 30, description: "✨ Design & Branding" },
                    second: { percentage: 50, description: "📅 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "💇",
                        title: "Salon Essentials",
                        items: [
                            "Responsive Salon Website",
                            "Appointment Booking Form",
                            "Service & Pricing Pages",
                            "Beauty Gallery",
                            "Whatsapp Chat Integration",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for salons and beauty startups",
                    "Mobile-friendly salon website",
                    "3 months of support"
                ]
            },

            {
                name: "Luxury Beauty 🌟",

                oneTimePrice: 24999,

                partPaymentPrice: 25999,

                recommendedFor: ["Growing salons", "Spa centers", "Beauty studios"],

                installments: {
                    first: { percentage: 30, description: "💇 Beauty Features" },
                    second: { percentage: 50, description: "💳 Booking & Membership System" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Beauty Start",
                        items: []
                    },
                    {
                        icon: "📈",
                        title: "Advanced Features",
                        items: [
                            "Online Appointment Management",
                            "Membership & Subscription Plans",
                            "Payment Gateway Integration",
                            "SEO Optimization",
                            "Google Analytics Integration",
                            "Social Media Integration"
                        ]
                    }
                ],

                highlights: [
                    "Complete beauty business solution",
                    "6 months of priority support",
                    "Enhanced customer engagement tools"
                ],

                popular: true
            },

            {
                name: "Salon Empire 👑",

                oneTimePrice: 39999,

                partPaymentPrice: 40999,

                recommendedFor: ["Luxury salons", "Spa chains", "Multi-branch beauty businesses"],

                installments: {
                    first: { percentage: 30, description: "📈 Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Luxury Beauty",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Advanced Customer Management",
                            "Automated Notifications",
                            "Real-Time Analytics",
                            "Multi-Staff Access",
                            "Custom API Integrations",
                            "Premium UI Animations"
                        ]
                    }
                ],

                highlights: [
                    "Complete digital salon platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable multi-branch solution"
                ]
            }
        ],

        svgComponent: 'SalonWebsiteSVG',

        path: "/services/salon-website",

        stats: {
            clients: 70,
            projects: 115,
            satisfaction: 99
        },

        keywords: "salon website, beauty salon website, spa website, makeup artist website, salon booking website, beauty business website, wellness center website"
    },
    {
        id: 10,

        title: "Construction Website",

        subtitle: "Professional construction websites designed to showcase projects and generate quality leads.",

        startingPrice: "Starts from ₹14,999",

        description: "Build a modern construction website with project showcases, service pages, enquiry systems, contractor profiles, and business growth features for your construction company.",

        descriptionContent: "Our Construction Website solutions are designed for builders, contractors, architects, real estate developers, and infrastructure companies looking to establish a strong online presence. We create modern, responsive, and feature-rich construction websites that help showcase projects, attract clients, generate leads, and build credibility online. From portfolio galleries and enquiry systems to project management features and digital branding, we provide complete website solutions tailored for the construction industry.",

        detailedDescription: [
            "A professional construction website helps build trust and attract more clients for your business.",
            "We create modern and impactful construction websites tailored to builders, contractors, and infrastructure companies.",
            "Our websites are designed to showcase projects, services, company achievements, and client testimonials effectively.",
            "We integrate enquiry systems, project galleries, and contact tools for seamless customer interaction.",
            "Our responsive designs ensure clients can explore your services and projects on any device.",
            "From residential builders to large construction firms, we create websites tailored to every construction business.",
            "We focus on creating strong digital branding with professional visuals and user-friendly layouts.",
            "Our SEO-friendly structure helps construction companies improve online visibility and generate more leads.",
            "Partner with us to grow your construction business with a modern and professional digital platform."
        ],

        challenges: [
            {
                icon: "📉",
                title: "Low Online Visibility",
                description: "Difficulty attracting construction clients online"
            },
            {
                icon: "🏗️",
                title: "Project Showcase Issues",
                description: "No professional platform to display completed projects"
            },
            {
                icon: "📞",
                title: "Poor Lead Generation",
                description: "Missing enquiry and lead capture systems"
            },
            {
                icon: "📱",
                title: "Weak Digital Branding",
                description: "Lack of a strong professional online presence"
            },
            {
                icon: "📂",
                title: "Disorganized Project Information",
                description: "Difficult to present services and projects clearly"
            },
            {
                icon: "🤝",
                title: "Low Client Trust",
                description: "Outdated websites reduce business credibility"
            }
        ],

        offerings: [
            {
                icon: "🏗️",
                title: "Construction Website Design",
                description: "Modern and professional construction website designs",
                benefits: [
                    "Custom Construction Themes",
                    "Responsive Design",
                    "Professional Layouts",
                    "Modern User Experience"
                ]
            },
            {
                icon: "📂",
                title: "Project Portfolio Showcase",
                description: "Display construction projects professionally",
                benefits: [
                    "Project Galleries",
                    "Before & After Showcase",
                    "Project Details Pages",
                    "Case Study Sections"
                ]
            },
            {
                icon: "📞",
                title: "Lead & Enquiry System",
                description: "Capture potential clients effectively",
                benefits: [
                    "Enquiry Forms",
                    "Quotation Request Forms",
                    "Call & Whatsapp Integration",
                    "Lead Management"
                ]
            },
            {
                icon: "👷",
                title: "Service & Team Showcase",
                description: "Highlight your services and construction team",
                benefits: [
                    "Service Listing Pages",
                    "Team Profiles",
                    "Company Achievements",
                    "Client Testimonials"
                ]
            },
            {
                icon: "📈",
                title: "SEO & Marketing Features",
                description: "Improve online visibility and business growth",
                benefits: [
                    "SEO Optimization",
                    "Google Business Integration",
                    "Analytics Setup",
                    "Social Media Integration"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Smart tools to manage projects and enquiries",
                benefits: [
                    "Admin Dashboard",
                    "Lead Tracking",
                    "Automated Notifications",
                    "Analytics & Reporting"
                ]
            }
        ],

        pricing: [
            {
                name: "Builder Start 💫",

                oneTimePrice: 14999,

                partPaymentPrice: 15999,

                recommendedFor: ["Small contractors", "Builders", "Construction startups"],

                installments: {
                    first: { percentage: 30, description: "🏗️ Design & Branding" },
                    second: { percentage: 50, description: "📂 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🏢",
                        title: "Construction Essentials",
                        items: [
                            "Responsive Construction Website",
                            "Project Showcase Gallery",
                            "Service Listing Pages",
                            "Enquiry & Contact Forms",
                            "Whatsapp Chat Integration",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for builders and contractors",
                    "Professional mobile-friendly website",
                    "3 months of support"
                ]
            },

            {
                name: "Infrastructure Pro 🌟",

                oneTimePrice: 28999,

                partPaymentPrice: 29999,

                recommendedFor: ["Growing construction companies", "Architects", "Real estate developers"],

                installments: {
                    first: { percentage: 30, description: "📂 Project & Lead Features" },
                    second: { percentage: 50, description: "📈 SEO & Business Growth System" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Builder Start",
                        items: []
                    },
                    {
                        icon: "📈",
                        title: "Advanced Features",
                        items: [
                            "Advanced Project Portfolio",
                            "Lead Management System",
                            "SEO Optimization",
                            "Google Analytics Integration",
                            "Client Testimonial Sections",
                            "Social Media Integration"
                        ]
                    }
                ],

                highlights: [
                    "Complete construction business solution",
                    "6 months of priority support",
                    "Enhanced lead generation features"
                ],

                popular: true
            },

            {
                name: "Construction Empire 👑",

                oneTimePrice: 45999,

                partPaymentPrice: 46999,

                recommendedFor: ["Large construction firms", "Infrastructure companies", "Multi-location businesses"],

                installments: {
                    first: { percentage: 30, description: "🏗️ Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Infrastructure Pro",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Advanced Lead & Project Management",
                            "Automated Notifications",
                            "Real-Time Analytics",
                            "Multi-Team Access",
                            "Custom API Integrations",
                            "Premium UI Animations"
                        ]
                    }
                ],

                highlights: [
                    "Complete digital construction platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable enterprise-ready solution"
                ]
            }
        ],

        svgComponent: 'ConstructionWebsiteSVG',

        path: "/services/construction-website",

        stats: {
            clients: 85,
            projects: 140,
            satisfaction: 99
        },

        keywords: "construction website, builder website, contractor website, architecture website, real estate construction website, infrastructure company website, construction business website"
    },
    {
        id: 11,

        title: "Interior Website",

        subtitle: "Elegant interior design websites crafted to showcase creativity and attract premium clients.",

        startingPrice: "Starts from ₹13,999",

        description: "Build a stylish interior design website with portfolio showcases, service pages, project galleries, enquiry systems, and premium branding features for your interior business.",

        descriptionContent: "Our Interior Website solutions are designed for interior designers, home decorators, architects, furniture studios, and luxury design brands looking to establish a powerful online presence. We create visually stunning, responsive, and feature-rich websites that help showcase projects, attract premium clients, and strengthen brand credibility. From portfolio galleries and consultation booking systems to digital branding and lead generation tools, we provide complete website solutions tailored for the interior design industry.",

        detailedDescription: [
            "A professional interior website helps showcase your creativity and build trust with potential clients.",
            "We create elegant and modern interior design websites tailored to your design style and brand identity.",
            "Our websites are designed to display portfolios, services, project galleries, and client testimonials beautifully.",
            "We integrate enquiry systems, consultation booking forms, and contact tools for seamless client interaction.",
            "Our responsive designs ensure clients can explore your projects and services on any device.",
            "From residential interior designers to luxury commercial design firms, we create websites for every interior business.",
            "We focus on creating visually immersive digital experiences with premium layouts and modern aesthetics.",
            "Our SEO-friendly structure helps interior brands improve online visibility and attract more premium clients.",
            "Partner with us to transform your interior business into a strong digital design brand."
        ],

        challenges: [
            {
                icon: "📉",
                title: "Low Online Visibility",
                description: "Difficulty attracting interior clients online"
            },
            {
                icon: "🖼️",
                title: "Portfolio Showcase Issues",
                description: "No professional platform to display design projects"
            },
            {
                icon: "📞",
                title: "Poor Lead Generation",
                description: "Missing enquiry and consultation systems"
            },
            {
                icon: "🎨",
                title: "Weak Brand Identity",
                description: "Lack of premium digital branding"
            },
            {
                icon: "📂",
                title: "Disorganized Project Presentation",
                description: "Projects and services are difficult to showcase properly"
            },
            {
                icon: "🤝",
                title: "Low Client Trust",
                description: "Outdated websites reduce professional credibility"
            }
        ],

        offerings: [
            {
                icon: "🎨",
                title: "Interior Website Design",
                description: "Luxury and modern interior design website layouts",
                benefits: [
                    "Custom Interior Themes",
                    "Responsive Design",
                    "Premium User Interface",
                    "Modern Branding"
                ]
            },
            {
                icon: "🖼️",
                title: "Portfolio & Project Showcase",
                description: "Display your interior projects professionally",
                benefits: [
                    "Project Galleries",
                    "Before & After Showcase",
                    "Case Study Pages",
                    "High-Quality Image Display"
                ]
            },
            {
                icon: "📞",
                title: "Consultation & Enquiry System",
                description: "Generate leads and connect with clients easily",
                benefits: [
                    "Consultation Booking Forms",
                    "Quotation Request System",
                    "Call & Whatsapp Integration",
                    "Lead Capture Tools"
                ]
            },
            {
                icon: "🏡",
                title: "Service & Team Showcase",
                description: "Highlight interior services and design expertise",
                benefits: [
                    "Service Listing Pages",
                    "Designer Profiles",
                    "Client Testimonials",
                    "Company Story Section"
                ]
            },
            {
                icon: "📈",
                title: "SEO & Marketing Features",
                description: "Improve online visibility and attract premium clients",
                benefits: [
                    "SEO Optimization",
                    "Google Business Integration",
                    "Analytics Setup",
                    "Social Media Integration"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Manage enquiries and projects efficiently",
                benefits: [
                    "Admin Dashboard",
                    "Lead Tracking",
                    "Automated Notifications",
                    "Analytics & Reporting"
                ]
            }
        ],

        pricing: [
            {
                name: "Creative Start 💫",

                oneTimePrice: 13999,

                partPaymentPrice: 14999,

                recommendedFor: ["Freelance interior designers", "Small studios", "Home decorators"],

                installments: {
                    first: { percentage: 30, description: "🎨 Design & Branding" },
                    second: { percentage: 50, description: "🖼️ Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🏡",
                        title: "Interior Essentials",
                        items: [
                            "Responsive Interior Website",
                            "Project Portfolio Gallery",
                            "Service Listing Pages",
                            "Consultation Enquiry Forms",
                            "Whatsapp Chat Integration",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for interior startups and freelancers",
                    "Luxury mobile-friendly website",
                    "3 months of support"
                ]
            },

            {
                name: "Luxury Space 🌟",

                oneTimePrice: 29999,

                partPaymentPrice: 30999,

                recommendedFor: ["Growing interior firms", "Architecture studios", "Luxury designers"],

                installments: {
                    first: { percentage: 30, description: "🖼️ Portfolio & Lead Features" },
                    second: { percentage: 50, description: "📈 SEO & Business Growth System" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Creative Start",
                        items: []
                    },
                    {
                        icon: "📈",
                        title: "Advanced Features",
                        items: [
                            "Advanced Portfolio Showcase",
                            "Lead Management System",
                            "SEO Optimization",
                            "Google Analytics Integration",
                            "Premium Gallery Animations",
                            "Social Media Integration"
                        ]
                    }
                ],

                highlights: [
                    "Complete interior business solution",
                    "6 months of priority support",
                    "Enhanced client engagement features"
                ],

                popular: true
            },

            {
                name: "Interior Empire 👑",

                oneTimePrice: 47999,

                partPaymentPrice: 48999,

                recommendedFor: ["Luxury interior brands", "Large design firms", "Multi-location studios"],

                installments: {
                    first: { percentage: 30, description: "🏡 Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Luxury Space",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Advanced Lead & Project Management",
                            "Automated Notifications",
                            "Real-Time Analytics",
                            "Multi-Team Access",
                            "Custom API Integrations",
                            "Premium UI Animations"
                        ]
                    }
                ],

                highlights: [
                    "Complete digital interior design platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable enterprise-ready solution"
                ]
            }
        ],

        svgComponent: 'InteriorWebsiteSVG',

        path: "/services/interior-website",

        stats: {
            clients: 78,
            projects: 130,
            satisfaction: 99
        },

        keywords: "interior website, interior design website, home decor website, architecture interior website, luxury interior website, furniture studio website, interior business website"
    },
    {
        id: 12,

        title: "School Website",

        subtitle: "Modern school websites designed to enhance communication, admissions, and student engagement.",

        startingPrice: "Starts from ₹13,999",

        description: "Build a professional school website with admission enquiry systems, course information, event galleries, student portals, announcements, and premium branding features for educational institutions.",

        descriptionContent: "Our School Website solutions are designed for schools, academies, coaching institutes, colleges, and educational organizations looking to establish a strong digital presence. We create modern, responsive, and feature-rich websites that help improve communication with students and parents, simplify admission processes, and strengthen institutional credibility. From admission enquiry systems and notice boards to student portals and online branding, we provide complete website solutions tailored for the education sector.",

        detailedDescription: [
            "A professional school website helps build trust with parents and improves your institution’s online presence.",
            "We create modern and engaging school websites tailored to your institution’s identity and educational goals.",
            "Our websites are designed to showcase courses, achievements, faculty members, infrastructure, and student activities professionally.",
            "We integrate admission enquiry systems, online registration forms, and communication tools for seamless parent interaction.",
            "Our responsive designs ensure students and parents can access information easily from any device.",
            "From schools and coaching institutes to colleges and academies, we create websites for every educational institution.",
            "We focus on creating user-friendly digital experiences with organized layouts and modern educational branding.",
            "Our SEO-friendly structure helps educational institutions improve online visibility and attract more admissions.",
            "Partner with us to transform your educational institution into a trusted digital learning brand."
        ],

        challenges: [
            {
                icon: "📉",
                title: "Low Online Visibility",
                description: "Difficulty reaching parents and students online"
            },
            {
                icon: "📚",
                title: "Admission Management Issues",
                description: "No proper online admission enquiry system"
            },
            {
                icon: "📞",
                title: "Poor Communication",
                description: "Lack of effective communication channels with parents"
            },
            {
                icon: "🏫",
                title: "Weak Institutional Branding",
                description: "Outdated websites reduce credibility"
            },
            {
                icon: "📂",
                title: "Disorganized Information",
                description: "Courses, notices, and events are difficult to manage"
            },
            {
                icon: "🤝",
                title: "Low Parent Trust",
                description: "Limited digital presence affects confidence"
            }
        ],

        offerings: [
            {
                icon: "🏫",
                title: "School Website Design",
                description: "Modern and professional educational website layouts",
                benefits: [
                    "Custom School Themes",
                    "Responsive Design",
                    "Premium User Interface",
                    "Modern Educational Branding"
                ]
            },
            {
                icon: "📚",
                title: "Admission & Student Portal",
                description: "Simplify admissions and student access",
                benefits: [
                    "Online Admission Forms",
                    "Student Login Portal",
                    "Result & Notice Section",
                    "Fee Enquiry System"
                ]
            },
            {
                icon: "📞",
                title: "Parent Communication System",
                description: "Improve communication with parents and students",
                benefits: [
                    "Whatsapp Integration",
                    "Contact & Enquiry Forms",
                    "Announcements & Alerts",
                    "Event Notifications"
                ]
            },
            {
                icon: "🎓",
                title: "Course & Faculty Showcase",
                description: "Highlight educational programs and staff",
                benefits: [
                    "Course Listing Pages",
                    "Faculty Profiles",
                    "Infrastructure Gallery",
                    "Achievements Showcase"
                ]
            },
            {
                icon: "📈",
                title: "SEO & Marketing Features",
                description: "Improve online visibility and attract admissions",
                benefits: [
                    "SEO Optimization",
                    "Google Business Integration",
                    "Analytics Setup",
                    "Social Media Integration"
                ]
            },
            {
                icon: "🤖",
                title: "Automation & Dashboard",
                description: "Manage admissions and enquiries efficiently",
                benefits: [
                    "Admin Dashboard",
                    "Admission Tracking",
                    "Automated Notifications",
                    "Analytics & Reporting"
                ]
            }
        ],

        pricing: [
            {
                name: "School Starter 🎒",

                oneTimePrice: 13999,

                partPaymentPrice: 14999,

                recommendedFor: ["Small schools", "Coaching institutes", "Educational startups"],

                installments: {
                    first: { percentage: 30, description: "🎨 Design & Branding" },
                    second: { percentage: 50, description: "🏫 Website Development" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "📘",
                        title: "School Essentials",
                        items: [
                            "Responsive School Website",
                            "Course & Faculty Pages",
                            "Admission Enquiry Forms",
                            "Notice Board Section",
                            "Whatsapp Chat Integration",
                            "Domain, SSL & Hosting Setup"
                        ]
                    }
                ],

                highlights: [
                    "Perfect for schools and coaching institutes",
                    "Mobile-friendly educational website",
                    "3 months of support"
                ]
            },

            {
                name: "Smart Campus 🌟",

                oneTimePrice: 29999,

                partPaymentPrice: 30999,

                recommendedFor: ["Growing schools", "Academies", "Colleges"],

                installments: {
                    first: { percentage: 30, description: "📚 Portal & Admission Features" },
                    second: { percentage: 50, description: "📈 SEO & Management System" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "🌟",
                        title: "Everything in School Starter",
                        items: []
                    },
                    {
                        icon: "📈",
                        title: "Advanced Features",
                        items: [
                            "Student Portal",
                            "Admission Management System",
                            "SEO Optimization",
                            "Google Analytics Integration",
                            "Event & Gallery Management",
                            "Social Media Integration"
                        ]
                    }
                ],

                highlights: [
                    "Complete educational institution solution",
                    "6 months of priority support",
                    "Enhanced parent and student engagement"
                ],

                popular: true
            },

            {
                name: "Education Empire 👑",

                oneTimePrice: 47999,

                partPaymentPrice: 48999,

                recommendedFor: ["Large schools", "Multi-campus institutions", "Educational groups"],

                installments: {
                    first: { percentage: 30, description: "🏫 Platform Development" },
                    second: { percentage: 50, description: "🤖 Automation & Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },

                features: [
                    {
                        icon: "👑",
                        title: "Everything in Smart Campus",
                        items: []
                    },
                    {
                        icon: "🤖",
                        title: "Enterprise Features",
                        items: [
                            "Custom Admin Dashboard",
                            "Advanced Admission Management",
                            "Automated Notifications",
                            "Real-Time Analytics",
                            "Multi-User Access",
                            "Custom API Integrations",
                            "Premium UI Animations"
                        ]
                    }
                ],

                highlights: [
                    "Complete digital education platform",
                    "12 months of premium support",
                    "Advanced automation and analytics",
                    "Scalable enterprise-ready solution"
                ]
            }
        ],

        svgComponent: 'SchoolWebsiteSVG',

        path: "/services/school-website",

        stats: {
            clients: 82,
            projects: 145,
            satisfaction: 99
        },

        keywords: "school website, education website, coaching institute website, academy website, college website, student portal website, educational institution website"
    },
]