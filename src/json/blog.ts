
import { StaticImageData } from "next/image"
import BlogImage1 from "../../public/assets/blog/blog1.jpg"
import BlogImage2 from "../../public/assets/blog/blog2.jpg"
import BlogImage3 from "../../public/assets/blog/blog3.jpg"
import BlogImage4 from "../../public/assets/blog/blog4.jpg"
import BlogImage5 from "../../public/assets/blog/blog5.jpg"
import BlogImage6 from "../../public/assets/blog/blog6.jpg"
import BlogImage7 from "../../public/assets/blog/blog7.jpg" 
import BlogImage8 from "../../public/assets/blog/blog8.jpg"
import BlogImage9 from "../../public/assets/blog/blog9.jpg"
import BlogImage10 from "../../public/assets/blog/blog10.jpg"


export interface BlogPost {
    id: number
    title: string
    excerpt: string
    content: string
    image: string | StaticImageData
    author: string
    date: string
    readTime: string
    category: string
    slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Digital Marketing in 2025',
    excerpt: 'Explore the emerging trends and technologies shaping digital marketing.',
    content: 'Full blog content here...',
    image: BlogImage1.src,
    author: 'John Doe',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    category: 'Digital Marketing',
    slug: 'future-of-digital-marketing-2025'
  },
  {
    id: 2,
    title: 'AI-Powered Personalization: Next-Level Customer Experiences',
    excerpt: 'How machine learning is transforming one-to-one marketing at scale.',
    content: 'Full blog content here...',
    image: BlogImage2.src,
    author: 'Jane Smith',
    date: 'Feb 02, 2025',
    readTime: '6 min read',
    category: 'AI & Automation',
    slug: 'ai-powered-personalization'
  },
  {
    id: 3,
    title: 'Video Marketing Strategies That Convert in 2025',
    excerpt: 'Best practices for using short- and long-form video to drive engagement.',
    content: 'Full blog content here...',
    image: BlogImage3.src,
    author: 'Michael Lee',
    date: 'Mar 10, 2025',
    readTime: '7 min read',
    category: 'Content Marketing',
    slug: 'video-marketing-strategies-2025'
  },
  {
    id: 4,
    title: 'Voice Search Optimization: How to Get Found',
    excerpt: 'Tips for structuring your content to win voice-search queries.',
    content: 'Full blog content here...',
    image: BlogImage4.src,
    author: 'Emily Johnson',
    date: 'Apr 05, 2025',
    readTime: '4 min read',
    category: 'SEO',
    slug: 'voice-search-optimization'
  },
  {
    id: 5,
    title: 'Influencer Marketing: Beyond the Basics',
    excerpt: 'Leveraging micro- and nano-influencers to boost niche campaigns.',
    content: 'Full blog content here...',
    image: BlogImage5.src,
    author: 'David Patel',
    date: 'May 12, 2025',
    readTime: '6 min read',
    category: 'Social Media',
    slug: 'influencer-marketing-beyond-basics'
  },
  {
    id: 6,
    title: 'SEO in 2024: E-A-T, Core Web Vitals & Beyond',
    excerpt: 'Mastering Google’s latest algorithm updates for higher rankings.',
    content: 'Full blog content here...',
    image: BlogImage6.src,
    author: 'Sara Khan',
    date: 'Jun 20, 2025',
    readTime: '8 min read',
    category: 'SEO',
    slug: 'seo-2024-eat-core-web-vitals'
  },
  {
    id: 7,
    title: 'Augmented Reality in Retail: Bridging Physical & Digital',
    excerpt: 'Practical AR scenarios that delight shoppers and boost sales.',
    content: 'Full blog content here...',
    image: BlogImage7.src,
    author: 'Li Wei',
    date: 'Jul 08, 2025',
    readTime: '7 min read',
    category: 'Emerging Tech',
    slug: 'ar-in-retail-bridging-physical-digital'
  },
  {
    id: 8,
    title: 'Data Privacy & Marketing: Navigating GDPR & CCPA',
    excerpt: 'Building trust and compliance into your data-driven strategies.',
    content: 'Full blog content here...',
    image: BlogImage8.src,
    author: 'Carlos Rodriguez',
    date: 'Aug 14, 2025',
    readTime: '5 min read',
    category: 'Compliance',
    slug: 'data-privacy-marketing-gdpr-ccpa'
  },
  {
    id: 9,
    title: 'Blockchain for Brand Loyalty Programs',
    excerpt: 'Using decentralized ledgers to create transparent, rewardable ecosystems.',
    content: 'Full blog content here...',
    image: BlogImage9.src,
    author: 'Fatima Ali',
    date: 'Sep 03, 2025',
    readTime: '6 min read',
    category: 'Innovation',
    slug: 'blockchain-brand-loyalty-programs'
  },
  {
    id: 10,
    title: 'Omnichannel Campaigns: Unifying Customer Touchpoints',
    excerpt: 'Strategies for consistent messaging across web, mobile, email, and in-store.',
    content: 'Full blog content here...',
    image: BlogImage10.src,
    author: 'Hiro Tanaka',
    date: 'Oct 22, 2025',
    readTime: '7 min read',
    category: 'Digital Strategy',
    slug: 'omnichannel-campaigns-unifying-touchpoints'
  }
]