'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiStar } from 'react-icons/fi'
import type { PricingPackage } from '@/json/services'
import Button from '@/custom/buttons/Button'
import styles from './Pricing.module.css'

interface PricingProps {
    packages: PricingPackage[]
    serviceTitle: string
    onGetQuote: (packageName: string) => void
}

export const Pricing = ({ packages, serviceTitle, onGetQuote }: PricingProps) => {
    const [isOneTime, setIsOneTime] = useState(true)

    return (
        <motion.section
            className={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2>Choose Your Package</h2>

            <div className={styles.paymentToggle}>
                <div className={styles.toggleSwitch}>
                    <div className={styles.toggleLabels}>
                        <span className={isOneTime ? styles.active : ''}>One Time Payment</span>
                        <div className={styles.switchTrack} onClick={() => setIsOneTime(!isOneTime)}>
                            <motion.div
                                className={styles.switchThumb}
                                animate={{
                                    x: isOneTime ? 2 : 26
                                }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <span className={!isOneTime ? styles.active : ''}>Part Payment</span>
                    </div>
                </div>
            </div>

            <div className={styles.packagesGrid}>
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2 + index * 0.2,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}
                    >
                        {pkg.popular && (
                            <motion.div
                                className={styles.popularTag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.2 }}
                            >
                                <motion.span
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <FiStar />
                                </motion.span>
                                Most Popular
                            </motion.div>
                        )}

                        <div className={styles.packageHeader}>
                            <motion.span
                                className={styles.packageIcon}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {pkg.icon}
                            </motion.span>
                            <h3>{pkg.name}</h3>

                            <motion.div
                                className={styles.pricing}
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.2 }}
                            >
                                <p className={styles.price}>
                                    ₹{isOneTime ? pkg.oneTimePrice : pkg.partPaymentPrice}
                                </p>
                                <span className={styles.paymentType}>
                                    {isOneTime ? 'One Time Payment' : 'Part Payment'}
                                </span>
                            </motion.div>
                        </div>

                        <div className={styles.packageContent}>
                            {!isOneTime && (
                                <div className={styles.installments}>
                                    <h4>Payment Schedule</h4>
                                    <div className={styles.installmentsList}>
                                        {Object.entries(pkg.installments).map(([key, { percentage, description }]) => (
                                            <motion.div
                                                key={key}
                                                className={styles.installmentItem}
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className={styles.installmentHeader}>
                                                    <span className={styles.badge}>{percentage}%</span>
                                                    <span className={styles.milestone}>
                                                        {key === 'first' ? '1st' : key === 'second' ? '2nd' : '3rd'} Milestone
                                                    </span>
                                                </div>
                                                <p className={styles.installmentDesc}>{description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}


                            <div className={styles.features}>
                                <h4>What&apos;s Included</h4>
                                <ul className={styles.featuresList}>
                                    {pkg.features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            className={styles.featureItem}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                        >
                                            <div className={styles.featureHeader}>
                                                <span className={styles.featureIcon}>{feature.icon}</span>
                                                <h5 className={styles.featureTitle}>{feature.title}</h5>
                                            </div>

                                            <motion.ul
                                                className={styles.subFeatures}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 + idx * 0.1 }}
                                            >
                                                {feature.items.map((item, subIdx) => (
                                                    <motion.li
                                                        key={subIdx}
                                                        className={styles.subFeatureItem}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.5 + idx * 0.1 + subIdx * 0.05 }}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <FiCheck className={styles.checkIcon} />
                                                        <span>{item}</span>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.packageFooter}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="primary"
                                    onClick={() => onGetQuote(serviceTitle)}
                                    className={styles.packageButton}
                                >
                                    Enquiry Now
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}