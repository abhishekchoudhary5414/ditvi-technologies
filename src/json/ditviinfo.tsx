import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
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
  { icon: <FiFacebook />, href: 'https://www.facebook.com/ditvifoundation' },
  { icon: <FiInstagram />, href: 'https://www.instagram.com/ditvifoundation/' },
  { icon: <FiYoutube />, href: 'https://www.youtube.com/@ditvifoundation' },
];
export const contactDetails: ContactDetails = {
  email: 'care@ditvi.org',
  number: '+91 9285248504',
  whatsappnumber: '919285248504',
  address: 'Ramjaipal Road, Opp. Gola Road, Near Hotel Magadh Palace, Patna-801503'
};
