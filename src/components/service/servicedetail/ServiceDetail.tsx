'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiUsers, FiBox, FiSmile } from 'react-icons/fi'
import Button from '@/custom/buttons/Button'
import styles from './ServiceDetail.module.css'
import GetQuotePopup from '@/custom/getquotepopup/GetQuotePopup'

import type { CityRoute } from '@/data/cities'
import type { ServiceItem } from '@/json/services'

interface ServiceDetailProps {
  service: ServiceItem;
  cityData?: CityRoute;
}

const ServiceDetail = ({ service, cityData }: ServiceDetailProps) => {
  const [showQuotePopup, setShowQuotePopup] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')




  if (!service) {
    return (
      <section className={styles.notFound}>
        <div className={styles.container}>
          <p className={styles.errorMsg}>
            Sorry, we couldn&apos;t find that service.
          </p>
          <Link href="/services" className={styles.backButton}>
            <FiArrowLeft /> Back to Services
          </Link>
        </div>
      </section>
    )
  }

  const pageTitle = cityData
    ? `${service.title} in ${cityData.name}, ${cityData.state}, ${cityData.country}`
    : service.title;

  const pageDescription = cityData
    ? `${service.description} in ${cityData.name}, ${cityData.state}, ${cityData.country}. Contact us for expert ${service.title.toLowerCase()} services in your area.`
    : service.description;


  const statsItems = [
    {
      icon: <FiUsers />,
      value: service.stats.clients,
      label: cityData ? `Happy Clients in ${cityData.name}` : 'Happy Clients'
    },
    {
      icon: <FiBox />,
      value: service.stats.projects,
      label: cityData ? `Projects Delivered in ${cityData.name}` : 'Projects Delivered'
    },
    {
      icon: <FiSmile />,
      value: service.stats.satisfaction,
      label: cityData ? `100% Client Satisfaction in ${cityData.name}` : '100% Client Satisfaction'
    }
  ]

  return (
    <>
      <section className={styles.serviceDetail}>
        <div className={styles.container}>
          {/* Enhanced Header */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className={styles.navigation}>
              <Button href='/services' variant='primary' className={styles.backButton}>
                <FiArrowLeft /> Back to Services
              </Button>
            </nav>

            <br />

            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className={styles.title}>{pageTitle}</h1>
              <h2 className={styles.subtitle}>{service.subtitle}</h2>
              <p className={styles.description}>{pageDescription}</p>
              {service.svgComponent && <service.svgComponent />}
              <div className={styles.enquiryAction}>
                <Button
                  variant='primary'
                  onClick={() => {
                    setSelectedPackage(service.title)
                    setShowQuotePopup(true)
                  }}
                >
                  Enquiry Now
                </Button>
              </div>
            </motion.div>

            {/* Stats Section with Hero Image */}
            <motion.div className={styles.statsHeroSection}>
              <div className={styles.statsHeroContainer}>
                {/* Left - Hero Image */}
                <motion.div
                  className={styles.heroImageContainer}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageOverlay} />
                  </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  className={styles.heroContent}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className={styles.heroDescription}>{service.descriptionContent}</p>
                  <div className={styles.statsContainer}>
                    {statsItems.map((stat, index) => (
                      <motion.div
                        key={index}
                        className={styles.statItem}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.2 }}
                      >
                        <motion.span
                          className={styles.statValue}
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.6 + index * 0.2,
                            type: "spring",
                            stiffness: 100
                          }}
                        >
                          {stat.value}+
                        </motion.span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Comparison Section */}
            <motion.section className={styles.comparisonSection}>
              <div className={styles.comparisonContainer}>
                {/* Challenges Side */}
                <motion.div
                  className={styles.comparisonColumn}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.columnHeader}>
                    <h2>Challenges We Solve</h2>
                    <p>Common problems faced by businesses</p>
                  </div>

                  <div className={styles.cardsList}>
                    {service.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className={styles.comparisonCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                      >
                        <div className={styles.cardIcon}>{challenge.icon}</div>
                        <div className={styles.cardContent}>
                          <h3>{challenge.title}</h3>
                          <p>{challenge.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <div className={styles.comparisonDivider}>
                  <div className={styles.dividerLine} />
                  <div className={styles.dividerIcon}>
                    <FiArrowLeft className={styles.leftArrow} />
                    <FiArrowLeft className={styles.rightArrow} />
                  </div>
                  <div className={styles.dividerLine} />
                </div>

                {/* Solutions/Offerings Side */}
                <motion.div
                  className={styles.comparisonColumn}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.columnHeader}>
                    <h2>Our Solutions</h2>
                    <p>How we address these challenges</p>
                  </div>

                  <div className={styles.cardsList}>
                    {service.offerings.map((offering, index) => (
                      <motion.div
                        key={index}
                        className={styles.comparisonCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                      >
                        <div className={styles.cardIcon}>{offering.icon}</div>
                        <div className={styles.cardContent}>
                          <h3>{offering.title}</h3>
                          <p>{offering.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>

          {/* Detailed Description Section */}
          <motion.section className={styles.detailedSection}>
            <div className={styles.sectionContent}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className={styles.sectionTitle}>Why Choose Our {service.title}?</h2>
                <div className={styles.detailsList}>
                  {service.detailedDescription.map((detail, index) => (
                    <motion.div
                      key={index}
                      className={styles.detailItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className={styles.detailNumber}>{index + 1}</span>
                      <p className={styles.detailText}>{detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Call to Action Section */}
              <motion.div
                className={styles.ctaSection}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
                <p className={styles.ctaDescription}>
                  Let our experts help you implement {service.title.toLowerCase()} solutions tailored to your needs.
                  {cityData && ` In ${cityData.name}, ${cityData.state}.`}
                </p>
                <motion.div
                  className={styles.ctaButtons}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant='primary'
                    onClick={() => {
                      setSelectedPackage(service.title)
                      setShowQuotePopup(true)
                    }}
                    className={styles.enquiryButton}
                  >
                    Enquiry Now
                  </Button>
                  <Button
                    variant='secondary'
                    href='/contact'
                    className={styles.contactButton}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>

              {/* Key Metrics */}
              <motion.div
                className={styles.metricsSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className={styles.metricsTitle}>Our Track Record</h3>
                <div className={styles.metricsGrid}>
                  <motion.div
                    className={styles.metricCard}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.metricNumber}>{service.stats.clients}+</div>
                    <div className={styles.metricLabel}>Happy Clients</div>
                  </motion.div>
                  <motion.div
                    className={styles.metricCard}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.metricNumber}>{service.stats.projects}+</div>
                    <div className={styles.metricLabel}>Projects Delivered</div>
                  </motion.div>
                  <motion.div
                    className={styles.metricCard}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.metricNumber}>{service.stats.satisfaction}%</div>
                    <div className={styles.metricLabel}>Client Satisfaction</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>

      <GetQuotePopup
        isOpen={showQuotePopup}
        onClose={() => setShowQuotePopup(false)}
        selectedService={selectedPackage}
      />
    </>
  )
}

export default ServiceDetail