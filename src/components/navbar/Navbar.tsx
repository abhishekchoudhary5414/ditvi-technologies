'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { contactDetails } from '@/json/ditviinfo'
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
    "Hi Ditvi Technologies, I'm interested in your services. Can you help me?"
  );

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
    navItems.map((item) => (
      <Link
        key={item.name}
        href={item.path}
        className={isMobile ? styles.mobileMenuLink : styles.menuLink}
        onClick={handleNavigate}
      >
        {item.name}
      </Link>
    ));

  return (
    <>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <Link href="/" className={styles.logo}>
              <Image src="/logo.png" alt="Ditvi Technologies" width={120} height={48} className={styles.logoImage} />
            </Link>


            <div className={styles.desktopMenu}>{renderMenuItems(false)}</div>


            <button
              className={clsx(styles.mobileMenuToggle, { [styles.active]: isOpen })}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={clsx(styles.mobileMenu, { [styles.show]: isOpen })}>
            {renderMenuItems(true)}
          </div>
        </div>
      </nav>
      <a
        href={`https://wa.me/${contactDetails.whatsappnumber}?text=${whatsappMessage}`}
        className={styles.whatsappButton}
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
