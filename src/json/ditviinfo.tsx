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
  whatsappMessage?: string;
}

export const socialLinks: SocialLink[] = [
  // { icon: <FiFacebook />, href: 'https://www.facebook.com/ditvitechnologies' },
  { icon: <FiInstagram />, href: 'https://www.instagram.com/ditvitechnologies/' },
];
export const contactDetails: ContactDetails = {
  email: 'care@ditvi.org',
  number: '+91 9285248504',
  whatsappnumber: '919285248504',
  whatsappMessage: "Hi Ditvi Technologies, I'm interested in your services. Can you help me?",
  address: 'Ramjaipal Road, Opp. Gola Road, Near Hotel Magadh Palace, Patna-801503'
};
