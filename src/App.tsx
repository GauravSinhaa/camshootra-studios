import { useState } from 'react';
import { ClientMarquee } from './components/ClientMarquee';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MotionSection } from './components/MotionSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';

export function App() {
  const [preselectedService, setPreselectedService] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-[#0A0908] text-[#F5F0E8]">
      {/* Subtle full-page editorial grain */}
      <div className="film-grain pointer-events-none fixed inset-0 z-40" />

      <Navbar />

      <main>
        <Hero />
        <ClientMarquee />
        <PortfolioSection onCommissionCategory={setPreselectedService} />
        <MotionSection />
        <ServicesSection onSelectServiceForBrief={setPreselectedService} />
        <ProcessSection />
        <ContactSection preselectedService={preselectedService} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

