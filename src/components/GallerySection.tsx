import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/content';
import { Play, Eye, X, ArrowLeft, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { WHATSAPP_RAW_NUMBER } from '../utils/quote';

interface GallerySectionProps {
  language: 'ar' | 'en';
  onSelectForQuote: (title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  language,
  onSelectForQuote,
}) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeType, setActiveType] = useState<'all' | 'image' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelAr: 'الكل (جميع الأعمال)', labelEn: 'All Projects' },
    { id: 'office', labelAr: 'كرفانات المكاتب', labelEn: 'Site Offices' },
    { id: 'accommodation', labelAr: 'كرفانات السكن', labelEn: 'Accommodation' },
    { id: 'security', labelAr: 'غرف الحراسة', labelEn: 'Security Cabins' },
    { id: 'storage', labelAr: 'حاويات التخزين', labelEn: 'Storage Containers' },
    { id: 'ablution', labelAr: 'دورات المياه والوضوء', labelEn: 'Ablution Units' },
    { id: 'interior', labelAr: 'التشطيبات الداخلية', labelEn: 'Interior Finishing' },
    { id: 'delivery', labelAr: 'التركيب والتسليم', labelEn: 'Installation & Delivery' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesType = activeType === 'all' || item.type === activeType;
    return matchesCategory && matchesType;
  });

  return (
    <section id="gallery" className="py-20 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-[#CC9736] uppercase tracking-wider mb-2">
            {isAr ? 'القسم 4 • المشاريع ومعرض الصور' : 'SECTION 4 · PROJECTS & GALLERY'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#19233E] tracking-tight text-balance">
            {isAr ? 'معرض حلول الكرفانات لدينا' : 'Our Cabin Solutions Gallery'}
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            {isAr ? (
              'اكتشفوا مختلف تصاميم الكرفانات والحاويات والتقسيمات الداخلية وخيارات التشطيب المنفذة لمختلف المشاريع في جدة ومكة والمناطق المحيطة.'
            ) : (
              'Explore real completed cabin styles, container configurations, interior fit-outs, and delivery deployments executed for construction, industrial, and commercial projects.'
            )}
          </p>
        </div>

        {/* Gallery Authenticity Note as strictly requested by user */}
        <div className="mb-8 p-4 rounded-xl bg-slate-200/80 border border-slate-300/80 flex items-start gap-3 text-xs text-slate-700">
          <AlertCircle className="w-4 h-4 text-[#CC9736] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-slate-900">
              {isAr ? 'ملاحظة المعرض: ' : 'Gallery Verification: '}
            </span>
            {isAr ? (
              'جميع الصور والفيديوهات المعروضة هي أعمال وصور حقيقية من ورش ومشاريع الشركة، مع مراعاة المصداقية والشفافية الكاملة مع عملائنا.'
            ) : (
              'All photographs and video clips displayed in this showcase represent genuine company fabrications and site deployments in Saudi Arabia.'
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 w-full md:w-auto">
            <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md font-medium text-xs transition-colors whitespace-nowrap shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-[#19233E] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {isAr ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Media Type Toggle (All / Photos / Videos) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shrink-0">
            <button
              onClick={() => setActiveType('all')}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                activeType === 'all' ? 'bg-[#CC9736] text-[#19233E]' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'الكل' : 'All'}
            </button>
            <button
              onClick={() => setActiveType('image')}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                activeType === 'image' ? 'bg-[#CC9736] text-[#19233E]' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'صور حقيقية' : 'Photos'}
            </button>
            <button
              onClick={() => setActiveType('video')}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                activeType === 'video' ? 'bg-[#CC9736] text-[#19233E]' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'فيديوهات ميدانية' : 'Videos'}
            </button>
          </div>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer flex flex-col"
            >
              {/* Media Thumbnail */}
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.src}
                      poster={item.poster}
                      muted
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#CC9736] text-[#19233E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-2.5 left-2.5 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase">
                      Video
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={isAr ? item.titleAr : item.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#19233E] flex items-center justify-center shadow-md">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-2 inset-x-2.5 text-white text-[11px] font-semibold truncate z-10">
                  {isAr ? item.titleAr : item.titleEn}
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-2">
                  {isAr ? item.captionAr : item.captionEn}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#CC9736] font-semibold">
                  <span>{isAr ? 'عرض التفاصيل' : 'View Details'}</span>
                  <Arrow className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interested in a Similar Cabin banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#19233E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isAr ? 'هل ترغبون في كرفان أو حاوية مشابهة؟' : 'Interested in a Similar Cabin Solution?'}
            </h3>
            <p className="mt-1 text-slate-300 text-xs sm:text-sm max-w-xl">
              {isAr ? (
                'تواصلوا معنا مع تحديد نوع الكرفان والمقاسات والكمية والموقع لمناقشة الحل المناسب وتقديم عرض سعر دقيق.'
              ) : (
                'Contact us with your preferred cabin type, dimensions, quantity, and project location in Jeddah or Makkah to discuss immediate availability.'
              )}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectForQuote(isAr ? 'كرفان مخصص من المعرض' : 'Custom Cabin from Gallery')}
              className="px-5 py-3 rounded-lg bg-[#CC9736] hover:bg-[#b8822a] text-[#19233E] font-bold text-xs sm:text-sm transition-colors whitespace-nowrap"
            >
              {isAr ? 'طلب عرض سعر للكرفان' : 'Request Quotation'}
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                isAr
                  ? 'السلام عليكم شركة القبطان الأول، اطلعت على معرض مشاريعكم وأرغب في الاستفسار عن كرفان مشابه.'
                  : 'Hello Al Qabtan Al Awwal, I saw your project gallery and would like to inquire about a similar cabin unit.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox / Video Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 truncate">
                <span className="text-[#CC9736] font-mono text-xs font-bold uppercase">
                  {selectedMedia.type === 'video' ? 'Video Project' : 'Project Photo'}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-sm font-bold text-white truncate">
                  {isAr ? selectedMedia.titleAr : selectedMedia.titleEn}
                </span>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[300px] max-h-[60vh]">
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full max-h-[60vh] object-contain"
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={isAr ? selectedMedia.titleAr : selectedMedia.titleEn}
                  className="w-full h-full max-h-[60vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div className="text-slate-300 max-w-xl">
                <div className="font-semibold text-white mb-0.5">
                  {isAr ? selectedMedia.titleAr : selectedMedia.titleEn}
                </div>
                <div className="text-slate-400">
                  {isAr ? selectedMedia.captionAr : selectedMedia.captionEn}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const title = isAr ? selectedMedia.titleAr : selectedMedia.titleEn;
                    setSelectedMedia(null);
                    onSelectForQuote(title);
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-[#CC9736] hover:bg-[#b8822a] text-[#19233E] font-bold rounded-lg transition-colors whitespace-nowrap"
                >
                  {isAr ? 'طلب عرض سعر لهذه الوحدة' : 'Inquire for Quote'}
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                    isAr
                      ? `السلام عليكم، أود الاستفسار عن تفاصيل وأسعار المشروع: ${selectedMedia.titleAr}`
                      : `Hello Al Qabtan Al Awwal, I would like to inquire about this project: ${selectedMedia.titleEn}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
