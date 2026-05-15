'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './About.module.css'
import Image from 'next/image'
import Heading from '@/custom/heading/Heading'
import Button from '@/custom/buttons/Button'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className={styles.about} ref={ref}>
      <div className={styles.container}>

        <Heading
          subtitle="About Us"
          title="Crafting Digital Excellence with"
          titleHighlight="Innovation"
        />

        <div className={styles.content}>
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imageBorder}>
              <Image
                src="/assets/about/about.jpg"
                alt="Our Work Culture"
                width={500}
                height={600}
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.experience}>
              <span className={styles.number}>5+</span>
              <span className={styles.text}>Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.textSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className={styles.description}>
              At Ditvi Technologies, we are more than just a service provider; we are your strategic partner in navigating and mastering the complex world of technology. Our journey began with a clear purpose: to simplify and transform the entire digital and IT journey for businesses and individuals, crafting intuitive, powerful, and comprehensive solutions that make advanced technological capabilities accessible to all. This ambitious vision fuels every project we undertake, driving us to innovate and excel across diverse technological landscapes.
            </p>

            <p className={styles.description}>
              Our mission is to empower businesses and individuals by delivering tailored, user-friendly IT and digital solutions. This commitment translates into a comprehensive suite of services designed to meet every facet of your technological needs. For businesses, we provide end-to-end IT infrastructure and digital transformation services, ensuring operational efficiency, robust security, and scalable growth. We specialize in building powerful online presences, including cutting-edge websites, strategic SEO, and engaging social media management, all designed to enhance discoverability and foster dynamic customer relationships.
            </p>

            <div className={styles.cta}>
              <Button href="/contact" variant="primary">
                Let&apos;s Work Together
              </Button>
              <Button href="/services" variant="secondary">
                View Our Portfolio
              </Button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About