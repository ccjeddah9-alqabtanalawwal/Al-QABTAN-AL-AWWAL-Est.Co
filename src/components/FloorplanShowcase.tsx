import React, { useState } from 'react';
import { Maximize2, Users, Droplets, Zap, ArrowRight, ArrowLeft, Ruler } from 'lucide-react';

interface FloorplanShowcaseProps {
  language: 'ar' | 'en';
  onSelectLayoutForQuote: (layoutTitle: string) => void;
}

export const FloorplanShowcase: React.FC<FloorplanShowcaseProps> = ({
  language,
  onSelectLayoutForQuote,
}) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const layouts = [
    {
      id: 'ablution-12',
      titleEn: '12 Toilets + 5 Washbasins (12m × 3.5m)',
      titleAr: 'مجمع 12 دورة مياه + 5 مغاسل وضوء (12م × 3.5م)',
      categoryEn: 'Sanitation Facility',
      categoryAr: 'مجمع مرافق صحية',
      dimensions: '12.0m × 3.5m (42 m²)',
      capacity: isAr ? 'يخدم حتى 150-200 عامل وموظف' : 'Serves 150–200 workers & staff',
      plumbing: isAr ? 'تمديدات PPR مغذية لكل الكبائن وشبكة تصريف PVC مجمعة' : 'Central PPR feed lines & manifold PVC drainage',
      power: isAr ? 'لوحة قواطع رئيسية مع مراوح شفط لكل كابينة' : 'Distribution breaker board & individual exhaust fans',
      image: '/assets/aistudio/IMG-20261022-WA0021_51107135.jpg',
      featuresEn: [
        '12 isolated private cubicles with flush toilets and sprayers',
        '5 stainless/ceramic collective washbasins with mirrors',
        'Herringbone water-resistant flooring with center run-off slope',
        'External roof ladder & elevated water tank mounting frame'
      ],
      featuresAr: [
        '12 كابينة حمام خاصة ومستقلة مع شطافات وكراسي صحية',
        'صف مغاسل وضوء من 5 أحواض مجهزة بمرايا وإضاءة مخصصة',
        'أرضيات مقاومة للرطوبة والانزلاق مع ميول تصريف أرضي',
        'سلم حديدي خارجي مجهز لتركيب خزانات المياه العلوية'
      ]
    },
    {
      id: 'meeting-conference',
      titleEn: 'Executive Conference & Meeting Complex',
      titleAr: 'قاعة اجتماعات وإدارة تنفيذية متكاملة',
      categoryEn: 'Administrative Hub',
      categoryAr: 'مركز قيادة وإدارة الموقع',
      dimensions: '12.0m × 3.5m (42 m²)',
      capacity: isAr ? 'يتسع لـ 14-20 شخصاً حول الطاولة' : 'Accommodates 14–20 attendees',
      plumbing: isAr ? 'جاهزية لإضافة بوفيه تحضيري وحمام خاص' : 'Provisions for pantry counter & en-suite toilet',
      power: isAr ? 'نقاط طاقة أرضية وجدارية لشاشات العرض وأجهزة اللابتوب' : 'Floor & perimeter outlets for laptops & presentation display',
      image: '/assets/aistudio/IMG-20261019-WA0148_59d5aed3.jpg',
      featuresEn: [
        'Full acoustic suspended grid ceiling (60×60) with diffuse daylight panels',
        'Double-layer thermal sandwich panels with decorative wood interior skin',
        'Dual split AC preparation points for balanced cooling in extreme heat',
        'Heavy-duty insulated entry door with master lock cylinder'
      ],
      featuresAr: [
        'سقف مستعار عازل للصوت بالكامل 60×60 مع ألواح إضاءة نهارية',
        'عزل حراري ثنائي الطبقات مع تجليد خشبي داخلي فاخر',
        'تجهيز مزدوج لمكيفات سبليت لضمان تبريد متوازن في الصيف',
        'باب أمني معزول ثقيل مع قفل مركزي ماستر'
      ]
    },
    {
      id: 'twin-office',
      titleEn: 'Twin Engineering Site Office (6m × 3m)',
      titleAr: 'مكتب هندسي وإشرافي ثنائي (6م × 3م)',
      categoryEn: 'Site Supervision',
      categoryAr: 'إشراف هندسي وميداني',
      dimensions: '6.0m × 3.0m (18 m²)',
      capacity: isAr ? '2-4 مهندسين ومشرفين' : '2–4 engineers or supervisors',
      plumbing: isAr ? 'اختياري: حمام داخلي أو بوفيه صغير' : 'Optional internal washroom or pantry',
      power: isAr ? 'تجهيز كامل للمكيف، قاطع أمان، وتمديدات إنارة متكاملة' : 'Pre-wired split AC breaker, safety circuit, and LED lighting',
      image: '/assets/aistudio/IMG-20261019-WA0131_b98a96bd.jpg',
      featuresEn: [
        'Aluminum sliding windows with robust steel security burglar bars',
        'Standard 20ft container footprint for easy flatbed transport',
        'Raised steel foundation legs for quick leveling on gravel/sand sites',
        'Exterior weather-proof bulkhead lighting over entrance door'
      ],
      featuresAr: [
        'نوافذ ألمنيوم سحابة مع شبك حديدي متين للأمان والحماية',
        'مقاس 20 قدم معياري يسهل نقله وتحميله على السطحات في أي وقت',
        'أرجل حديدية مرتفعة تتيح سرعة ضبط الاستواء على الأراضي غير المستوية',
        'إنارة خارجية مقاومة للعوامل الجوية فوق المدخل الرئيسي'
      ]
    },
    {
      id: 'guard-room',
      titleEn: 'Gatehouse & Security Cabin (2.5m × 2.5m)',
      titleAr: 'كابينة حراسة وأمن للبوابات (2.5م × 2.5م)',
      categoryEn: 'Access Control',
      categoryAr: 'تنظيم وضبط الدخول',
      dimensions: '2.5m × 2.5m (6.25 m²)',
      capacity: isAr ? '1-2 من أفراد الأمن والحراسة' : '1–2 security personnel',
      plumbing: isAr ? 'خيارات متاحة مع حمام داخلي مدمج' : 'Available with integrated internal toilet',
      power: isAr ? 'لوحة توزيع مصغرة مع فتحة مكيف شباك أو سبليت' : 'Mini breaker panel with window/split AC cutout',
      image: '/assets/aistudio/IMG-20261019-WA0133_7916d470.jpg',
      featuresEn: [
        'Full 3-sided observation view with tinted heat-reducing glass',
        'Overhanging exterior sun-canopy to deflect desert sunlight and glare',
        'High-density PU sandwich panel keeping guard comfortable 24/7',
        'Compact crane lifting lugs for rapid gate redeployment'
      ],
      featuresAr: [
        'رؤية بانورامية من 3 اتجاهات مع زجاج مظلل عاكس للحرارة',
        'مظلة شمسية خارجية لتقليل وهج الشمس الصحراوية',
        'عزل فوم بولي يوريثان عالي الكثافة يحافظ على برودة الكابينة',
        'عروات رفع بالكرين لنقل الكابينة بسهولة بين بوابات الموقع'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(layouts[0].id);
  const current = layouts.find((l) => l.id === activeTab) || layouts[0];

  return (
    <section id="floorplans" className="py-20 bg-[#FAF7F0] text-[#1A1A1A] border-b border-[#DFD5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-serif font-bold text-[#A67C1E] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Ruler className="w-3.5 h-3.5" />
            <span>{isAr ? 'مخططات هندسية وتقسيمات داخلية' : 'ARCHITECTURAL SCHEMATICS & DRAFTING'}</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E1726] tracking-tight text-balance ${
            isAr ? 'font-amiri text-4xl sm:text-5xl' : 'font-heading-en'
          }`}>
            {isAr ? 'تصاميم معمارية مدروسة للمشاريع' : 'Engineered Modular Floorplans'}
          </h2>
          <p className={`mt-3 text-slate-700 text-base leading-relaxed font-serif ${isAr ? 'font-amiri text-lg' : ''}`}>
            {isAr ? (
              'نراعي في تصاميمنا أدق التفاصيل التشغيلية: الاستفادة القصوى من المساحة، كفاءة التمديدات الصحية والكهربائية، والراحة الحرارية العالية في مختلف مشاريع جدة ومكة المكرمة.'
            ) : (
              'Every cabin layout is engineered with classic drafting precision for operational efficiency, workflow clarity, plumbing reliability, and high thermal comfort in Western Saudi Arabia project environments.'
            )}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#DFD5C3] pb-4">
          {layouts.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 rounded font-serif text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === item.id
                  ? 'bg-[#0E1726] text-[#D4AF37] shadow-sm border border-[#C59B27]/40'
                  : 'bg-[#F0ECE1] text-slate-700 hover:text-[#0E1726] hover:bg-[#E7E1D2]'
              }`}
            >
              {isAr ? item.titleAr : item.titleEn}
            </button>
          ))}
        </div>

        {/* Active Layout Card */}
        <div className="bg-white border-2 border-[#DFD5C3] rounded-lg overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Media Column (7 cols) */}
          <div className="lg:col-span-7 relative bg-[#090F1A] flex items-center justify-center p-4 sm:p-8 min-h-[360px] sm:min-h-[440px] border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#DFD5C3]">
            <img
              src={current.image}
              alt={isAr ? current.titleAr : current.titleEn}
              className="max-h-[460px] w-auto max-w-full object-contain rounded shadow-lg border border-[#C59B27]/30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#0E1726]/90 backdrop-blur-xs text-[#D4AF37] text-xs px-3 py-1.5 rounded font-mono font-bold border border-[#C59B27]/40">
              {current.dimensions}
            </div>
            <div className="absolute bottom-4 right-4 bg-[#C59B27] text-[#0E1726] text-xs font-serif font-bold px-3 py-1 rounded shadow-sm">
              {isAr ? current.categoryAr : current.categoryEn}
            </div>
          </div>

          {/* Right Details Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#FAF7F0]">
            
            <div className="space-y-4">
              <div className="text-xs font-serif font-bold text-[#A67C1E] uppercase tracking-wider">
                {isAr ? 'مواصفات التخطيط والتنفيذ' : 'Layout & Engineering Specs'}
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold text-[#0E1726] ${isAr ? 'font-amiri text-3xl' : 'font-heading-en'}`}>
                {isAr ? current.titleAr : current.titleEn}
              </h3>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-serif">
                <div className="p-3 bg-white border border-[#DFD5C3] rounded">
                  <div className="flex items-center gap-1.5 text-[#0E1726] font-bold">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{isAr ? 'المقاس الإجمالي' : 'Dimensions'}</span>
                  </div>
                  <div className="mt-1 font-mono text-slate-800 font-bold">{current.dimensions}</div>
                </div>

                <div className="p-3 bg-white border border-[#DFD5C3] rounded">
                  <div className="flex items-center gap-1.5 text-[#0E1726] font-bold">
                    <Users className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{isAr ? 'السعة التشغيلية' : 'Capacity'}</span>
                  </div>
                  <div className="mt-1 text-slate-800">{current.capacity}</div>
                </div>

                <div className="p-3 bg-white border border-[#DFD5C3] rounded">
                  <div className="flex items-center gap-1.5 text-[#0E1726] font-bold">
                    <Droplets className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{isAr ? 'السباكة والتصريف' : 'Sanitation'}</span>
                  </div>
                  <div className="mt-1 text-slate-800">{current.plumbing}</div>
                </div>

                <div className="p-3 bg-white border border-[#DFD5C3] rounded">
                  <div className="flex items-center gap-1.5 text-[#0E1726] font-bold">
                    <Zap className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{isAr ? 'الكهرباء والتكييف' : 'Electrical & AC'}</span>
                  </div>
                  <div className="mt-1 text-slate-800">{current.power}</div>
                </div>
              </div>

              {/* Features List */}
              <div className="pt-2">
                <div className="text-xs font-serif font-bold text-[#0E1726] mb-2">
                  {isAr ? 'المزايا المعمارية لهذا المخطط:' : 'Architectural Highlights:'}
                </div>
                <ul className="space-y-2 text-xs text-slate-700 font-serif">
                  {(isAr ? current.featuresAr : current.featuresEn).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-[#DFD5C3]">
              <button
                onClick={() => onSelectLayoutForQuote(isAr ? current.titleAr : current.titleEn)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:from-[#E5C358] hover:to-[#C59B27] text-[#0E1726] font-serif font-bold text-xs sm:text-sm rounded shadow-sm transition-all border border-[#F3DE9C]/40"
              >
                <span>{isAr ? 'اطلب عرض سعر لمخطط مشابه' : 'Request Quote for Similar Layout'}</span>
                <Arrow className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
