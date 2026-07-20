'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/918349173098?text=Hi%20Ice%20Cleaning%20Solutions,%20I%20am%20interested%20in%20a%20demo.', '_blank');
  };

  return (
    <>
      <header className="main-header" style={{
        position: 'fixed',
        top: 20,
        left: 100,
        right: 100,
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: scrolled ? '0 12px 40px -4px rgba(31, 38, 135, 0.15)' : 'none',
        borderRadius: '9999px',
        transition: 'all 0.6s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100px',
          padding: '0 24px',
          maxWidth: '1440px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/images/logo.png?v=4"
                alt="Ice Cleaning Solutions"
                className="nav-logo-img"
                style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
              />
            </a>
          </div>

          {/* Center: Nav links (desktop) */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '36px' }} className="desktop-nav">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#0F2044',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: "'Inter', sans-serif"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0066CC'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0F2044'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: WhatsApp button (desktop) */}
          <div style={{ display: 'none', alignItems: 'center', gap: '16px', flex: 1, justifyContent: 'flex-end' }} className="desktop-actions">
            <button
              onClick={handleWhatsApp}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                background: '#25D366',
                color: '#000000',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </button>
          </div>

          {/* Mobile Actions */}
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }} className="mobile-toggle-wrapper">
            <button
              className="mobile-whatsapp-btn"
              onClick={handleWhatsApp}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                background: '#25D366',
                color: '#000000',
                border: 'none',
                borderRadius: '999px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="mobile-whatsapp-text">WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        right: 0,
        bottom: 0,
        background: '#FFFFFF',
        zIndex: 40,
        display: mobileMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '32px 24px',
        gap: '24px',
        overflowY: 'auto'
      }}>
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#0F2044',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid #E2E8F0',
              fontFamily: "'Inter', sans-serif"
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
          <button
            onClick={handleWhatsApp}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              justifyContent: 'center',
              fontFamily: "'Inter', sans-serif",
              background: '#25D366',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </button>
        </div>
      </div>



      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle-wrapper { display: none !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .main-header {
            left: 16px !important;
            right: 16px !important;
          }
          .nav-logo-img { height: 56px !important; }
          .mobile-whatsapp-text { display: none !important; }
          .mobile-whatsapp-btn { padding: 12px 12px !important; border-radius: 50% !important; }
          .mobile-whatsapp-btn svg { width: 22px !important; height: 22px !important; }
        }
      `}</style>
    </>
  );
}
