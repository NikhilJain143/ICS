
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomerMarquee from '../components/CustomerMarquee';
import MissionVision from '../components/MissionVision';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ServicesShowcase from '../components/ServicesShowcase';
import TrustHeritage from '../components/TrustHeritage';
import Offices from '../components/Offices';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Trusted Brand Logos */}
      <CustomerMarquee />

      {/* Enterprise Dry Ice Solutions */}
      <ServicesShowcase />

      {/* Before/After Visual Proof */}
      <BeforeAfterSlider />

      {/* About & Founder Heritage */}
      <TrustHeritage />

      {/* Office Locations */}
      <Offices />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Footer */}
      <Footer />
      
    </main>
  );
}
