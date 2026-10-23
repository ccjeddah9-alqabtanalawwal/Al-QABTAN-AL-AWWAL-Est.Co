import React, { useState } from 'react';
import { MessageSquare, Phone, ArrowLeft, ArrowRight, ShieldCheck, MapPin, Truck, CheckCircle2 } from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_RAW_NUMBER } from '../utils/quote';

interface HeroProps {
  language: 'ar' | 'en';
  onOpenQuote: (defaultProduct?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenQuote }) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);

  return (
    <section id="home" className="relative bg-[#19233E] text-white overflow-hidden border-b border-slate-800">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#CC9736_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Decorative gradient bloom */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#CC9736]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-[#253359]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        
        {/* Main 2-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Content & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Certification Kickers (Clean unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 text-[#CC9736] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                {isAr ? 'جدة • مكة المكرمة • المناطق المحيطة' : 'Jeddah • Makkah • Surrounding Areas'}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">
                {isAr ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">
                {isAr ? 'تصنيع وتوريد فوري' : 'Direct Manufacturer & Supply'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2] text-balance">
              {isAr ? (
                <>
                  حلول احترافية للكرفانات والحاويات{' '}
                  <span className="text-[#CC9736] block mt-1">والمباني الجاهزة بالمملكة</span>
                </>
              ) : (
                <>
                  Professional Cabin Containers &{' '}
                  <span className="text-[#CC9736] block mt-1">Modular Building Solutions</span>
                </>
              )}
            </h1>

            {/* Sub-headline / Editorial description from prompt */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {isAr ? (
                'مرحباً بكم في شركة القبطان الأول، المتخصصة في حلول الكرفانات المتنقلة والحاويات والمباني الجاهزة للمشاريع الإنشائية والتجارية والصناعية، مع إمكانية تخصيص المقاسات والعزل والتقسيمات الداخلية وفقاً للمواصفات المطلوبة.'
              ) : (
                'Welcome to Al Qabtan Al Awwal Est. Co., your trusted partner for portable cabins and modular structures in Saudi Arabia. We deliver tailored site offices, worker accommodation, security units, storage containers, and custom complexes built to project specifications.'
              )}
            </p>

            {/* Key feature bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CC9736] shrink-0" />
                <span>{isAr ? 'عزل ساندوتش بانل حراري وصوتي' : 'Sandwich panel thermal & sound insulation'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CC9736] shrink-0" />
                <span>{isAr ? 'مقاسات وتصاميم مخصصة حسب الطلب' : 'Custom dimensions & tailored floor plans'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CC9736] shrink-0" />
                <span>{isAr ? 'نقل وتنزيل بالكرين لموقع المشروع' : 'Crane delivery & installation to site'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CC9736] shrink-0" />
                <span>{isAr ? 'عروض أسعار شفافة وسريعة' : 'Transparent quotes & fast turnaround'}</span>
              </div>
            </div>

            {/* Call to Actions: WhatsApp + Request Quote */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#19233E] bg-[#CC9736] hover:bg-[#b8822a] rounded-lg shadow-md transition-all group"
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
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'واتساب مباشر (+966 50 250 0899)' : 'WhatsApp (+966 50 250 0899)'}</span>
              </a>

              <a
                href={`tel:${COMPANY_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors"
                title="Call Directly"
              >
                <Phone className="w-4 h-4 text-[#CC9736]" />
                <span className="font-mono text-xs sm:text-sm" dir="ltr">+966 50 250 0899</span>
              </a>
            </div>

            {/* Leadership attribution line */}
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-slate-500">{isAr ? 'إدارة الشركة:' : 'Leadership:'}</span>{' '}
              <span className="font-semibold text-slate-200">NASEER AHMAD</span>{' '}
              <span className="text-slate-500">({isAr ? 'الرئيس التنفيذي' : 'Chief Executive Officer'})</span>
            </div>

          </div>

          {/* Right Column (5 cols): High-Impact Genuine Video & Project Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
              
              {/* Actual Completed Project Video */}
              <div className="aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden bg-black">
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

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                {/* Real-time Video Toggle Control */}
                <div className="absolute top-3 left-3 z-20">
                  <button
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="px-2.5 py-1 text-[11px] font-medium bg-black/60 hover:bg-black/80 text-white rounded backdrop-blur-sm border border-white/20 transition-colors"
                  >
                    {isPlayingVideo 
                      ? (isAr ? 'عرض صورة ثابتة' : 'Show Photo') 
                      : (isAr ? 'تشغيل الفيديو' : 'Play Video')}
                  </button>
                </div>

                {/* Bottom Caption inside media */}
                <div className="absolute bottom-3 inset-x-3 text-white z-10 text-xs">
                  <div className="font-semibold text-sm text-[#CC9736]">
                    {isAr ? 'مؤسسة القبطان الأول في الميدان' : 'Al Qabtan In Action'}
                  </div>
                  <div className="text-slate-300 text-[11px] truncate">
                    {isAr ? 'تصنيع راقي، شحن فوري، وتركيب بالكرين في جدة ومكة' : 'Fabrication, transport & crane offloading in Jeddah & Makkah'}
                  </div>
                </div>
              </div>

              {/* Sub-strip with authentic crane truck preview */}
              <div className="p-3 bg-[#131b2e] border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Truck className="w-4 h-4 text-[#CC9736]" />
                  <span>{isAr ? 'أسطول شحن وتوصيل مخصص' : 'Dedicated transport & crane dispatch'}</span>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#CC9736] hover:underline font-medium text-[11px]"
                >
                  {isAr ? 'معرض الأعمال (41+ صورة)' : 'View Gallery (41+ Assets)'}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Metric / Trust Strip in a Full-Width Row below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-200">
          
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#CC9736] tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">
              {isAr ? 'عزل ساندوتش بانل معتمد' : 'Sandwich Panel Insulation'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'مقاومة الحرارة واللهب' : 'High thermal resistance'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#CC9736] tabular-nums">
              10+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">
              {isAr ? 'خطوط منتجات معيارية' : 'Modular Product Lines'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'مكاتب، سكن، غرف حراسة، دورات مياه' : 'Offices, dorms, guard, ablution'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#CC9736] tabular-nums">
              JED & MAK
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">
              {isAr ? 'تغطية شاملة للغربية' : 'Western Region Coverage'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'جدة ومكة والمناطق المحيطة' : 'Jeddah, Makkah & Surrounding'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#CC9736] tabular-nums">
              24/7
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">
              {isAr ? 'استجابة سريعة عبر الواتساب' : 'Fast WhatsApp Response'}
            </div>
            <div className="text-xs text-slate-400">
              {isAr ? 'استشارات وعروض أسعار فورية' : 'Instant quotation turnaround'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
