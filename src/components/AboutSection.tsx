import React from 'react';
import { COMPANY_PRINCIPLES } from '../data/content';
import { Target, Compass, Shield, Truck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { CEO_NAME } from '../utils/quote';

interface AboutSectionProps {
  language: 'ar' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <section id="about" className="py-20 bg-[#0E1726] text-white relative overflow-hidden border-b-2 border-[#C59B27]/30">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-serif font-bold text-[#D4AF37] uppercase tracking-widest mb-2">
            {isAr ? 'القسم 3 • من نحن' : 'SECTION 3 · ABOUT US'}
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance ${
            isAr ? 'font-amiri text-4xl sm:text-5xl' : 'font-heading-en'
          }`}>
            {isAr ? 'نبذة عن شركة القبطان الأول' : 'About Al Qabtan Al Awwal Est. Co.'}
          </h2>
          <p className={`mt-4 text-slate-300 text-base leading-relaxed font-serif ${isAr ? 'font-amiri text-lg' : ''}`}>
            {isAr ? (
              'تركز شركة القبطان الأول على حلول الكرفانات والحاويات والمباني الجاهزة للعملاء في جدة ومكة المكرمة والمناطق المحيطة بالمملكة العربية السعودية، بهدف مساعدة عملائنا في اختيار الحلول المناسبة لاحتياجاتهم التشغيلية ومساحاتهم وميزانياتهم.'
            ) : (
              'Al Qabtan Al Awwal Est. Co. focuses on portable cabin containers and modular building solutions for customers in Jeddah, Makkah, and surrounding areas of Saudi Arabia. Our objective is to guide customers toward practical, dependable modular structures matching project scopes and budgets.'
            )}
          </p>
        </div>

        {/* 2-Column Story & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Mission & Vision Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Mission */}
            <div className="p-6 sm:p-7 rounded bg-[#132034] border border-[#2A3B54] hover:border-[#C59B27]/60 transition-colors shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#C59B27]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold text-white font-serif ${isAr ? 'font-amiri text-2xl' : ''}`}>
                  {isAr ? 'رسالتنا | Our Mission' : 'Our Mission'}
                </h3>
              </div>
              <p className={`text-sm text-slate-300 leading-relaxed font-serif ${isAr ? 'font-amiri text-base' : ''}`}>
                {isAr ? (
                  'تقديم حلول عملية ومرنة للكرفانات والحاويات بما يلبي احتياجات المشاريع الإنشائية والتجارية والصناعية بكفاءة عالية واشتراطات متينة.'
                ) : (
                  'To provide practical and adaptable cabin container solutions that support construction, commercial, and industrial projects with lasting structural integrity.'
                )}
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 sm:p-7 rounded bg-[#132034] border border-[#2A3B54] hover:border-[#C59B27]/60 transition-colors shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#C59B27]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold text-white font-serif ${isAr ? 'font-amiri text-2xl' : ''}`}>
                  {isAr ? 'رؤيتنا | Our Vision' : 'Our Vision'}
                </h3>
              </div>
              <p className={`text-sm text-slate-300 leading-relaxed font-serif ${isAr ? 'font-amiri text-base' : ''}`}>
                {isAr ? (
                  'بناء علاقات طويلة الأمد مع عملائنا من خلال التواصل المهني وتوفير الخيارات المناسبة وتقديم خدمة موثوقة في كافة مراحل التنفيذ والتسليم.'
                ) : (
                  'To build long-term customer relationships through professional communication, suitable product options, and dependable service throughout the Western Region.'
                )}
              </p>
            </div>

            {/* Executive Leadership Seal (CEO Naseer Ahmad) */}
            <div className="p-6 rounded bg-[#0A111C] border-2 border-[#C59B27]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#C59B27] to-[#8C6915] p-[2px] shadow-md flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-[#0E1726] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-base">
                    NA
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#D4AF37] font-serif tracking-widest uppercase">
                    {isAr ? 'إدارة الشركة القيادية' : 'Executive Leadership'}
                  </div>
                  <div className={`text-lg sm:text-xl font-bold text-white font-serif ${isAr ? 'font-amiri text-2xl' : 'font-cinzel'}`}>
                    {CEO_NAME}
                  </div>
                  <div className="text-xs text-slate-400 font-serif">
                    {isAr ? 'الرئيس التنفيذي / Chief Executive Officer' : 'Chief Executive Officer (CEO)'}
                  </div>
                </div>
              </div>

              <div className="text-xs font-serif text-slate-300 border-t sm:border-t-0 sm:border-l rtl:sm:border-r rtl:sm:border-l-0 border-[#C59B27]/30 pt-3 sm:pt-0 sm:px-4">
                <div className="font-bold text-[#D4AF37]">{isAr ? 'مؤسسة القبطان الأول' : 'Al Qabtan Al Awwal Est. Co.'}</div>
                <div className="text-slate-400 font-mono mt-0.5" dir="ltr">+966 50 250 0899</div>
              </div>
            </div>

          </div>

          {/* Logistics & Fleet Yard Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded overflow-hidden border-2 border-[#C59B27]/40 shadow-xl bg-[#090F1A] h-full flex flex-col p-1.5">
              
              <div className="aspect-[4/3] relative overflow-hidden bg-black rounded">
                <img
                  src="/assets/aistudio/IMG-20261019-WA0143_4b6d735c.jpg"
                  alt="Al Qabtan Heavy Truck Transport Fleet"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <div className="absolute bottom-3 inset-x-3 text-white text-xs font-serif">
                  <div className="font-bold text-sm text-[#D4AF37]">
                    {isAr ? 'أسطول النقل الثقيل والتريلات' : 'Dedicated Long-Haul Fleet'}
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    {isAr ? 'نقل فوري من الورشة إلى مواقع المشاريع في جدة ومكة' : 'Dispatch directly from yard to construction projects'}
                  </div>
                </div>
              </div>

              {/* Sub-features */}
              <div className="p-5 space-y-3 text-xs text-slate-300 flex-1 font-serif">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isAr ? 'سطحات مجهزة لتحميل الكرفانات حتى 12 متراً' : 'Flatbeds accommodating modular units up to 12m length'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isAr ? 'تغطية سريعة لجدة، مكة، رابغ، والمناطق الصناعية' : 'Prompt coverage for Jeddah, Makkah, Rabigh & industrial zones'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isAr ? 'معايير سلامة وتثبيت دقيقة أثناء النقل والإنزال' : 'Rigid tie-down & crane safety standards during transit'}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5 Service Principles (Numbered Editorial Cards in Classic Style) */}
        <div>
          <div className="mb-6">
            <h3 className={`text-xl sm:text-2xl font-bold text-white tracking-tight ${isAr ? 'font-amiri text-3xl' : 'font-heading-en'}`}>
              {isAr ? 'مبادئ خدمتنا' : 'Our Service Principles'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 font-serif">
              {isAr ? 'الركائز الخمس التي نلتزم بها مع كل عميل ومشروع' : 'The five foundational standards we commit to for every client'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-serif">
            {COMPANY_PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="p-6 rounded bg-[#132034] border border-[#2A3B54] hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="text-3xl font-serif font-bold text-[#D4AF37] mb-2 font-mono">
                    {principle.num}
                  </div>
                  <h4 className={`text-base font-bold text-white mb-2 ${isAr ? 'font-amiri text-xl' : ''}`}>
                    {isAr ? principle.titleAr : principle.titleEn}
                  </h4>
                  <p className={`text-xs sm:text-sm text-slate-300 leading-relaxed ${isAr ? 'font-amiri text-base' : ''}`}>
                    {isAr ? principle.descAr : principle.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
