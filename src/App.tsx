import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { FloorplanShowcase } from './components/FloorplanShowcase';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [prefilledCabinType, setPrefilledCabinType] = useState<string>('');

  // Dynamically update document direction and language attribute
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenQuote = (defaultProduct?: string) => {
    if (defaultProduct) {
      setPrefilledCabinType(defaultProduct);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Top Navbar */}
      <Navbar
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Home & Hero */}
        <Hero language={language} onOpenQuote={handleOpenQuote} />

        {/* Section 2: Products & Services (10 Products) */}
        <ProductsSection
          language={language}
          onSelectProductForQuote={handleOpenQuote}
        />

        {/* Modular Floorplan & Schematics Showcase */}
        <FloorplanShowcase
          language={language}
          onSelectLayoutForQuote={handleOpenQuote}
        />

        {/* Section 3: About Us, Mission, Vision, Principles, Leadership */}
        <AboutSection language={language} />

        {/* Section 4: Projects & Gallery (Photos & Real Videos) */}
        <GallerySection
          language={language}
          onSelectForQuote={handleOpenQuote}
        />

        {/* Section 5: Contact & Request a Quote Configurator */}
        <QuoteSection
          language={language}
          prefilledCabinType={prefilledCabinType}
        />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Quick Action Contacts */}
      <FloatingContact
        language={language}
        onOpenQuote={() => handleOpenQuote()}
      />
    </div>
  );
}
