'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import styles from './Footer.module.css'
import { socialLinks } from '@/json/ditviinfo'
import { contactDetails } from '@/json/ditviinfo'
import { services } from '@/json/services'

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.companyInfo}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/logo/logo.svg"
                                alt="Ditvi Technologies"
                                width={150}
                                height={48}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.description}>
                            Empowering businesses with innovative digital solutions. Transform your vision into reality with our expertise.
                        </p>
                        <div className={styles.contact}>
                            <div className={styles.contactItem}>
                                <FiMail />
                                <a href="mailto:info@ditvitechnologies.com">{contactDetails.email}</a>
                            </div>
                            <div className={styles.contactItem}>
                                <FiPhone />
                                <a href={`tel:${contactDetails.number}`}>{contactDetails.number}</a>
                            </div>
                            <div className={styles.contactItem}>
                                <FiMapPin />
                                <span>{contactDetails.address}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.linksSection}>
                        <div className={styles.linkColumn}>
                            <h3>Quick Links</h3>
                            <ul>
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3>Services</h3>
                            <ul>
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link href={service.path}>{service.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3>Admin</h3>
                            <ul>
                                <li>
                                    <Link href="/admin/login">Admin</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>
                        © {year} Ditvi Technologies. All rights reserved.
                    </div>
                    <div className={styles.social}>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer