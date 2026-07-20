'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const getLinkStyle = (name) => ({
    color: hoveredLink === name ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
    textDecoration: 'none',
    fontSize: '13px',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  });

  return (
    <footer id="contact" style={{ backgroundColor: '#0F2044', padding: '60px 0 28px 0', fontFamily: 'Inter, sans-serif' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
          
          {/* Left Group */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '12px 24px', borderRadius: '12px', display: 'inline-block' }}>
              <img 
                src="/images/logo.png?v=4" 
                alt="Ice Cleaning Solutions" 
                style={{ height: '64px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '320px', marginTop: '20px', lineHeight: '1.6' }}>
              Precision dry ice blasting for luxury automotive dealerships & industries.
            </p>
          </div>

          {/* Middle Group */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Links</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              {['Services', 'Results', 'About', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href="#"
                  style={getLinkStyle(link)}
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Group */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px' }}>
                <Phone size={14} color="rgba(255, 255, 255, 0.6)" />
                <span>+91 83491 73098</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px' }}>
                <Mail size={14} color="rgba(255, 255, 255, 0.6)" />
                <span>sales@icecleaningsolutions.org</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '40px', paddingTop: '20px' }}>
          
          {/* Bottom Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.35)' }}>
            <span>© 2026 Ice Cleaning Solutions (Atul Group). All Rights Reserved.</span>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Terms</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
