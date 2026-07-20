'use client';

import React from 'react';
import { Snowflake } from 'lucide-react';

export default function TrustHeritage() {
  const whyUsPoints = [
    "Non-abrasive, water-free and chemical-free cleaning that protects sensitive components while achieving factory-like finishes.",
    "In-house dry ice manufacturing in Delhi NCR and Hyderabad, ensuring consistent quality and uninterrupted supply.",
    "India's pioneers in professional Dry Ice Blasting technology.",
    "15 kg of premium-grade dry ice used per vehicle for superior cleaning performance.",
    "Transparent and standardized pricing across all vehicle brands and segments.",
    "Factory-trained technicians delivering safe, consistent, and exceptional results."
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      {/* About Us Video Block */}
      <div style={{ position: 'relative', width: '100%', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px', overflow: 'hidden' }}>
        <video 
          src="/audi-video.mp4?v=6" 
          poster="/poster.jpg"
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(15, 32, 68, 0.9), rgba(15, 32, 68, 0.7))',
            zIndex: 1
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', maxWidth: '800px' }}>
          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 800,
                color: '#60A5FA',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '4px 12px',
                borderRadius: '999px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              ABOUT ICE CLEANING SOLUTIONS
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '36px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
            }}
          >
            Building on Trusted Relationships
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '16px', color: '#E2E8F0', lineHeight: 1.7, margin: 0 }}>
              Over the years, our leadership team has built strong relationships across India's automotive sector, working alongside some of the country's most respected automotive brands, dealership networks, and industries.
            </p>
            <p style={{ fontSize: '16px', color: '#E2E8F0', lineHeight: 1.7, margin: 0 }}>
              This experience has provided us with a deep understanding of industry standards, customer expectations, and the importance of delivering consistent, high-quality results. As ICE Cleaning Solutions expands across India, we remain committed to bringing the same professionalism, reliability, and service excellence to every customer and every project.
            </p>
          </div>
        </div>
      </div>

      <div id="why-us" className="container" style={{ margin: '0 auto', maxWidth: '1000px', padding: '100px 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
           <span
             style={{
               display: 'inline-flex',
               alignItems: 'center',
               gap: '8px',
               fontSize: '12px',
               fontWeight: 800,
               color: '#0066CC',
               backgroundColor: '#F0F4FF',
               padding: '8px 20px',
               borderRadius: '999px',
               border: '1px solid #DBEAFE',
               letterSpacing: '0.1em',
               textTransform: 'uppercase',
               marginBottom: '16px'
             }}
           >
             Why Choose Us
           </span>
           <h2 style={{ fontSize: '36px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0, color: '#0F2044', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
             Setting the Premium Standard in Dry Ice Blasting
           </h2>
        </div>

        {/* WHY US Grid Card */}
        <div style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '48px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 40px -10px rgba(15, 32, 68, 0.08)',
          }}
        >
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
             {whyUsPoints.map((point, idx) => (
               <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                 <div style={{ padding: '8px', backgroundColor: '#F0F4FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                   <Snowflake size={20} color="#0066CC" />
                 </div>
                 <span style={{ fontSize: '15px', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>{point}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
