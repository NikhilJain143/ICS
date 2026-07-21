'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { MoveHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const transformData = [
  {
    id: 'bmw-engine',
    label: 'Engine Bay Cleaning',
    before: '/images/bmw_before.webp',
    after: '/images/bmw_after.webp',
    beforeStyle: { transform: 'scale(0.98)' },
    afterStyle: {},
  },
  {
    id: 'mg-engine',
    label: 'Engine Bay Cleaning',
    before: '/images/mg_before.webp',
    after: '/images/mg_after.webp',
    beforeStyle: {
      transform: 'scale(1.03) translateY(10px)',
      transformOrigin: 'center',
    },
    afterStyle: {},
  },
  {
    id: 'porsche-engine',
    label: 'Engine Bay Cleaning',
    before: '/images/por_before.webp',
    after: '/images/por_after.webp',
    beforeStyle: {},
    afterStyle: {},
  },
  {
    id: 'alloy-wheels',
    label: 'Alloy Wheels Cleaning',
    before: '/images/IMG-20260721-WA0026.jpg',
    after: '/images/IMG-20260721-WA0025.jpg',
    beforeStyle: {},
    afterStyle: {},
  },
  {
    id: 'industrial-equipment',
    label: 'Industrial Equipment Cleaning',
    before: '/images/IMG-20260721-WA0009.jpg',
    after: '/images/IMG-20260721-WA0024.jpg',
    beforeStyle: {},
    afterStyle: {},
  },
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

  const onMouseMove = (event) => handleMove(event.clientX);
  const onTouchMove = (event) => handleMove(event.touches[0].clientX);
  const stopDragging = () => setIsDragging(false);

  return (
    <div
      style={{
        flex: '0 0 100%',
        minWidth: '100%',
        scrollSnapAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={`${data.after}?v=11`}
            alt={`${data.label} After`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
              display: 'block',
              ...(data.afterStyle || {}),
            }}
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

        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            zIndex: 1,
          }}
        >
          <Image
            src={`${data.before}?v=11`}
            alt={`${data.label} Before`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
              display: 'block',
              ...(data.beforeStyle || {}),
            }}
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

        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(15, 32, 68, 0.15)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

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

      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-outfit)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#0F2044',
          }}
        >
          {data.label}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            color: '#475569',
            fontWeight: 600,
          }}
        >
          Before
        </span>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(event) => setSliderPos(Number(event.target.value))}
          style={{
            flex: 1,
            cursor: 'pointer',
            accentColor: '#0066CC',
          }}
          aria-label={`${data.label} image comparison slider`}
        />

        <span
          style={{
            fontSize: '14px',
            color: '#475569',
            fontWeight: 600,
          }}
        >
          After
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left:
