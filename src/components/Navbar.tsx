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
    <header className="sticky top-0 z-50 bg-[#19233E]/95 backdrop-blur-md border-b border-slate-700/60 text-white shadow-md">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#111728] border-b border-slate-800 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-300 truncate">
            <span className="font-semibold text-[#CC9736]">
              {isAr ? 'نخدم جدة ومكة المكرمة' : 'Serving Jeddah, Makkah & Surrounding Areas'}
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">
              {isAr ? 'حلول الكرفانات والحاويات والمباني الجاهزة' : 'Cabin Containers & Modular Buildings'}
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#CC9736] transition-colors"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5 text-[#CC9736]" />
              <span className="font-mono text-xs hidden md:inline">+966 50 250 0899</span>
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

      {/* Main Navigation Bar - Following Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single Brand Wordmark element */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
          >
            {/* Architectural Cabin Logo Icon matching brand guidelines */}
            <div className="w-10 h-10 rounded-lg bg-[#CC9736] flex items-center justify-center text-[#19233E] font-bold shadow-sm group-hover:bg-[#b8822a] transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10l9-6 9 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
                <path d="M9 21V12h6v9" />
                <path d="M9 12h6" />
                <circle cx="13.5" cy="15.5" r=".5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                {isAr ? 'مؤسسة القبطان الأول' : 'AL QABTAN AL AWWAL'}
              </span>
              <span className="text-[11px] text-[#CC9736] tracking-wider uppercase font-medium">
                {isAr ? 'للكرفانات والمباني الجاهزة' : 'EST. CO. · CABIN CONTAINERS'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 concise single-line nav links with hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#CC9736] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#CC9736]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-600 bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-100 transition-colors whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-[#CC9736]" />
              <span className={isAr ? 'font-sans' : 'font-arabic font-normal'}>{isAr ? 'English' : 'العربية'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold text-[#19233E] bg-[#CC9736] hover:bg-[#b8822a] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              {isAr ? 'اطلب عرض سعر' : 'Request a Quote'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151c31] border-b border-slate-700 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#CC9736] hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-700 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-4 text-center font-semibold text-sm text-[#19233E] bg-[#CC9736] hover:bg-[#b8822a] rounded-lg shadow-sm transition-colors"
            >
              {isAr ? 'اطلب عرض سعر الآن' : 'Request a Quote Now'}
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-4 flex items-center justify-center gap-2 font-medium text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-lg"
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
