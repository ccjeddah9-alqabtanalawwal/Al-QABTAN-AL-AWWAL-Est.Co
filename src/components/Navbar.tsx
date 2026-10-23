import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, Globe } from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_RAW_NUMBER } from '../utils/quote';

interface NavbarProps {
  language: 'ar' | 'en';
  onToggleLanguage: () => void;
  onOpenQuote: (defaultProduct?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = language === 'ar';

  const navLinks = [
    { href: '#home', label: isAr ? 'الرئيسية' : 'Home' },
    { href: '#products', label: isAr ? 'المنتجات' : 'Products' },
    { href: '#floorplans', label: isAr ? 'المخططات' : 'Layouts' },
    { href: '#about', label: isAr ? 'من نحن' : 'About' },
    { href: '#gallery', label: isAr ? 'المشاريع' : 'Projects' },
    { href: '#contact', label: isAr ? 'التواصل' : 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0E1726] border-b-2 border-[#C59B27]/40 text-white shadow-xl">
      {/* Top Heritage Utility Bar */}
      <div className="bg-[#090F1A] border-b border-slate-800/80 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-300 truncate">
            <span className="font-semibold text-[#D4AF37] tracking-wider uppercase">
              {isAr ? 'نخدم جدة ومكة المكرمة والمناطق المحيطة' : 'Serving Jeddah, Makkah & Surrounding Areas'}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">
              {isAr ? 'حلول الكرفانات والحاويات والمباني الجاهزة' : 'Cabin Containers & Modular Building Solutions'}
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#D4AF37] transition-colors"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className="font-mono text-xs hidden md:inline" dir="ltr">+966 50 250 0899</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="text-xs">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Classic Bar - 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark with Classic Seal/Crest */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group focus:outline-none"
          >
            {/* Architectural Heritage Stamp Emblem */}
            <div className="w-11 h-11 rounded-md bg-gradient-to-br from-[#D4AF37] via-[#C59B27] to-[#8C6915] p-[1px] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-[5px] bg-[#0E1726] flex items-center justify-center text-[#D4AF37]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10l9-6 9 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
                  <path d="M9 21V12h6v9" />
                  <path d="M9 12h6" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-bold tracking-wide text-white leading-tight ${isAr ? 'font-amiri text-2xl font-bold' : 'font-cinzel tracking-wider'}`}>
                {isAr ? 'مؤسسة القبطان الأول' : 'AL QABTAN AL AWWAL'}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#D4AF37] tracking-widest uppercase font-serif">
                {isAr ? 'للكرفانات والمباني الجاهزة • تأسيس مهني' : 'EST. CO. · PORTA CABINS & CONTAINERS'}
              </span>
            </div>
          </a>

          {/* Zone 2: Classic Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-serif tracking-wide text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#D4AF37] ${isAr ? 'text-base font-amiri font-bold' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & Classic Action Button */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#C59B27]/40 bg-[#162238] hover:bg-[#1E2E4A] text-xs font-serif text-slate-100 transition-colors whitespace-nowrap shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className={isAr ? 'font-serif' : 'font-amiri text-sm font-bold'}>{isAr ? 'English' : 'العربية'}</span>
            </button>

            {/* Primary Action Button (Old school brass button) */}
            <button
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs md:text-sm font-serif font-bold text-[#0E1726] bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:from-[#E5C358] hover:to-[#C59B27] rounded shadow-md transition-all whitespace-nowrap shrink-0 border border-[#F3DE9C]/40"
            >
              {isAr ? 'اطلب عرض سعر' : 'Request a Quote'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A111C] border-b-2 border-[#C59B27]/40 px-5 py-5 space-y-4">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-sm text-slate-200 hover:text-[#D4AF37] hover:bg-slate-900 rounded transition-colors ${isAr ? 'font-amiri text-lg' : 'font-serif'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 text-center font-serif font-bold text-sm text-[#0E1726] bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] rounded shadow-md transition-colors"
            >
              {isAr ? 'اطلب عرض سعر الآن' : 'Request a Quote Now'}
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 flex items-center justify-center gap-2 font-medium text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'محادثة فورية على الواتساب' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
