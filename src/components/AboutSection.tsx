import React from 'react';
import { COMPANY_PRINCIPLES } from '../data/content';
import { Target, Compass, Award, UserCheck, Shield, Truck, MapPin } from 'lucide-react';
import { CEO_NAME } from '../utils/quote';

interface AboutSectionProps {
  language: 'ar' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#CC9736_1px,transparent_1px),linear-gradient(to_bottom,#CC9736_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#CC9736] uppercase tracking-wider mb-2">
            {isAr ? 'القسم 3 • من نحن' : 'SECTION 3 · ABOUT US'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            {isAr ? 'نبذة عن شركة القبطان الأول' : 'About Al Qabtan Al Awwal Est. Co.'}
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            {isAr ? (
              'تركز شركة القبطان الأول على حلول الكرفانات والحاويات والمباني الجاهزة للعملاء في جدة ومكة المكرمة والمناطق المحيطة بالمملكة العربية السعودية، بهدف مساعدة عملائنا في اختيار الحلول المناسبة لاحتياجاتهم التشغيلية ومساحاتهم وميزانياتهم.'
            ) : (
              'Al Qabtan Al Awwal Est. Co. specializes in high-quality portable cabin containers and modular buildings across Jeddah, Makkah, and surrounding regions. Our objective is to guide clients toward durable, cost-effective cabin solutions tailored to their operational needs, site limits, and timelines.'
            )}
          </p>
        </div>

        {/* 2-Column Story & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Mission & Vision Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Mission */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#CC9736]/15 flex items-center justify-center text-[#CC9736]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isAr ? 'رسالتنا | Our Mission' : 'Our Mission'}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isAr ? (
                  'تقديم حلول عملية ومرنة للكرفانات والحاويات بما يلبي احتياجات المشاريع الإنشائية والتجارية والصناعية بكفاءة عالية واشتراطات متينة.'
                ) : (
                  'To provide practical and adaptable cabin container solutions that support construction, commercial, and industrial projects with lasting structural integrity.'
                )}
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#CC9736]/15 flex items-center justify-center text-[#CC9736]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isAr ? 'رؤيتنا | Our Vision' : 'Our Vision'}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isAr ? (
                  'بناء علاقات طويلة الأمد مع عملائنا من خلال التواصل المهني وتوفير الخيارات المناسبة وتقديم خدمة موثوقة في كافة مراحل التنفيذ والتسليم.'
                ) : (
                  'To build long-term customer relationships through professional communication, suitable product options, and dependable service throughout the Western Region.'
                )}
              </p>
            </div>

            {/* Leadership Spotlight (CEO Naseer Ahmad) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#19233E] border border-[#CC9736]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#CC9736] text-[#19233E] flex items-center justify-center font-bold text-lg shadow-sm">
                  NA
                </div>
                <div>
                  <div className="text-xs text-[#CC9736] uppercase font-semibold">
                    {isAr ? 'إدارة الشركة القيادية' : 'Company Leadership'}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {CEO_NAME}
                  </div>
                  <div className="text-xs text-slate-400">
                    {isAr ? 'الرئيس التنفيذي / Chief Executive Officer' : 'Chief Executive Officer (CEO)'}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-300 border-t sm:border-t-0 sm:border-l rtl:sm:border-r rtl:sm:border-l-0 border-slate-700 pt-3 sm:pt-0 sm:px-4">
                <div className="font-semibold text-white">{isAr ? 'مؤسسة القبطان الأول' : 'Al Qabtan Al Awwal Est. Co.'}</div>
                <div className="text-slate-400 font-mono">+966 50 250 0899</div>
              </div>
            </div>

          </div>

          {/* Logistics & Fleet Yard Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800 h-full flex flex-col">
              
              <div className="aspect-[4/3] relative overflow-hidden bg-black">
                <img
                  src="/assets/aistudio/IMG-20261019-WA0143_4b6d735c.jpg"
                  alt="Al Qabtan Heavy Truck Transport Fleet"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 inset-x-3 text-white text-xs">
                  <div className="font-bold text-sm text-[#CC9736]">
                    {isAr ? 'أسطول النقل الثقيل والتريلات' : 'Dedicated Long-Haul Fleet'}
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    {isAr ? 'نقل فوري من الورشة إلى مواقع المشاريع في جدة ومكة' : 'Dispatch directly from yard to construction projects'}
                  </div>
                </div>
              </div>

              {/* Sub-features */}
              <div className="p-6 bg-slate-850 space-y-3 text-xs text-slate-300 flex-1">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#CC9736] shrink-0" />
                  <span>{isAr ? 'سطحات مجهزة لتحميل الكرفانات حتى 12 متراً' : 'Flatbeds accommodating modular units up to 12m length'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#CC9736] shrink-0" />
                  <span>{isAr ? 'تغطية سريعة لجدة، مكة، رابغ، والمناطق الصناعية' : 'Prompt coverage for Jeddah, Makkah, Rabigh & industrial zones'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#CC9736] shrink-0" />
                  <span>{isAr ? 'معايير سلامة وتثبيت دقيقة أثناء النقل والإنزال' : 'Rigid tie-down & crane safety standards during transit'}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5 Service Principles (Numbered Editorial Cards) */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {isAr ? 'مبادئ خدمتنا' : 'Our Service Principles'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              {isAr ? 'الركائز الخمس التي نلتزم بها مع كل عميل ومشروع' : 'The five foundational standards we commit to for every client'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="p-6 rounded-xl bg-slate-800/70 border border-slate-700/80 hover:border-[#CC9736]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-bold text-[#CC9736] mb-3">
                    {principle.num}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {isAr ? principle.titleAr : principle.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
