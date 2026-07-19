'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye } from 'lucide-react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);

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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Background Video */}
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
        <div style={{ maxWidth: '700px' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '9999px',
            padding: '6px 16px',
            marginBottom: '24px',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#60A5FA',
              borderRadius: '50%',
              marginRight: '8px',
              boxShadow: '0 0 10px rgba(96, 165, 250, 0.8)',
            }}></span>
            <span style={{
              color: '#E0E7FF',
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>Precision Dry Ice Technology</span>
          </div>

          <h1 style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: isMobile ? '40px' : '64px',
            lineHeight: 1.1,
            fontWeight: 800,
            color: '#FFFFFF',
            margin: '0 0 24px 0',
            letterSpacing: '-0.03em',
          }}>
            The Future of Luxury<br />
            <span style={{ color: '#60A5FA' }}>Vehicle Detailing</span>
          </h1>

          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: '#94A3B8',
            lineHeight: 1.7,
            maxWidth: '580px',
            margin: '0 0 48px 0',
          }}>
            India's premier waterless dry ice blasting service. Trusted by Porsche, Audi, Mercedes-Benz, BMW & Rolls Royce dealerships for non-abrasive, zero-moisture engine bay and undercarriage restoration.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '16px',
          }}>
            <button 
              onClick={() => window.open('https://wa.me/918349173098?text=Hi%20Ice%20Cleaning%20Solutions,%20I%20am%20interested%20in%20a%20demo.', '_blank')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0066CC',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: hoverPrimary ? '0 12px 40px -4px rgba(0, 102, 204, 0.4)' : '0 8px 30px -4px rgba(0, 102, 204, 0.2)',
                transform: hoverPrimary ? 'translateY(-2px)' : 'none',
                transition: 'all 0.2s ease',
                width: isMobile ? '100%' : 'auto',
              }}
              onMouseEnter={() => setHoverPrimary(true)}
              onMouseLeave={() => setHoverPrimary(false)}
            >
              WhatsApp Us
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            
            <a 
              href="#results"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: hoverSecondary ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                width: isMobile ? '100%' : 'auto',
              }}
              onMouseEnter={() => setHoverSecondary(true)}
              onMouseLeave={() => setHoverSecondary(false)}
            >
              See Results
              <Eye size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '60px',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>100% Waterless</span>
              <span style={{ fontSize: '12px', color: '#60A5FA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Zero Moisture</span>
            </div>
            
            <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>0% Abrasive</span>
              <span style={{ fontSize: '12px', color: '#60A5FA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Non-Scratch</span>
            </div>
            
            <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>70% Faster</span>
              <span style={{ fontSize: '12px', color: '#60A5FA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bay Turnaround</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
