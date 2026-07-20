'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye } from 'lucide-react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        minHeight: isMobile ? '115vh' : '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Background Video */}
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
      
      {/* Translucent Blue Accent Shade */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(15, 32, 68, 0.75)',
          zIndex: 1
        }}
      />

      {/* Content Container */}
      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          margin: '0 auto', 
          padding: isMobile ? '120px 24px 60px 24px' : '0 64px', 
          width: '100%',
          maxWidth: '1440px' 
        }}
      >
        <div style={{ maxWidth: '1000px' }}>
          
          <h1 style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: isMobile ? '40px' : '56px',
            lineHeight: 1.1,
            fontWeight: 800,
            color: '#FFFFFF',
            margin: '60px 0 16px 0',
            letterSpacing: '-0.02em',
          }}>
            Experience the Future of<br />
            <span style={{ color: '#60A5FA' }}>Automotive Cleaning</span>
          </h1>

          <h2 style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: isMobile ? '20px' : '26px',
            lineHeight: 1.3,
            fontWeight: 600,
            color: '#E2E8F0',
            margin: '0 0 24px 0',
          }}>
            <span style={{ color: '#FFFFFF', fontWeight: 800 }}>Powerful. Precise. Waterless.</span><br />
            <span style={{ fontSize: isMobile ? '16px' : '20px', color: '#CBD5E1', fontWeight: 400 }}>Advanced Dry Ice Blasting Technology for Luxury Vehicles & Premium Dealerships.</span>
          </h2>

          <p style={{
            fontSize: isMobile ? '15px' : '16px',
            color: '#94A3B8',
            lineHeight: 1.7,
            maxWidth: '660px',
            margin: '0 0 48px 0',
          }}>
            Trusted by leading luxury automotive dealerships across India, representing brands such as BMW, Mercedes-Benz, Audi, Porsche, Toyota, MG Motor, and other premium marques. Delivering exceptional results through advanced Dry Ice Blasting technology.
          </p>



          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '60px',
            gap: isMobile ? '20px 32px' : '32px',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>10+ Years</span>
              <span style={{ fontSize: '12px', color: '#60A5FA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Of Excellence</span>
            </div>
            
            {!isMobile && <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>200,000+</span>
              <span style={{ fontSize: '12px', color: '#60A5FA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vehicles Restored</span>
            </div>
            
            {!isMobile && <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>Trusted By</span>
              <span style={{ fontSize: '12px', color: '#60A5FA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Premium Dealerships</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
