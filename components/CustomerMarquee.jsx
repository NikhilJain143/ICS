'use client';

import React from 'react';

const brands = [
  { name: 'Porsche', src: '/images/porsche.png' },
  { name: 'Audi', src: '/images/audi.png' },
  { name: 'Mercedes-Benz', src: '/images/mercedes.png' },
  { name: 'BMW', src: '/images/bmw.png' },
  { name: 'Rolls Royce', src: '/images/rollsroyce.png' },
  { name: 'Lamborghini', src: '/images/lamborghini.png' },
  { name: 'Volvo', src: '/images/volvo.png' },
  { name: 'Toyota', src: '/images/toyota.png' },
  { name: 'BYD', src: '/images/byd.png' },
  { name: 'SAIL', src: '/images/sail.svg' },
  { name: 'Samsung', src: '/images/samsung.svg' },
  { name: 'Skoda', src: '/images/skoda.png' },
  { name: 'MG', src: '/images/mg.png' },
  { name: 'Jeep', src: '/images/jeep.png' },
];

export default function CustomerMarquee() {
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section id="customers" style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container" style={{ margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              fontWeight: 600,
              color: '#94A3B8',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Trusted by India's leading companies and dealerships
          </p>
        </div>

        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
          {/* Left Fade */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '120px',
              background: 'linear-gradient(to right, #FFFFFF, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          
          {/* Right Fade */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '120px',
              background: 'linear-gradient(to left, #FFFFFF, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Marquee Track */}
          <div
            className="animate-marquee"
            style={{
              display: 'flex',
              gap: '48px',
              alignItems: 'center',
              width: 'max-content',
            }}
          >
            {marqueeItems.map((brand, index) => (
              <img
                key={`${brand.name}-${index}`}
                src={brand.src}
                alt={`${brand.name} logo`}
                style={{
                  height: '40px',
                  maxWidth: '120px',
                  objectFit: 'contain',
                  opacity: 0.85,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
