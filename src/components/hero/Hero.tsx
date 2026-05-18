'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import Button from '@/custom/buttons/Button'

const Hero = () => {
  // Track if component mounted to enable animations, but render content immediately
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set mounted after first render to enable animations
    setMounted(true)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Render text content immediately (visible on initial render) */}
          <motion.div
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={mounted ? { duration: 0.6 } : undefined}
            className={styles.textContent}
          >
            <h1 className={styles.title}>
              Simplify Your Digital Journey. Amplify{' '}
              <span className={styles.highlight}>
                Your Business
              </span>
            </h1>
            <p className={styles.description}>
              We craft intuitive online presences, streamline operations, and connect you with customers effortlessly.
            </p>
            <div className={styles.cta}>
              <Button href="/services" variant="primary">
                Explore Our Work
              </Button>
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </motion.div>

          {/* Animate image container with reduced delay */}
          <motion.div
            initial={false}
            animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={mounted ? { duration: 0.8, delay: 0.1 } : undefined}
            className={styles.imageContainer}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.shapes}>
                <div className={`${styles.shape} ${styles.shape1}`}></div>
                <div className={`${styles.shape} ${styles.shape2}`}></div>
                <div className={`${styles.shape} ${styles.shape3}`}></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animate stats with reduced delay */}
        <div className={styles.stats}>
          {[
            { number: '500+', text: 'Projects Completed' },
            { number: '100+', text: 'Happy Clients' },
            { number: '5+', text: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={mounted ? { duration: 0.6, delay: 0.2 + index * 0.05 } : undefined}
              className={styles.statItem}
            >
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statText}>{stat.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero