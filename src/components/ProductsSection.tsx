import React, { useState } from 'react';
import { PRODUCTS, ProductItem } from '../data/content';
import { ArrowLeft, ArrowRight, Check, Info } from 'lucide-react';

interface ProductsSectionProps {
  language: 'ar' | 'en';
  onSelectProductForQuote: (productTitle: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  language,
  onSelectProductForQuote,
}) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', labelAr: 'جميع المنتجات (10)', labelEn: 'All Products (10)' },
    { id: 'office-admin', labelAr: 'المكاتب والإدارة', labelEn: 'Offices & Admin' },
    { id: 'accommodation', labelAr: 'السكن والإيواء', labelEn: 'Accommodation' },
    { id: 'security-storage', labelAr: 'الأمن والتخزين', labelEn: 'Security & Storage' },
    { id: 'sanitation', labelAr: 'المرافق الصحية', labelEn: 'Sanitation' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'office-admin') return p.id === 'site-office' || p.id === 'meeting-rooms' || p.id === 'custom-buildings';
    if (selectedFilter === 'accommodation') return p.id === 'worker-accommodation' || p.id === 'residential-cabins';
    if (selectedFilter === 'security-storage') return p.id === 'security-cabins' || p.id === 'storage-containers';
    if (selectedFilter === 'sanitation') return p.id === 'ablution-units' || p.id === 'accessories-installation';
    return true;
  });

  return (
    <section id="products" className="py-20 bg-[#F5F1E8] text-[#1A1A1A] border-b border-[#DFD5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-serif font-bold text-[#A67C1E] uppercase tracking-widest mb-2">
            {isAr ? 'القسم 2 • المنتجات والخدمات' : 'SECTION 2 · PRODUCTS & SERVICES'}
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E1726] tracking-tight text-balance ${
            isAr ? 'font-amiri text-4xl sm:text-5xl' : 'font-heading-en'
          }`}>
            {isAr ? 'مجموعة الكرفانات والحاويات لدينا' : 'Our Cabin Container Range'}
          </h2>
          <p className={`mt-3 text-slate-700 text-base leading-relaxed font-serif ${isAr ? 'font-amiri text-lg' : ''}`}>
            {isAr ? (
              'نقدم مجموعة متنوعة من الكرفانات والوحدات الجاهزة للاستخدامات التجارية والإنشائية والصناعية، وفقاً لنوع المنتج ومتطلبات المشروع في جدة ومكة المكرمة والمناطق المحيطة.'
            ) : (
              'We offer a comprehensive range of portable cabins and modular units for commercial, construction, and industrial applications. Specifications and layouts are tailored to your project requirements.'
            )}
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-sm">
          <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF7F0] border border-[#DFD5C3] rounded shadow-xs">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded font-serif text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  selectedFilter === opt.id
                    ? 'bg-[#0E1726] text-[#D4AF37] shadow-sm'
                    : 'text-slate-700 hover:text-[#0E1726] hover:bg-white'
                }`}
              >
                {isAr ? opt.labelAr : opt.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-[#DFD5C3] overflow-hidden shadow-sm hover:shadow-md hover:border-[#C59B27] transition-all flex flex-col group"
            >
              {/* Product Media with Measured Scrim and Fallback */}
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-900 border-b border-[#DFD5C3]">
                <img
                  src={product.image}
                  alt={isAr ? product.titleAr : product.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Numbered seal */}
                <div className="absolute top-3 left-3 bg-[#0E1726]/90 text-[#D4AF37] text-[11px] font-mono px-2.5 py-1 rounded backdrop-blur-xs font-bold border border-[#C59B27]/30">
                  {product.number}
                </div>

                <div className={`absolute top-3 right-3 bg-[#C59B27] text-[#0E1726] px-2.5 py-0.5 rounded shadow-xs font-bold ${isAr ? 'font-amiri text-xs' : 'font-serif text-[11px]'}`}>
                  {isAr ? product.badgeAr : product.badgeEn}
                </div>

                {/* Default Dimensions Pill */}
                <div className="absolute bottom-2 inset-x-2 bg-[#0E1726]/85 backdrop-blur-xs text-white text-[11px] px-3 py-1.5 rounded flex items-center justify-between border border-[#C59B27]/20">
                  <span className={`text-slate-300 ${isAr ? 'font-amiri text-xs font-medium' : 'font-serif'}`}>{isAr ? 'المقاس المعتاد:' : 'Standard Size:'}</span>
                  <span className="font-mono font-bold text-[#D4AF37]" dir="ltr">{product.dimensionsDefault}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className={`text-lg font-bold text-[#0E1726] tracking-tight ${isAr ? 'font-amiri text-2xl font-bold' : 'font-heading-en'}`}>
                    {isAr ? product.titleAr : product.titleEn}
                  </h3>
                  <p className={`mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif ${isAr ? 'font-amiri text-base' : ''}`}>
                    {isAr ? product.descAr : product.descEn}
                  </p>
                </div>

                {/* Specs List */}
                <div className={`space-y-1.5 pt-3 border-t border-[#DFD5C3]/60 text-xs text-slate-800 ${isAr ? 'font-amiri text-sm' : 'font-serif'}`}>
                  {(isAr ? product.specsAr : product.specsEn).map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                      <span className="leading-tight">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#DFD5C3]/60">
                  <button
                    onClick={() => onSelectProductForQuote(isAr ? product.titleAr : product.titleEn)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FAF7F0] hover:bg-[#0E1726] text-[#0E1726] hover:text-[#D4AF37] font-bold rounded border border-[#DFD5C3] hover:border-[#C59B27] transition-all ${isAr ? 'font-amiri text-base' : 'font-serif text-xs'}`}
                  >
                    <span>{isAr ? 'طلب عرض سعر لهذه الوحدة' : 'Request Quote for this Unit'}</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Confirmation Notice */}
        <div className={`mt-12 p-5 rounded-lg bg-[#FFF9EE] border-2 border-[#D5C7B0] flex items-start gap-4 text-amber-950 ${isAr ? 'font-amiri text-base' : 'font-serif text-xs sm:text-sm'}`}>
          <Info className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-[#0E1726]">
              {isAr ? 'ملاحظة هامة للمشاريع: ' : 'Important Notice for Projects: '}
            </span>
            {isAr ? (
              'يتم تأكيد المواصفات والمقاسات والأسعار والتوافر ومواعيد التسليم والتركيب لكل طلب عرض سعر بشكل منفصل وفقاً لمتطلبات الموقع وطبيعة المشروع.'
            ) : (
              'Product specifications, dimensions, prices, delivery schedules, crane installation, and availability are confirmed individually for each quotation based on specific project site conditions.'
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
