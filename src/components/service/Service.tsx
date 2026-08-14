'use client'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import styles from './Service.module.css'
import Heading from '@/custom/heading/Heading'
import Button from '@/custom/buttons/Button'
import { services, ServiceItem } from '../../json/services'
import { svgMap } from '@/svg/svgMap'
import GetQuotePopup from '@/custom/getquotepopup/GetQuotePopup'
import { buildWhatsAppUrl, trackWhatsAppClick } from '@/lib/whatsappTracking'


interface ServiceCardProps {
    service: ServiceItem
    isReversed: boolean
    index: number
}

interface ServicesProps {
    limit?: number
    showViewMore?: boolean
}


const ServiceCard: React.FC<ServiceCardProps> = ({ service, isReversed, index }) => {
    const [showQuotePopup, setShowQuotePopup] = useState(false)

    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2
            }
        }
    }

    const SvgComponent = service.svgComponent ? svgMap[service.svgComponent as keyof typeof svgMap] : null

    return (
        <>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className={`${styles.serviceCard} ${isReversed ? styles.reversed : ''}`}
            >
                <div className={styles.imageContainer}>
                    <div>
                        {SvgComponent && <SvgComponent />}
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <h4 className={styles.serviceSubtitle}>{service.subtitle}</h4>
                    <p className={styles.serviceDescription}>{service.description}</p>

                    {/* Key Offerings Preview */}
                    <div className={styles.offeringsPreview}>
                        {service.offerings.slice(0, 9).map((offering, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={controls}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { delay: 0.3 + idx * 0.1 }
                                    }
                                }}
                                className={styles.offeringItem}
                            >
                                <span className={styles.offeringIcon}>{offering.icon}</span>
                                <span className={styles.offeringTitle}>{offering.title}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <Button href={service.path} className={styles.buttonItem} variant='primary'>
                            Learn More <FiArrowRight />
                        </Button>
                        <Button
                            onClick={() => setShowQuotePopup(true)}
                            className={styles.buttonItem}
                            variant='secondary'
                        >
                            Enquiry Now
                        </Button>
                        <Button
                            href={buildWhatsAppUrl('919285248504', `Hi Ditvi Technologies, I am interested in your service: ${service.title}. Please contact me.`)}
                            className={`${styles.buttonItem} ${styles.whatsappButton}`}
                            variant='secondary'
                            target='_blank'
                            onClick={() => trackWhatsAppClick(`service_card_${service.title}`)}
                        >
                            WhatsApp
                        </Button>
                    </div>
                </div>
            </motion.div>
            <GetQuotePopup
                isOpen={showQuotePopup}
                onClose={() => setShowQuotePopup(false)}
                selectedService={service.title}
            />
        </>
    )
}


const Services: React.FC<ServicesProps> = ({ limit, showViewMore }) => {
    const displayedServices = typeof limit === 'number' ? services.slice(0, limit) : services

    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <Heading
                    subtitle='Our Services'
                    title='Shaping Future with'
                    titleHighlight='Digital Empowerment'
                />

                <div className={styles.servicesGrid}>
                    {displayedServices.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isReversed={index % 2 !== 0}
                            index={index}
                        />
                    ))}
                </div>

                {showViewMore && (
                    <div className={styles.viewMoreWrapper}>
                        <Button href="/services" variant="secondary">
                            View More Services <FiArrowRight />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Services