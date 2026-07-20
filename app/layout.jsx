import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Ice Cleaning Solutions | Luxury Automotive & Industrial Dry Ice Blasting India',
  description: "India's premier 100% waterless dry ice blasting services & dry ice manufacturing for luxury automotive dealerships (Porsche, Audi, Mercedes, BMW) and industrial plant maintenance. Zero moisture, zero abrasive risk, 70% faster turnaround.",
  keywords: [
    'Dry Ice Blasting Hyderabad',
    'Dry Ice Cleaning Telangana',
    'Automotive Dry Ice Detailing India',
    'Luxury Car Waterless Cleaning Porsche Audi Mercedes',
    'Industrial Equipment Dry Ice Maintenance',
    'Dry Ice Pellets Manufacturer India',
    'Atul Group of Companies'
  ],
  authors: [{ name: 'Ice Cleaning Solutions', url: 'https://icecleaningsolutions.com' }],
  creator: 'Ice Cleaning Solutions',
  publisher: 'Ice Cleaning Solutions',
  metadataBase: new URL('https://icecleaningsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ice Cleaning Solutions | Precision Dry Ice Blasting for Luxury Dealerships',
    description: '100% Waterless, non-abrasive dry ice detailing for luxury car dealerships (Porsche, Mercedes, BMW, Audi) and industrial equipment.',
    url: 'https://icecleaningsolutions.com',
    siteName: 'Ice Cleaning Solutions',
    images: [
      {
        url: '/images/automotive.png',
        width: 1200,
        height: 630,
        alt: 'Ice Cleaning Solutions - Luxury Automotive Dry Ice Detailing',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ice Cleaning Solutions | Luxury Automotive Dry Ice Blasting',
    description: 'Zero moisture, non-abrasive dry ice cleaning for luxury dealerships & industrial plants in India.',
    images: ['/images/automotive.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutomotiveBusiness',
      '@id': 'https://icecleaningsolutions.com/#organization',
      'name': 'Ice Cleaning Solutions',
      'url': 'https://icecleaningsolutions.com',
      'logo': 'https://icecleaningsolutions.com/images/automotive.png',
      'image': 'https://icecleaningsolutions.com/images/automotive.png',
      'description': 'Enterprise waterless dry ice blasting services & dry ice manufacturing for luxury automotive dealerships and industrial facilities in India.',
      'telephone': '+91-8349173098',
      'email': 'sales@icecleaningsolutions.org',
      'founder': {
        '@type': 'Person',
        'name': 'Anushka Agarwal'
      },
      'parentOrganization': {
        '@type': 'Organization',
        'name': 'Atul Group of Companies',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Bhilai',
          'addressRegion': 'Chhattisgarh',
          'addressCountry': 'IN'
        }
      },
      'address': [
        {
          '@type': 'PostalAddress',
          'streetAddress': 'SY.130P & 115/1P, Manikonda Jagir, Nanakramguda Road',
          'addressLocality': 'Hyderabad',
          'addressRegion': 'Telangana',
          'postalCode': '500032',
          'addressCountry': 'IN'
        }
      ],
      'areaServed': ['Hyderabad', 'Telangana', 'India'],
      'priceRange': '₹₹₹',
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '19:00'
      }
    },
    {
      '@type': 'Service',
      'name': 'Luxury Automotive Dry Ice Detailing',
      'provider': { '@id': 'https://icecleaningsolutions.com/#organization' },
      'serviceType': 'Automotive Cleaning',
      'description': 'Non-abrasive, 100% moisture-free dry ice blasting for engine bays, undercarriages, delicate electronics, and wheel wells of Porsche, Audi, Mercedes, BMW, and Rolls-Royce vehicles.'
    },
    {
      '@type': 'Service',
      'name': 'Industrial Equipment Dry Ice Cleaning',
      'provider': { '@id': 'https://icecleaningsolutions.com/#organization' },
      'serviceType': 'Industrial Cleaning',
      'description': 'Zero secondary waste dry ice cleaning for manufacturing equipment, electrical cabinets, and production lines to reduce operational downtime.'
    },
    {
      '@type': 'Service',
      'name': 'Dry Ice Manufacturing & Bulk Supply',
      'provider': { '@id': 'https://icecleaningsolutions.com/#organization' },
      'serviceType': 'Manufacturing',
      'description': 'Production and distribution of 3mm pellets, 9mm pellets, 16mm pellets, and dry ice blocks for commercial, medical, and cleaning applications.'
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-46LZRVLP21" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46LZRVLP21');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
