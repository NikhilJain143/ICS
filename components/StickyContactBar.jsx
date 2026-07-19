'use client';
import React from 'react';
import { Phone } from 'lucide-react';

export default function StickyContactBar() {
  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', zIndex: 40, maxWidth: '480px', margin: 'auto' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', border: '1px solid #E2E8F0', borderRadius: '16px', boxShadow: '0 10px 40px rgba(15,32,68,0.12)', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F0F4FF' }}>
            <Phone size={16} color="#0066CC" />
          </div>
          <a href="tel:+918349173098" style={{ fontSize: '14px', fontWeight: 600, color: '#0F2044', textDecoration: 'none', fontFamily: '"Inter", sans-serif' }}>
            +91 83491 73098
          </a>
        </div>

        <button 
          onClick={() => window.open('https://wa.me/918349173098?text=Hi%20Ice%20Cleaning%20Solutions,%20I%20am%20interested%20in%20a%20demo.', '_blank')}
          className="btn-primary" 
          style={{ padding: '10px 20px', fontSize: '13px', backgroundColor: '#004C99', border: 'none', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', color: '#FFFFFF' }}
        >
          WhatsApp Us
        </button>

      </div>
    </div>
  );
}
