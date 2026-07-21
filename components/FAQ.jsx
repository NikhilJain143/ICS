'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Dry Ice Blasting, and how does it work?',
    answer:
      'Dry Ice Blasting is an advanced cleaning technology that uses compressed air to propel dry ice pellets at high speed. On impact, the pellets lift contaminants through thermal shock and instantly sublimate into gas, removing grease, oil, carbon deposits, and dirt without water, chemicals, or abrasive media.',
  },
  {
    question:
      'Is Dry Ice Blasting safe for vehicle engines and electrical components?',
    answer:
      'Yes. Dry Ice Blasting is a dry, non-conductive, and non-abrasive cleaning process, making it ideal for engine bays, electrical components, wiring harnesses, and other sensitive automotive parts when performed by trained professionals.',
  },
  {
    question: 'What automotive applications is Dry Ice Blasting used for?',
    answer:
      'Dry Ice Blasting is widely used for engine bay detailing, alloy wheel cleaning, underbody cleaning, classic car restoration, EV battery compartments, transmission housings, suspension components, and the removal of oil, grease, carbon deposits, road grime, and adhesive residues.',
  },
  {
    question: 'Can Dry Ice Blasting also be used for industrial cleaning?',
    answer:
      'Absolutely. The same technology is extensively used across manufacturing plants, food processing facilities, pharmaceutical units, printing presses, electrical equipment, molds, production machinery, and industrial maintenance where fast, residue-free cleaning with minimal downtime is essential.',
  },
  {
    question:
      'Does Dry Ice Blasting leave any residue or require post-cleaning cleanup?',
    answer:
      'No. Dry ice pellets instantly sublimate from a solid into carbon dioxide gas upon impact, leaving no blasting media behind. The only remaining material is the contaminant that has been removed, making cleanup quick and minimizing operational downtime.',
  },
  {
    question:
      'What are the advantages of Dry Ice Blasting over conventional cleaning methods?',
    answer:
      'Unlike pressure washing or chemical cleaning, Dry Ice Blasting is water-free, non-abrasive, and leaves no secondary blasting media behind. It helps reduce equipment downtime, protects delicate surfaces, eliminates the need for harsh chemicals, and provides a faster, cleaner, and more environmentally responsible solution.',
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
