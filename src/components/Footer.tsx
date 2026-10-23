import React from 'react';
import { Phone, MessageSquare, MapPin, ChevronUp, Award } from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_RAW_NUMBER, CEO_NAME } from '../utils/quote';

interface FooterProps {
  language: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAr = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090F1A] text-slate-300 border-t-2 border-[#C59B27]/40 text-xs font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Identity */}
          <div className="space-y-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#D4AF37] to-[#C59B27] flex items-center justify-center text-[#0E1726] font-bold shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 10l9-6 9 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
                </svg>
              </div>
              <span className={`font-bold text-base text-white ${isAr ? 'font-amiri text-xl' : 'font-cinzel'}`}>
                {isAr ? 'شركة القبطان الأول' : 'Al Qabtan Al Awwal'}
              </span>
            </div>
            <p className={`text-slate-400 leading-relaxed text-xs ${isAr ? 'font-amiri text-sm' : ''}`}>
              {isAr
                ? 'حلول الكرفانات والحاويات والمباني الجاهزة للمشاريع الإنشائية والتجارية والصناعية بالمملكة.'
                : 'Cabin containers & modular building solutions for construction, industrial, and commercial projects in Saudi Arabia.'}
            </p>
            <div className="text-[11px] text-[#D4AF37] flex items-center gap-1.5 pt-1">
              <Award className="w-3.5 h-3.5" />
              <span>
                {isAr ? 'الرئيس التنفيذي: ' : 'CEO: '}
                <strong className="text-white font-bold">{CEO_NAME}</strong>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className={`font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-3 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
              {isAr ? 'أقسام الموقع' : 'Navigation'}
            </h4>
            <ul className={`space-y-1.5 text-xs text-slate-400 ${isAr ? 'font-amiri text-sm' : ''}`}>
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#D4AF37] transition-colors">
                  {isAr ? 'مجموعة المنتجات (10 كرفانات)' : 'Product Range (10 Lines)'}
                </a>
              </li>
              <li>
                <a href="#floorplans" className="hover:text-[#D4AF37] transition-colors">
                  {isAr ? 'المخططات الهندسية' : 'Modular Floorplans'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  {isAr ? 'من نحن ومبادئنا' : 'About Us & Principles'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
                  {isAr ? 'معرض المشاريع والفيديوهات' : 'Project Gallery & Videos'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  {isAr ? 'طلب عرض سعر' : 'Request a Quote'}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-2">
            <h4 className={`font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-3 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
              {isAr ? 'مناطق التغطية والخدمة' : 'Service Coverage'}
            </h4>
            <ul className={`space-y-1.5 text-xs text-slate-400 ${isAr ? 'font-amiri text-sm' : ''}`}>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{isAr ? 'جدة (كافة الأحياء والمناطق الصناعية)' : 'Jeddah & Industrial Districts'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{isAr ? 'مكة المكرمة والمشاعر المقدسة' : 'Makkah Al-Mukarramah'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{isAr ? 'رابغ ومدينة الملك عبدالله الاقتصادية' : 'Rabigh & KAEC'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{isAr ? 'المناطق المحيطة بالمملكة العربية السعودية' : 'Surrounding Western Region Sites'}</span>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="space-y-3">
            <h4 className={`font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-3 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
              {isAr ? 'التواصل المباشر' : 'Direct Communication'}
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center gap-2 text-slate-300 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono" dir="ltr">+966 50 250 0899</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +966 50 250 0899</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#162238] hover:bg-[#1E2E4A] text-slate-300 text-[11px] transition-colors border border-[#C59B27]/30"
              >
                <ChevronUp className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isAr ? 'العودة للأعلى' : 'Back to Top'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className={isAr ? 'font-amiri text-xs' : ''}>
            {isAr ? (
              'جميع الحقوق محفوظة © لشركة القبطان الأول للكرفانات والمباني الجاهزة.'
            ) : (
              '© All rights reserved. Al Qabtan Al Awwal Est. Co. Cabin Containers & Modular Buildings.'
            )}
          </div>
          <div className="flex items-center gap-3">
            <span>Jeddah & Makkah, Saudi Arabia</span>
            <span>·</span>
            <span className="text-[#D4AF37]">CEO: NASEER AHMAD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
