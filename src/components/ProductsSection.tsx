import React, { useState } from 'react';
import { PRODUCTS, ProductItem } from '../data/content';
import { ArrowLeft, ArrowRight, Check, SlidersHorizontal, Info } from 'lucide-react';

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
    <section id="products" className="py-20 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Unboxed text metadata */}
          <div className="text-xs font-semibold text-[#CC9736] uppercase tracking-wider mb-2">
            {isAr ? 'القسم 2 • المنتجات والخدمات' : 'SECTION 2 · PRODUCTS & SERVICES'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#19233E] tracking-tight text-balance">
            {isAr ? 'مجموعة الكرفانات والحاويات لدينا' : 'Our Cabin Container Range'}
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            {isAr ? (
              'نقدم مجموعة متنوعة من الكرفانات والوحدات الجاهزة للاستخدامات التجارية والإنشائية والصناعية، وفقاً لنوع المنتج ومتطلبات المشروع في جدة ومكة المكرمة والمناطق المحيطة.'
            ) : (
              'We offer a comprehensive range of portable cabins and modular units for commercial, construction, and industrial applications. Specifications and layouts are tailored to your project requirements.'
            )}
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-sm">
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shadow-xs">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded-md font-medium text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === opt.id
                    ? 'bg-[#19233E] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {isAr ? opt.labelAr : opt.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Bento style with asymmetric accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Product Media with Measured Scrim and Fallback */}
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-200">
                <img
                  src={product.image}
                  alt={isAr ? product.titleAr : product.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to solid brand placeholder with SVG
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('bg-[#19233E]');
                    }
                  }}
                />
                
                {/* Clean unboxed tag in corner */}
                <div className="absolute top-3 left-3 bg-[#19233E]/90 text-white text-[11px] font-mono px-2.5 py-1 rounded backdrop-blur-xs font-semibold">
                  {product.number}
                </div>

                <div className="absolute top-3 right-3 bg-[#CC9736] text-[#19233E] text-[11px] font-semibold px-2 py-0.5 rounded shadow-xs">
                  {isAr ? product.badgeAr : product.badgeEn}
                </div>

                {/* Default Dimensions Pill */}
                <div className="absolute bottom-2 inset-x-2 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded flex items-center justify-between font-mono">
                  <span className="text-slate-300">{isAr ? 'المقاس المعتاد:' : 'Standard Size:'}</span>
                  <span className="font-semibold text-[#CC9736]">{product.dimensionsDefault}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#19233E] tracking-tight">
                    {isAr ? product.titleAr : product.titleEn}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isAr ? product.descAr : product.descEn}
                  </p>
                </div>

                {/* Specs List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {(isAr ? product.specsAr : product.specsEn).map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#CC9736] shrink-0 mt-0.5" />
                      <span className="leading-tight">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectProductForQuote(isAr ? product.titleAr : product.titleEn)}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3.5 bg-slate-50 hover:bg-[#CC9736] text-[#19233E] hover:text-[#19233E] text-xs font-semibold rounded-lg border border-slate-200 hover:border-[#CC9736] transition-colors"
                  >
                    <span>{isAr ? 'طلب عرض سعر لهذه الوحدة' : 'Request Quote for this Unit'}</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Confirmation Notice (as stated in user brief) */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3.5 text-amber-900 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-[#CC9736] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">
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
