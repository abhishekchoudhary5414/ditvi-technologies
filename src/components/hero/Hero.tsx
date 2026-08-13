'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import Button from '@/custom/buttons/Button'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import CloudIcon from '@mui/icons-material/Cloud'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import StorageIcon from '@mui/icons-material/Storage'
import SecurityIcon from '@mui/icons-material/Security'
import BuildIcon from '@mui/icons-material/Build'

const Hero = () => {
  // Track if component mounted to enable animations, but render content immediately
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set mounted after first render to enable animations
    setMounted(true)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.bgIcons} aria-hidden="true">
        {[
          { Icon: StorageIcon, pos: { top: '8%', left: '6%', transform: 'scale(2.6)' }, key: 'bg-storage' },
          { Icon: SecurityIcon, pos: { top: '22%', right: '6%', transform: 'scale(2.2)' }, key: 'bg-security' },
          { Icon: BuildIcon, pos: { bottom: '6%', left: '10%', transform: 'scale(2.4)' }, key: 'bg-build' },
          { Icon: CloudIcon, pos: { bottom: '12%', right: '12%', transform: 'scale(2.0)' }, key: 'bg-cloud' }
        ].map(it => (
          <div key={it.key} className={styles.bgIcon} style={it.pos}>
            <it.Icon />
          </div>
        ))}
      </div>
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
                {[
                  { Icon: CodeIcon, pos: { top: '-40px', right: '-40px' }, key: 'code' },
                  { Icon: DesignServicesIcon, pos: { top: '20%', left: '-30px' }, key: 'design' },
                  { Icon: CloudIcon, pos: { bottom: '-30px', left: '10%' }, key: 'cloud' },
                  { Icon: PhoneIphoneIcon, pos: { bottom: '10%', right: '8%' }, key: 'phone' },
                  { Icon: AnalyticsIcon, pos: { top: '45%', right: '30%' }, key: 'analytics' }
                ].map((it, idx) => (
                  <motion.div
                    key={it.key}
                    className={styles.iconShape}
                    style={it.pos}
                    initial={{ opacity: 0, y: 20, scale: 0.85 }}
                    animate={mounted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1 }}
                    transition={{ delay: 0.12 * idx, type: 'spring', stiffness: 120 }}
                  >
                    <div className={styles.iconInner}>
                      <it.Icon fontSize="large" />
                    </div>
                  </motion.div>
                ))}
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