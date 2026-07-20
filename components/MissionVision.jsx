'use client';

import React from 'react';
import { Sparkles, Target, Lightbulb } from 'lucide-react';

export default function MissionVision() {
  const styles = {
    section: {
      position: 'relative',
      padding: '100px 0 40px 0',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
    },
    backgroundGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      zIndex: 0,
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 800,
      color: '#0F2044',
      fontFamily: "'Outfit', sans-serif",
      margin: 0,
      letterSpacing: '-0.02em',
    },
    text: {
      fontSize: '18px',
      color: '#475569',
      lineHeight: 1.7,
      margin: 0,
      maxWidth: '440px',
      fontWeight: 400,
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.backgroundGradient} />
      
      <div className="container" style={{ margin: '0 auto', maxWidth: '1150px', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* 2-Column Side-by-Side Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          
          {/* Mission Block (Left side, left-aligned) */}
          <div className="mission-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={styles.titleWrapper}>
              <div style={{ padding: '14px', backgroundColor: '#F0F4FF', borderRadius: '12px', color: '#0066CC' }}>
                <Target size={28} />
              </div>
              <h3 style={styles.title}>
                Our Mission
              </h3>
            </div>
            <p style={styles.text}>
              To lead the adoption of Dry Ice Blasting <br className="desktop-only" />
              technology by delivering innovative,<br className="desktop-only" />
              environmentally responsible, and<br className="desktop-only" />
              world-class cleaning solutions.
            </p>
          </div>

          {/* Vision Block (Right side, right-aligned) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
            <div style={{ ...styles.titleWrapper, flexDirection: 'row-reverse' }}>
              <div style={{ padding: '14px', backgroundColor: '#F0F4FF', borderRadius: '12px', color: '#0066CC' }}>
                <Lightbulb size={28} />
              </div>
              <h3 style={styles.title}>
                Our Vision
              </h3>
            </div>
            <p style={styles.text}>
              To become India's most trusted and recognized leader in Dry Ice Blasting, Dry Ice manufacturing, and supply, setting the benchmark for innovation, quality, and sustainability.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mission-block {
            border-right: 1px solid #2596be;
            padding-right: 40px;
          }
          .desktop-only { display: block; }
        }
        @media (max-width: 767px) {
          .desktop-only { display: none; }
        }
      `}</style>
    </section>
  );
}
