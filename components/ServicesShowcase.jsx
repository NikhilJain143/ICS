'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesShowcase({ onOpenDemoModal }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
    },
    headerWrapper: {
      maxWidth: '600px',
      margin: '0 auto 56px auto',
      textAlign: 'center',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 20px',
      backgroundColor: '#F0F4FF',
      color: '#0066CC',
      fontSize: '12px',
      fontWeight: '800',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      borderRadius: '999px',
      border: '1px solid #DBEAFE',
      marginBottom: '16px',
    },
    title: {
      fontSize: '36px',
      fontWeight: '800',
      color: '#0F2044',
      letterSpacing: '-0.03em',
      marginBottom: '16px',
      fontFamily: "'Outfit', sans-serif",
    },
    subtitle: {
      fontSize: '15px',
      color: '#475569',
      lineHeight: '1.6',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    },
    card: (isHovered) => ({
      backgroundColor: '#FFFFFF',
      borderRadius: '20px',
      border: `1px solid ${isHovered ? 'rgba(37, 99, 235, 0.3)' : '#E2E8F0'}`,
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      boxShadow: isHovered
        ? '0 20px 40px -10px rgba(15, 32, 68, 0.12)'
        : '0 8px 30px -4px rgba(15, 32, 68, 0.06)',
      display: 'flex',
      flexDirection: 'column',
    }),
    imageContainer: {
      height: '220px',
      backgroundColor: '#0F2044',
      position: 'relative',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '50%',
      background: 'linear-gradient(to top, rgba(15, 32, 68, 0.4) 0%, transparent 100%)',
    },
    content: {
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#0F2044',
      letterSpacing: '-0.02em',
      marginBottom: '12px',
      fontFamily: "'Outfit', sans-serif",
    },
    cardDesc: {
      fontSize: '14px',
      color: '#475569',
      lineHeight: '1.6',
      marginBottom: '24px',
    },
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '32px',
      flex: 1,
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
    },
    featureText: {
      fontSize: '13px',
      fontWeight: '600',
      color: '#0F2044',
      lineHeight: '1.4',
    },
    linkWrapper: {
      marginTop: 'auto',
    },
    link: (isHovered) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      color: '#0066CC',
      fontSize: '13px',
      fontWeight: '600',
      textDecoration: isHovered ? 'underline' : 'none',
      cursor: 'pointer',
    }),
  };

  const services = [
    {
      id: 'automotive',
      title: 'Automotive Cleaning Solutions',
      description: 'Professional dry ice blasting services designed for dealerships, workshops, detailing studios, restoration projects, and luxury automotive brands. Heavy grease, oil residue, carbon deposits, and road grime safely removed using non-abrasive dry ice blasting technology, restoring a cleaner and more professional appearance without water or harsh chemicals alongside improving engine and break pad performance and enhancing the cooling.',
      image: '/images/automotive.webp',
      features: ['Engine Bay Cleaning', 'Alloy Wheel Restoration & Cleaning', 'Hood & Under-Hood Cleaning'],
    },
    {
      id: 'industrial',
      title: 'Industrial Cleaning Solutions',
      description: 'Zero-moisture, non-abrasive dry ice blasting for machinery, printing presses, electrical components, and industrial equipment. Reduces downtime and completely eliminates secondary waste.',
      image: '/images/industrial.webp',
      features: ['Machinery Cleaning', 'Manufacturing Equipment Cleaning', 'Production Line Maintenance', 'Electrical Equipment Cleaning', 'Plant Maintenance Services', 'Surface Preparation & Contaminant Removal'],
    },
    {
      id: 'supply',
      title: 'Dry Ice Manufacturing & Supply',
      description: 'Production and supply of premium-quality dry ice products for industrial, commercial, logistics, healthcare, and cleaning applications.',
      image: '/images/dryice.png',
      features: ['Dry Ice Blocks', '3 mm Dry Ice Pellets', '9 mm Dry Ice Pellets', '16 mm Dry Ice Pellets'],
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <div style={styles.headerWrapper}>
          <span style={styles.badge}>WHAT WE DO</span>
          <h2 style={styles.title}>Integrated Dry Ice Solutions</h2>
          <p style={styles.subtitle}>Premium automotive cleaning and dry ice manufacturing.</p>
        </div>

        <div style={styles.grid}>
          {services.map((service) => {
            const isHovered = hoveredCard === service.id;
            return (
              <div
                key={service.id}
                style={styles.card(isHovered)}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.imageContainer}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      ...styles.image,
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <div style={styles.imageOverlay} />
                </div>
                <div style={styles.content}>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardDesc}>{service.description}</p>
                  
                  <div style={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} style={styles.featureItem}>
                        <CheckCircle2 size={16} color="#0066CC" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
