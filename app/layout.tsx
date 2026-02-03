import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'H M Vishwanathaiah Software Developer Portfolio',
  description: 'Experienced Software Developer specializing in Full Stack Development, AI Integration, and Custom Chatbot Solutions. Building intelligent applications with React, Next.js, Node.js, and Gemini AI.',
  keywords: ['Software Developer', 'AI Engineer', 'Full Stack Developer', 'React', 'Next.js', 'AI Chatbot', 'Web Development', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'H M Vishwanathaiah' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Software Developer & AI Engineer | Full Stack Portfolio',
    description: 'Experienced Software Developer specializing in Full Stack Development, AI Integration, and Custom Chatbot Solutions.',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https:/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Developer & AI Engineer | Full Stack Portfolio',
    description: 'Experienced Software Developer specializing in Full Stack Development, AI Integration, and Custom Chatbot Solutions.',
    images: [
      {
        url: 'https:/static/og_default.png',
      },
    ],
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
