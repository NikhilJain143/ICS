'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MoveHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'engine', label: 'Engine Bay Cleaning' },
  { id: 'alloy-wheels', label: 'Alloy Wheels Cleaning' },
  { id: 'industrial', label: 'Industrial Equipment Cleaning' },
];

const transformData = [
  {
    id: 'bmw-engine',
    category: 'engine',
    label: 'Engine Bay Cleaning',
    before: '/images/bmw_before.webp',
    after: '/images/bmw_after.webp',
    aspectRatio: 4 / 3,
  },
  {
    id: 'mg-engine',
    category: 'engine',
    label: 'Engine Bay Cleaning',
    before: '/images/mg_before.webp',
    after: '/images/mg_after.webp',
    aspectRatio: 4 / 3,
  },
  {
    id: 'porsche-engine',
    category: 'engine',
    label: 'Engine Bay Cleaning',
    before: '/images/por_before.webp',
    after: '/images/por_after.webp',
    aspectRatio: 4 / 3,
  },
  {
    id: 'alloy-wheels',
    category: 'alloy-wheels',
    label: 'Alloy Wheels Cleaning',
    before: '/images/IMG_20260721_165225.png',
    after: '/images/IMG-20260721-WA0025.jpg',
    aspectRatio: 1,
  },
  {
    id: 'industrial-equipment',
    category: 'industrial',
    label: 'Industrial Equipment Cleaning',
    before: '/images/IMG-20260721-WA0009.jpg',
    after: '/images/IMG-20260721-WA0024.jpg',
    aspectRatio: 3 / 4,
  },
];

function SingleSlider({ data }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imageRatio, setImageRatio] = useState(data.aspectRatio || 4 / 3);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));

      setSliderPos((x / rect.width) * 100);
    },
    [isDragging]
  );

  const handleAfterImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;

    if (naturalWidth && naturalHeight) {
      setImageRatio(naturalWidth / naturalHeight);
    }
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <div
      style={{
        flex: '0 0 100%',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
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
        onMouseMove={(event) => handleMove(event.clientX)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={stopDragging}
        onTouchMove={(event) => handleMove(event.touches[0].clientX)}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: imageRatio <= 1 ? '600px' : '900px',
          margin: '0 auto',
          aspectRatio: imageRatio,
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(15, 32, 68, 0.12)',
          cursor: 'ew-resize',
          userSelect: 'none',
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
            onLoad={handleAfterImageLoad}
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
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
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              zIndex: 5,
            }}
          >
            After
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
            }}
            draggable={false}
          />

          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'rgba(15, 32, 68, 0.9)',
              padding: '6px 12px',
              borderRadius: '6px',
              color: '#60A5FA',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              zIndex: 5,
            }}
          >
            Before
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '3px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 0 12px rgba(37, 99, 235, 0.6)',
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
              border: '3px solid #FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(15, 32, 68, 0.2)',
            }}
          >
            <MoveHorizontal size={20} color="#FFFFFF" />
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          maxWidth: imageRatio <= 1 ? '600px' : '900px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <span style={{ fontSize: '14px', color: '#475569', fontWeight: 600 }}>
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

        <span style={{ fontSize: '14px', color: '#475569', fontWeight: 600 }}>
          After
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [activeCategory, setActiveCategory] = useState('engine');
  const scrollRef = useRef(null);

  const filteredData = transformData.filter(
    (item) => item.category === activeCategory
  );

  const hasMultipleImages = filteredData.length > 1;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [activeCategory]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
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
      <div
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
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
            What You Can Expect
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Cleaning categories"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: hasMultipleImages ? '24px' : '40px',
          }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  border: isActive
                    ? '1px solid #0066CC'
                    : '1px solid #DBEAFE',
                  backgroundColor: isActive ? '#0066CC' : '#F0F4FF',
                  color: isActive ? '#FFFFFF' : '#0066CC',
                  padding: '10px 18px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive
                    ? '0 6px 16px rgba(0, 102, 204, 0.2)'
                    : 'none',
                }}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {hasMultipleImages && (
          <div
            style={{ textAlign: 'center', marginBottom: '24px' }}
            className="mobile-swipe-text"
          >
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                color: '#64748B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <MoveHorizontal size={16} /> Swipe to see more examples
            </p>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '1050px',
            margin: '0 auto',
          }}
        >
          <button
            className="desktop-arrow"
            onClick={scrollLeft}
            disabled={!hasMultipleImages}
            aria-label="Show previous image"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              cursor: hasMultipleImages ? 'pointer' : 'not-allowed',
              opacity: hasMultipleImages ? 1 : 0.35,
              boxShadow: '0 4px 12px rgba(15, 32, 68, 0.06)',
              flexShrink: 0,
            }}
          >
            <ChevronLeft color="#0F2044" size={24} />
          </button>

          <div
            ref={scrollRef}
            className="hide-scrollbar"
            style={{
              display: 'flex',
              flex: 1,
              overflowX: 'hidden',
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
            }}
          >
            {filteredData.map((data) => (
              <SingleSlider key={data.id} data={data} />
            ))}
          </div>

          <button
            className="desktop-arrow"
            onClick={scrollRight}
            disabled={!hasMultipleImages}
            aria-label="Show next image"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              cursor: hasMultipleImages ? 'pointer' : 'not-allowed',
              opacity: hasMultipleImages ? 1 : 0.35,
              boxShadow: '0 4px 12px rgba(15, 32, 68, 0.06)',
              flexShrink: 0,
            }}
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
          .desktop-arrow {
            display: none !important;
          }
        }

        @media (min-width: 768px) {
          .mobile-swipe-text {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
