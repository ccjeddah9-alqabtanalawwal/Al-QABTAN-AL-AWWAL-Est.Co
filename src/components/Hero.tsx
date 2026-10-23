import React, { useState } from 'react';
import { MessageSquare, Phone, ArrowLeft, ArrowRight, ShieldCheck, MapPin, Truck, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_RAW_NUMBER, CEO_NAME } from '../utils/quote';

interface HeroProps {
  language: 'ar' | 'en';
  onOpenQuote: (defaultProduct?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenQuote }) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);

  return (
    <section id="home" className="relative bg-[#0E1726] text-white overflow-hidden border-b-2 border-[#C59B27]/30">
      {/* Blueprint & Vintage Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]"></div>

      {/* Subtle classical illumination */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#C59B27]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24 relative z-10">
        
        {/* Main 2-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Content & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Heritage Header Seal Strip */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-serif text-slate-300">
              <span className="flex items-center gap-1.5 text-[#D4AF37] font-semibold tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" />
                {isAr ? 'جدة • مكة المكرمة • المناطق المحيطة' : 'Jeddah • Makkah • Surrounding Areas'}
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-300">
                {isAr ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-400">
                {isAr ? 'تأسيس احترافي وتوريد معتمد' : 'Authorized Engineering & Supply'}
              </span>
            </div>

            {/* Main Headline in Classic Old School Serif */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.25] text-balance ${
              isAr ? 'font-amiri text-4xl sm:text-5xl lg:text-6xl font-bold' : 'font-heading-en'
            }`}>
              {isAr ? (
                <>
                  حلول احترافية للكرفانات والحاويات{' '}
                  <span className="text-[#D4AF37] block mt-1">والمباني الجاهزة بالمملكة</span>
                </>
              ) : (
                <>
                  Professional Cabin Containers &{' '}
                  <span className="text-[#D4AF37] block mt-1">Modular Building Solutions</span>
                </>
              )}
            </h1>

            {/* Sub-headline / Editorial description */}
            <p className={`text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-serif ${isAr ? 'font-amiri text-lg sm:text-xl' : ''}`}>
              {isAr ? (
                'مرحباً بكم في شركة القبطان الأول، المتخصصة في حلول الكرفانات المتنقلة والحاويات والمباني الجاهزة للمشاريع الإنشائية والتجارية والصناعية، مع إمكانية تخصيص المقاسات والعزل والتقسيمات الداخلية وفقاً للمواصفات المطلوبة.'
              ) : (
                'Welcome to Al Qabtan Al Awwal Est. Co., your trusted point of contact for portable cabin containers and modular building solutions for construction, commercial, industrial, and business projects across Western Saudi Arabia.'
              )}
            </p>

            {/* Key feature bullet points with classic check markers */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-slate-200 font-serif ${isAr ? 'font-amiri text-base' : ''}`}>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#C59B27]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
                <span>{isAr ? 'عزل ساندوتش بانل حراري وصوتي معتمد' : 'Certified thermal & acoustic sandwich panels'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#C59B27]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
                <span>{isAr ? 'مقاسات وتصاميم معمارية مخصصة' : 'Custom architectural dimensions & layouts'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#C59B27]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
                <span>{isAr ? 'أسطول شحن وتنزيل بالكرين لموقع المشروع' : 'Crane deployment & transport fleet to site'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#C59B27]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
                <span>{isAr ? 'عروض أسعار شفافة وواضحة' : 'Transparent engineering quotations'}</span>
              </div>
            </div>

            {/* Call to Actions: WhatsApp + Request Quote */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-serif font-bold text-[#0E1726] bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:from-[#E5C358] hover:to-[#C59B27] rounded shadow-lg transition-all group border border-[#F3DE9C]/40"
              >
                <span>{isAr ? 'اطلب عرض سعر الآن' : 'Request a Quote'}</span>
                <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                  isAr 
                    ? 'السلام عليكم شركة القبطان الأول، أود الاستفسار وطلب عرض سعر لكرفان/حاوية لمشروعنا.'
                    : 'Hello Al Qabtan Al Awwal, I would like to inquire and request a cabin quotation for our project.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-serif font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded shadow-sm transition-all border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'واتساب مباشر (+966 50 250 0899)' : 'WhatsApp (+966 50 250 0899)'}</span>
              </a>

              <a
                href={`tel:${COMPANY_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-serif text-slate-300 hover:text-white border border-slate-700 hover:border-[#D4AF37]/60 rounded transition-colors"
                title="Call Directly"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-mono text-xs sm:text-sm" dir="ltr">+966 50 250 0899</span>
              </a>
            </div>

            {/* Leadership attribution line in classic stamp format */}
            <div className="pt-2 text-xs font-serif text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-slate-500">{isAr ? 'إدارة الشركة:' : 'Executive Leadership:'}</span>{' '}
                <span className="font-bold text-[#D4AF37] tracking-wider">{CEO_NAME}</span>{' '}
                <span className="text-slate-500">({isAr ? 'الرئيس التنفيذي' : 'Chief Executive Officer'})</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Old School Framed Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#C59B27]/40 shadow-2xl bg-[#090F1A] group p-1.5">
              
              <div className="aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden bg-black rounded">
                {isPlayingVideo ? (
                  <video
                    src="/assets/aistudio/01_Cover_f0576d79.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/assets/aistudio/IMG-20261019-WA0149_70491c83.jpg"
                    alt="Al Qabtan Crane Delivery"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"></div>

                <div className="absolute top-3 left-3 z-20">
                  <button
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="px-2.5 py-1 text-[11px] font-serif bg-black/70 hover:bg-black/90 text-[#D4AF37] rounded border border-[#C59B27]/40 transition-colors"
                  >
                    {isPlayingVideo 
                      ? (isAr ? 'عرض صورة ثابتة' : 'Show Photo') 
                      : (isAr ? 'تشغيل الفيديو' : 'Play Video')}
                  </button>
                </div>

                <div className="absolute bottom-3 inset-x-3 text-white z-10 text-xs font-serif">
                  <div className="font-bold text-sm text-[#D4AF37]">
                    {isAr ? 'مؤسسة القبطان الأول في الميدان' : 'Al Qabtan In Action'}
                  </div>
                  <div className="text-slate-300 text-[11px] truncate">
                    {isAr ? 'تصنيع راقي، شحن فوري، وتركيب بالكرين في جدة ومكة' : 'Fabrication, transport & crane offloading in Jeddah & Makkah'}
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#0A111C] border-t border-[#C59B27]/20 flex items-center justify-between text-xs font-serif">
                <div className="flex items-center gap-2 text-slate-300">
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isAr ? 'أسطول شحن وتوصيل للمشاريع' : 'Dedicated transport & crane dispatch'}</span>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#D4AF37] hover:underline font-bold text-[11px]"
                >
                  {isAr ? 'معرض الأعمال (41+ صورة)' : 'View Gallery (41+ Assets)'}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Classic Heritage Trust Strip */}
        <div className="mt-14 pt-8 border-t-2 border-[#C59B27]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-200 font-serif">
          
          <div className="p-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C59B27]/40 pl-4 rtl:pl-0 rtl:pr-4">
            <div className="text-2xl font-bold font-mono text-[#D4AF37] tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
              {isAr ? 'عزل ساندوتش بانل' : 'Sandwich Panel Insulation'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'عزل حراري ومقاومة مناخية' : 'Thermal & weather resistance'}
            </div>
          </div>

          <div className="p-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C59B27]/40 pl-4 rtl:pl-0 rtl:pr-4">
            <div className="text-2xl font-bold font-mono text-[#D4AF37] tabular-nums">
              10+
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
              {isAr ? 'خطوط منتجات كرفانات' : 'Modular Product Lines'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'مكاتب، سكن، غرف حراسة' : 'Offices, dorms, guard rooms'}
            </div>
          </div>

          <div className="p-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C59B27]/40 pl-4 rtl:pl-0 rtl:pr-4">
            <div className="text-2xl font-bold font-mono text-[#D4AF37] tabular-nums">
              JED & MAK
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
              {isAr ? 'تغطية جدة ومكة' : 'Western Region Coverage'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'والمناطق المحيطة بالمملكة' : 'Jeddah, Makkah & Surrounding'}
            </div>
          </div>

          <div className="p-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C59B27]/40 pl-4 rtl:pl-0 rtl:pr-4">
            <div className="text-2xl font-bold font-mono text-[#D4AF37] tabular-nums">
              EST. SAUDI
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
              {isAr ? 'تواصل مهني موثوق' : 'Professional Communication'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'متابعة عبر الواتساب والموقع' : 'Direct WhatsApp & phone'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
