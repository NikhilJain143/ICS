'use client';

import React from 'react';
import { Snowflake } from 'lucide-react';

export default function TrustHeritage() {
  const whyUsPoints = [
    "15 kg of premium-grade dry ice used per cleaning for optimal performance.",
    "Among the pioneering companies to introduce Dry Ice Blasting Technology in India.",
    "Transparent and standardized pricing across all vehicle brands.",
    "Over 10 years of industry expertise in advanced cleaning solutions.",
    "Successfully serviced 200,000+ vehicles across all major automotive brands.",
    "In-house dry ice production facilities in Delhi and Hyderabad, ensuring consistent quality and availability.",
    "Exceptional quality standards delivered by highly trained and certified technicians."
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
          src="/audi-video.mp4?v=3" 
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
        {/* WHY US */}
        <div style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '48px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 40px -10px rgba(15, 32, 68, 0.08)',
          }}
        >
           <div style={{ marginBottom: '32px' }}>
             <h3 style={{ fontSize: '28px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0, color: '#0F2044' }}>
               Why Us: The Premium Standard
             </h3>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
             {whyUsPoints.map((point, idx) => (
               <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                 <Snowflake size={20} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                 <span style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>{point}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
