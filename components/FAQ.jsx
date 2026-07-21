'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is dry ice blasting?',
    answer:
      'Dry ice blasting is a non-abrasive cleaning process that propels recycled CO₂ pellets at high speed. The pellets sublimate on contact, lifting away contaminants without leaving secondary media or water behind.',
  },
  {
    question: 'What surfaces can be cleaned with dry ice blasting?',
    answer:
      'It is highly effective on automotive components, production equipment, electrical cabinets, moulds, engines, conveyors, and other delicate industrial surfaces. We assess every application to select the safest operating pressure and pellet size.',
  },
  {
    question: 'Is dry ice blasting safe for sensitive equipment?',
    answer:
      'Yes. Because the process is dry, non-conductive, and non-abrasive when correctly calibrated, it is ideal for cleaning sensitive machinery and electrical systems with minimal disassembly and downtime.',
  },
  {
    question: 'Does dry ice blasting create waste or residue?',
    answer:
      'The dry ice converts directly to gas on impact, so there is no blasting media to collect. Only the removed contaminant remains, making clean-up faster and reducing the need for water or chemical solvents.',
  },
  {
    question: 'Can dry ice blasting be performed on-site?',
    answer:
      'Absolutely. Our mobile teams provide on-site dry ice cleaning for facilities, fleets, workshops, and production lines, helping you restore equipment while keeping operational disruption to a minimum.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
      <div
        style={{
          width: 'min(100% - 40px, 900px)',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#F0F4FF',
              color: '#0066CC',
              padding: '8px 20px',
              borderRadius: '999px',
              letterSpacing: '0.1em',
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              fontWeight: 700,
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-outfit)',
              color: '#0F2044',
              fontSize: '42px',
              fontWeight: 700,
              lineHeight: 1.15,
              margin: '18px 0 0',
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                style={{ borderBottom: '1px solid #E2E8F0' }}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    padding: '25px 4px',
                    border: 0,
                    background: 'transparent',
                    color: '#0F2044',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '19px',
                    fontWeight: 600,
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={22}
                    color="#0066CC"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                    }}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 250ms ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p
                      style={{
                        margin: '0',
                        padding: isOpen ? '0 4px 25px' : '0 4px',
                        color: '#64748B',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '16px',
                        lineHeight: 1.75,
                        transition: 'padding 250ms ease',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
