'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { contactDetails } from '@/json/ditviinfo'
import { services } from '@/json/services'
import { supabase } from '@/lib/supabase'


interface LinkItem {
  name: string;
  path: string;
}

const navItems: LinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Clients', path: '/client' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const whatsappMessage = encodeURIComponent(
    contactDetails.whatsappMessage || "Hi Ditvi Technologies, I'm interested in your services. Can you help me?"
  );

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const parseBrowser = (ua: string) => {
      if (/chrome|chromium|crios/i.test(ua) && !/edg/i.test(ua)) return 'Chrome'
      if (/firefox|fxios/i.test(ua)) return 'Firefox'
      if (/safari/i.test(ua) && !/chrome|chromium|crios/i.test(ua)) return 'Safari'
      if (/edg/i.test(ua)) return 'Edge'
      if (/opera|opr/i.test(ua)) return 'Opera'
      return 'Other'
    }

    const parseDeviceType = (ua: string) => {
      if (/mobile|iphone|ipod|android|blackberry|iemobile|opera mini/i.test(ua)) return 'Mobile'
      if (/ipad|tablet|tab/i.test(ua)) return 'Tablet'
      return 'Desktop'
    }

    const trackWhatsAppClick = async () => {
      try {
        const userAgent = navigator.userAgent || ''
        await supabase.from('whatsapp_clicks').insert([
          {
            page_url: window.location.pathname,
            page_title: document.title || null,
            referrer: document.referrer || null,
            browser: parseBrowser(userAgent),
            device_type: parseDeviceType(userAgent),
            user_agent: userAgent,
            clicked_at: new Date().toISOString(),
          },
        ])
      } catch (error) {
        console.error('WhatsApp click tracking failed:', error)
      }
    }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleNavigate = useCallback(() => {
    setIsOpen(false);
  }, []);

  const renderMenuItems = (isMobile = false) =>
    navItems.map((item) => {
      // Render services as a dropdown / submenu
      if (item.name === 'Services') {
        if (isMobile) {
          return (
            <div key="services-mobile">
              <button
                className={styles.mobileMenuLink}
                onClick={() => setMobileServicesOpen((p) => !p)}
                aria-expanded={mobileServicesOpen}
              >
                <span>{item.name}</span>
                <span className={styles.dropdownIcon} aria-hidden>
                  <AiOutlineDown />
                </span>
              </button>

              {mobileServicesOpen && (
                <div className={styles.mobileSubMenu}>
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={s.path}
                      className={styles.mobileMenuLink}
                      onClick={() => {
                        handleNavigate();
                        setMobileServicesOpen(false);
                      }}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        // Desktop dropdown (hover)
        return (
          <div
            key="services-desktop"
            className={styles.dropdown}
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <Link href={item.path} className={styles.menuLink} onClick={handleNavigate} aria-haspopup="true">
              <span>{item.name}</span>
              <span className={styles.dropdownIcon} aria-hidden>
                <AiOutlineDown />
              </span>
            </Link>

            <div className={clsx(styles.dropdownMenu, { [styles.show]: desktopServicesOpen })}>
              {services.map((s) => (
                <Link key={s.id} href={s.path} className={styles.dropdownItem} onClick={handleNavigate}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        );
      }

      return (
        <Link
          key={item.name}
          href={item.path}
          className={isMobile ? styles.mobileMenuLink : styles.menuLink}
          onClick={handleNavigate}
        >
          {item.name}
        </Link>
      );
    });

  return (
    <>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.left}>
              <Link href="/" className={styles.logo}>
                <Image 
                  src="/logo/logo.svg" 
                  alt="Ditvi Technologies" 
                  width={120} 
                  height={48} 
                  className={styles.logoImage}
                  priority
                  quality={70}
                />
              </Link>
            </div>

            <div className={styles.center}>
              <div className={styles.desktopMenu}>{renderMenuItems(false)}</div>
            </div>

            <div className={styles.right}>
              <a
                href={`https://wa.me/${contactDetails.whatsappnumber}?text=${whatsappMessage}`}
                className={styles.desktopWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                onClick={trackWhatsAppClick}
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp</span>
              </a>

              <button
                className={clsx(styles.mobileMenuToggle, { [styles.active]: isOpen })}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={clsx(styles.mobileMenu, { [styles.show]: isOpen })}>
            <div className={styles.mobileTop}>
              <a
                href={`https://wa.me/${contactDetails.whatsappnumber}?text=${whatsappMessage}`}
                className={styles.mobileWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                onClick={() => { trackWhatsAppClick(); handleNavigate(); }}
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {renderMenuItems(true)}
          </div>
        </div>
      </nav>
      {/* moved WhatsApp button inside nav for right alignment */}
      <a
        href={`https://wa.me/${contactDetails.whatsappnumber}?text=${whatsappMessage}`}
        className={clsx(styles.whatsappButton, styles.whatsappFixed)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        onClick={trackWhatsAppClick}
      >
        <FaWhatsapp size={24} />
        <span className={styles.whatsappTooltip}>
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
};

export default Navbar;
