'use client';

import React from 'react';
import { MapPin, Navigation, Map } from 'lucide-react';

export default function Offices() {
  const offices = [
    {
      id: 'delhi',
      city: 'New Delhi',
      name: 'North India Headquarters',
      address: 'Atul Cryogenic Gases, F-128, above Sai Medical Agency, Mayapuri Industrial Area Phase II, Industrial Area, New Delhi, Delhi 110064',
      mapQuery: 'Atul+Cryogenic+Gases,+Mayapuri+Industrial+Area+Phase+II,+New+Delhi,+Delhi+110064',
      link: 'https://www.google.com/maps/dir/?api=1&destination=Atul+Cryogenic+Gases,+Mayapuri+Industrial+Area+Phase+II,+New+Delhi,+Delhi+110064'
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad',
      name: 'South India Hub',
      address: 'SY.130P & 115/1P, Manikonda Jagir, Nanakramguda Road, Hyderabad – 500032, Telangana',
      mapQuery: 'Manikonda+Jagir,+Nanakramguda+Road,+Hyderabad+500032',
      link: 'https://www.google.com/maps/dir/?api=1&destination=Manikonda+Jagir,+Nanakramguda+Road,+Hyderabad+500032'
    }
  ];

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '100px 0', borderTop: '1px solid #E2E8F0' }}>
      <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
                marginBottom: '16px'
              }}
            >
              <Map size={14} />
              Our Locations
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0F2044', fontFamily: "'Outfit', sans-serif", margin: 0, letterSpacing: '-0.02em' }}>
              Visit Our Facilities
            </h2>
        </div>

        {/* Office Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          
          {offices.map((office) => (
            <div 
              key={office.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                boxShadow: '0 20px 40px -10px rgba(15, 32, 68, 0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Google Maps Embed */}
              <div style={{ width: '100%', height: '300px', backgroundColor: '#E2E8F0', position: 'relative' }}>
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${office.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>

              {/* Office Details */}
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <MapPin size={18} color="#0066CC" />
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#0066CC', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {office.city}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F2044', fontFamily: "'Outfit', sans-serif", margin: '0 0 16px 0' }}>
                  {office.name}
                </h3>
                
                <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: '0 0 32px 0', flex: 1 }}>
                  {office.address}
                </p>

                <a 
                  href={office.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#0F2044',
                    color: '#FFFFFF',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '15px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0066CC';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 102, 204, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0F2044';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
