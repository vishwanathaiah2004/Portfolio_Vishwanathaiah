import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-vishwanathaiah.vercel.app/'), // 🔥 IMPORTANT

  title: 'H M Vishwanathaiah | Software Developer Portfolio',
  description:
    'AI Engineer & Full Stack Developer building voice agents, chatbots, and intelligent systems using React, Next.js, Node.js, and AI.',

  keywords: [
    'Software Developer',
    'AI Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'AI Chatbot',
    'Voice AI',
    'Web Development',
  ],

  authors: [{ name: 'H M Vishwanathaiah' }],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Portfolio',
    title: 'H M Vishwanathaiah | AI Engineer',
    description:
      'Building AI Chatbots, Voice Agents, and Full Stack Applications',

    images: [
      {
        url: '/og-image.png', // ✅ from /public
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'H M Vishwanathaiah | AI Engineer',
    description:
      'AI Developer building voice agents and intelligent systems',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}