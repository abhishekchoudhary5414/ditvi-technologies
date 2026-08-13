 'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FiX, FiCheck, FiUser, FiPhone } from 'react-icons/fi'
import { FiBriefcase } from 'react-icons/fi'
import { services } from '@/json/services'
import styles from './GetQuotePopup.module.css'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

interface GetQuotePopupProps {
  isOpen: boolean
  onClose: () => void
  selectedService?: string
}

interface FormData {
  name: string
  phone: string
  service: string
}

interface FormErrors {
  name: string;
  phone: string;
}

const GetQuotePopup: React.FC<GetQuotePopupProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: selectedService || '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const [phoneCount, setPhoneCount] = useState(0)

  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Auto-focus name field when popup opens and handle Escape
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => nameRef.current?.focus(), 150)
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  // Update service if selectedService changes
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }))
    }
  }, [selectedService])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nameValid = /^[A-Za-z\s]+$/.test(formData.name.trim())

    if (!nameValid) {
      setErrors({
        name: nameValid ? '' : 'Please enter a valid name',
        phone: ''
      })
      return
    }
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('quotes')
        .insert([
          {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            service: formData.service,
            status: 'pending'
          }
        ])

      if (error) throw error

      setSubmitted(true)

      // Auto-close after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          service: selectedService || '',
        })
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    phone: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    // Name validation - only alphabets and spaces
    if (name === 'name') {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        setErrors(prev => ({
          ...prev,
          name: 'Please enter alphabets only'
        }))
        return
      } else {
        setErrors(prev => ({
          ...prev,
          name: ''
        }))
      }
    }

    if (name === 'phone') {
      let sanitized = value.replace(/[^0-9+]/g, '')
      sanitized = sanitized.startsWith('+')
        ? '+' + sanitized.slice(1).replace(/\+/g, '')
        : sanitized.replace(/\+/g, '')

      setErrors(prev => ({
        ...prev,
        phone: ''
      }))
      setFormData(prev => ({ ...prev, phone: sanitized }))
      setPhoneCount(sanitized.replace(/[^0-9]/g, '').length)
      return
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.popup} role="dialog" aria-modal="true" aria-label="Get Quote">
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <div className={styles.popupContent}>
          <div className={styles.popupBrand}>
            <div className={styles.brandInner}>
              <div className={styles.logoWrap}>
                <Image
                  src="/logo/circlelogo.png"
                  alt="Ditvi Technologies"
                  width={96}
                  height={96}
                  className={styles.brandLogo}
                />
              </div>
              <h3 className={styles.brandTitle}>Get a Free Quote</h3>
              <p className={styles.brandSubtitle}>Fast response · Competitive pricing · 24/7 support</p>
            </div>
          </div>

          <div className={styles.popupBody}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <FiCheck />
                </div>
                <h3>Thank You!</h3>
                <p>We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <>
           

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.row}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <div className={styles.inputWithIcon}>
                        <span className={styles.inputIcon}><FiUser /></span>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameRef}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className={errors.name ? styles.errorInput : ''}
                      />
                      </div>
                      {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <div className={styles.inputWithIcon}>
                        <span className={styles.inputIcon}><FiPhone /></span>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={15}
                        placeholder="Enter your phone number"
                        className={errors.phone ? styles.errorInput : ''}
                      />
                      </div>
                      <div className={styles.phoneMeta}>
                        <small className={styles.phoneCount}>{phoneCount} digits</small>
                        <small className={styles.phoneHint}>Include country code for faster contact</small>
                      </div>
                      {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.actionsRow}>
                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Quote'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default GetQuotePopup
