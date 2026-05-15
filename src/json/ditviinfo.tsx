import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import type { ReactNode } from 'react';

interface SocialLink {
  icon: ReactNode;
  href: string;
}

interface ContactDetails {
  email: string;
  number: string;
  address: string;
  whatsappnumber: string;
}

export const socialLinks: SocialLink[] = [
  { icon: <FiFacebook />, href: 'https://facebook.com' },
  { icon: <FiTwitter />, href: 'https://twitter.com' },
  { icon: <FiInstagram />, href: 'https://instagram.com' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com' },
];

export const contactDetails: ContactDetails = {
  email: 'care@ditvi.org',
  number: '+91 9285248504',
  whatsappnumber: '919285248504',
  address: 'Ramjaipal Road, Opp. Gola Road, Near Hotel Magadh Palace, Patna-801503'
};
