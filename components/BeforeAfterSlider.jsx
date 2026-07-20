'use client';

import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const transformData = [
  {
    id: 'engine',
    label: 'BMW Engine Bay',
    before: '/images/bmw_before.jpg',
    after: '/images/bmw_after.jpg',
  },
  {
    id: 'mg',
    label: 'MG Undercarriage',
    before: '/images/mg_before.jpg',
    after: '/images/mg_after.jpg',
  },
  {
    id: 'porsche',
    label: 'Porsche Details',
    before: '/images/por_before.jpg',
    after: '/images/por_after.jpg',
  }
];

function SingleSlider({ data }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPos(percentage);
    },
    [isDragging]
  );

  const onMouseMove = (e) => handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);
  const stopDragging = () => setIsDragging(false);

  return (
    <div
      style={{
        flex: '0 0 100%',
        minWidth: '100%',
        scrollSnapAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={onMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={stopDragging}
        onTouchMove={onTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          aspectRatio: '4/3',
          maxHeight: '550px',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '4px solid white',
          boxShadow: '0 20px 50px rgba(15,32,68,0.12)',
          cursor: 'ew-resize',
          userSelect: 'none',
          backgroundColor: '#0F2044',
        }}
      >
        {/* AFTER Image (Base Layer) */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <img
            src={`${data.after}?v=4`}
            alt={`${data.label} After`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            draggable={false}
          />
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              backgroundColor: '#0066CC',
              padding: '6px 12px',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              zIndex: 5,
            }}
          >
            AFTER
          </div>
        </div>

        {/* BEFORE Image (Overlay Layer) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            zIndex: 1,
          }}
        >
          <img
            src={`${data.before}?v=4`}
            alt={`${data.label} Before`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            draggable={false}
          />
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'rgba(15,32,68,0.9)',
              padding: '6px 12px',
              borderRadius: '6px',
              color: '#60A5FA',
              fontSize: '11px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              zIndex: 5,
            }}
          >
            BEFORE
          </div>
        </div>

        {/* Tint Overlay (Safe for Safari) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(15, 32, 68, 0.15)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Divider Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '3px',
            backgroundColor: 'white',
            boxShadow: '0 0 12px rgba(37,99,235,0.6)',
            zIndex: 10,
            transform: 'translateX(-50%)',
          }}
        >
          {/* Handle */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '44px',
              height: '44px',
              backgroundColor: '#0066CC',
              border: '3px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(15,32,68,0.2)',
            }}
          >
            <MoveHorizontal size={20} color="white" />
          </div>
        </div>
      </div>

      {/* Accessibility Range Input */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <span style={{ fontSize: '14px', color: '#475569', fontWeight: 600 }}>Before</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          style={{ flex: 1, cursor: 'pointer', accentColor: '#0066CC' }}
          aria-label="Image comparison slider"
        />
        <span style={{ fontSize: '14px', color: '#475569', fontWeight: 600 }}>After</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="results"
      style={{
        padding: '100px 0',
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Badge */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
            }}
          >
            WHAT YOU CAN EXPECT
          </span>
        </div>

        {/* Scroll Instructions */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="mobile-swipe-text">
           <p style={{ margin: 0, fontSize: '14px', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
             <MoveHorizontal size={16} /> Swipe to see more examples
           </p>
        </div>

        {/* Horizontal Scrolling Slider Container with Arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '1050px', margin: '0 auto' }}>
          
          <button 
            className="desktop-arrow"
            onClick={scrollLeft}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(15,32,68,0.06)',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F8FAFC'; e.currentTarget.style.borderColor = '#CBD5E1'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.borderColor = '#E2E8F0'; }}
          >
            <ChevronLeft color="#0F2044" size={24} />
          </button>

          <div 
            ref={scrollRef}
            style={{ 
              display: 'flex', 
              flex: 1,
              gap: '24px', 
              overflowX: 'auto', 
              scrollSnapType: 'x mandatory',
              paddingBottom: '24px',
              WebkitOverflowScrolling: 'touch',
            }}
            className="hide-scrollbar"
          >
            {transformData.map((data) => (
              <SingleSlider key={data.id} data={data} />
            ))}
          </div>

          <button 
            className="desktop-arrow"
            onClick={scrollRight}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(15,32,68,0.06)',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F8FAFC'; e.currentTarget.style.borderColor = '#CBD5E1'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.borderColor = '#E2E8F0'; }}
          >
            <ChevronRight color="#0F2044" size={24} />
          </button>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 767px) {
          .desktop-arrow { display: none !important; }
        }
        @media (min-width: 768px) {
          .mobile-swipe-text { display: none !important; }
        }
      `}</style>
    </section>
  );
}
