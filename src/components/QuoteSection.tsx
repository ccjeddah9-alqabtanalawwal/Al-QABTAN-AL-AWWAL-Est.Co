import React, { useState, useEffect } from 'react';
import {
  QuoteRequest,
  validateQuoteRequest,
  generateWhatsAppLink,
  COMPANY_PHONE,
  WHATSAPP_RAW_NUMBER,
  CEO_NAME,
  estimateFloorArea,
} from '../utils/quote';
import { PRODUCTS } from '../data/content';
import {
  MessageSquare,
  Phone,
  CheckCircle2,
  AlertCircle,
  Copy,
  Layers,
  MapPin,
  Award,
} from 'lucide-react';

interface QuoteSectionProps {
  language: 'ar' | 'en';
  prefilledCabinType?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  language,
  prefilledCabinType,
}) => {
  const isAr = language === 'ar';

  const [cabinType, setCabinType] = useState<string>('Site Office Containers');
  const [dimensions, setDimensions] = useState<string>('6m × 3m');
  const [customDimensions, setCustomDimensions] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [location, setLocation] = useState<string>('Jeddah');
  const [customLocation, setCustomLocation] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Sandwich panel insulation',
    'Electrical wiring & LED',
    'AC preparation',
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (prefilledCabinType) {
      setCabinType(prefilledCabinType);
      const element = document.getElementById('quote-builder');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [prefilledCabinType]);

  const featureOptions = [
    {
      id: 'insulation',
      en: 'Sandwich panel insulation',
      ar: 'عزل ساندوتش بانل حراري وصوتي',
    },
    {
      id: 'ac',
      en: 'AC preparation & brackets',
      ar: 'تجهيز فتحات وحوامل المكيفات وتمديدات الطاقة',
    },
    {
      id: 'electrical',
      en: 'Electrical distribution & LED lights',
      ar: 'لوحة قواطع وتمديدات كهربائية وإنارة LED',
    },
    {
      id: 'plumbing',
      en: 'Integrated plumbing & sanitary unit',
      ar: 'تمديدات سباكة وحمام / دورة مياه داخلية',
    },
    {
      id: 'security_bars',
      en: 'Security window bars & steel locks',
      ar: 'شبك حديد حماية للنوافذ وأقفال أمان',
    },
    {
      id: 'flooring',
      en: 'Commercial vinyl or parquet finish',
      ar: 'أرضيات فينيل تجارية أو باركيه مقاوم للرطوبة',
    },
    {
      id: 'crane_offload',
      en: 'Crane offloading & site positioning',
      ar: 'خدمة التنزيل بالكرين والتثبيت في الموقع',
    },
  ];

  const handleToggleFeature = (featName: string) => {
    if (selectedFeatures.includes(featName)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featName));
    } else {
      setSelectedFeatures([...selectedFeatures, featName]);
    }
  };

  const getEffectiveLocation = () => {
    if (location === 'Other' && customLocation) {
      return customLocation;
    }
    return location;
  };

  const currentQuoteRequest: QuoteRequest = {
    cabinType,
    dimensions,
    customDimensions,
    quantity,
    location: getEffectiveLocation(),
    deliveryDate,
    features: selectedFeatures,
    clientName,
    clientPhone,
    notes,
    language,
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteRequest(currentQuoteRequest);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    const url = generateWhatsAppLink(currentQuoteRequest);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = isAr
      ? `طلب عرض سعر - شركة القبطان الأول\nالنوع: ${cabinType}\nالمقاسات: ${
          dimensions === 'Custom' ? customDimensions : dimensions
        }\nالكمية: ${quantity}\nالموقع: ${getEffectiveLocation()}\nالموعد المطلوب: ${
          deliveryDate || 'في أقرب وقت'
        }\nالتجهيزات: ${selectedFeatures.join('، ')}\nالهاتف: +966 50 250 0899`
      : `Quotation Request - Al Qabtan Al Awwal Est. Co.\nType: ${cabinType}\nDimensions: ${
          dimensions === 'Custom' ? customDimensions : dimensions
        }\nQuantity: ${quantity}\nLocation: ${getEffectiveLocation()}\nTarget Date: ${
          deliveryDate || 'As soon as possible'
        }\nFeatures: ${selectedFeatures.join(', ')}\nPhone: +966 50 250 0899`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const floorArea = estimateFloorArea(
    dimensions === 'Custom' ? customDimensions : dimensions
  );

  return (
    <section id="contact" className="py-20 bg-[#FAF7F0] text-[#1A1A1A] border-b border-[#DFD5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-serif font-bold text-[#A67C1E] uppercase tracking-widest mb-2">
            {isAr ? 'القسم 5 • التواصل وطلب عرض سعر' : 'SECTION 5 · CONTACT & REQUEST A QUOTE'}
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E1726] tracking-tight text-balance ${
            isAr ? 'font-amiri text-4xl sm:text-5xl' : 'font-heading-en'
          }`}>
            {isAr ? 'لنتحدث عن مشروعكم | طلب عرض سعر فوري' : "Let's Discuss Your Project & Request a Quote"}
          </h2>
          <p className={`mt-3 text-slate-700 text-base leading-relaxed font-serif ${isAr ? 'font-amiri text-lg' : ''}`}>
            {isAr ? (
              'هل تبحثون عن كرفان أو مبنى جاهز في جدة أو مكة المكرمة؟ تواصلوا مع شركة القبطان الأول لمناقشة احتياجاتكم وتحديد المقاسات والتشطيبات المطلوبة والحصول على عرض سعر فوري.'
            ) : (
              'Looking for a portable cabin container or modular building in Jeddah or Makkah? Configure your project specifications below to generate a detailed proposal or send directly to our team via WhatsApp.'
            )}
          </p>
        </div>

        {/* 2-Column Split: Form Configurator (7 cols) + Contact Details & Summary Card (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Configurator (7 cols) */}
          <div id="quote-builder" className="lg:col-span-7 bg-white border-2 border-[#DFD5C3] rounded-lg p-6 sm:p-8 shadow-xs font-serif">
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              
              {/* Step 1: Cabin Type */}
              <div>
                <label className={`block text-xs sm:text-sm font-bold text-[#0E1726] mb-2 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
                  1. {isAr ? 'نوع الكرفان المطلوب' : 'Required Cabin Type'} *
                </label>
                <select
                  value={cabinType}
                  onChange={(e) => setCabinType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-[#DFD5C3] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B27] focus:border-transparent transition-all"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={isAr ? p.titleAr : p.titleEn}>
                      {isAr ? `${p.number}. ${p.titleAr}` : `${p.number}. ${p.titleEn}`}
                    </option>
                  ))}
                  <option value={isAr ? 'كرفان مخصص بتصميم خاص' : 'Custom Tailored Modular Cabin'}>
                    {isAr ? '99. كرفان مخصص بتصميم خاص' : '99. Custom Tailored Modular Cabin'}
                  </option>
                </select>
                {errors.cabinType && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-serif">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.cabinType}</span>
                  </p>
                )}
              </div>

              {/* Step 2: Dimensions & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs sm:text-sm font-bold text-[#0E1726] mb-2 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
                    2. {isAr ? 'المقاسات المطلوبة' : 'Preferred Dimensions'} *
                  </label>
                  <select
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded border border-[#DFD5C3] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B27] focus:border-transparent transition-all"
                  >
                    <option value="6m × 3m">6m × 3m (20ft Standard Office / Dorm)</option>
                    <option value="12m × 3.5m">12m × 3.5m (40ft Large Complex / Ablution)</option>
                    <option value="9m × 3.5m">9m × 3.5m (Executive Office / Conference)</option>
                    <option value="4m × 2.5m">4m × 2.5m (Compact Office / Canteen)</option>
                    <option value="2.5m × 2.5m">2.5m × 2.5m (Gatehouse Security)</option>
                    <option value="2m × 2m">2m × 2m (Compact Security Guard)</option>
                    <option value="Custom">{isAr ? 'مقاسات مخصصة (تحديد يدوي)' : 'Custom Dimensions (Specify)'}</option>
                  </select>
                  {errors.dimensions && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.dimensions}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-xs sm:text-sm font-bold text-[#0E1726] mb-2 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
                    3. {isAr ? 'الكمية المطلوبة' : 'Quantity'} *
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2.5 bg-[#FAF7F0] hover:bg-[#E8E2D5] text-[#0E1726] border border-[#DFD5C3] rounded-s font-bold text-sm transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full text-center py-2.5 border-y border-[#DFD5C3] bg-white text-sm font-mono font-bold focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2.5 bg-[#FAF7F0] hover:bg-[#E8E2D5] text-[#0E1726] border border-[#DFD5C3] rounded-e font-bold text-sm transition-colors"
                    >
                      +
                    </button>
                  </div>
                  {errors.quantity && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.quantity}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Custom Dimensions Input if 'Custom' selected */}
              {dimensions === 'Custom' && (
                <div className="p-3.5 bg-[#FAF7F0] border border-[#DFD5C3] rounded">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isAr ? 'اكتب المقاسات المخصصة (الطول × العرض × الارتفاع)' : 'Enter Custom Dimensions (L × W × H)'} *
                  </label>
                  <input
                    type="text"
                    placeholder={isAr ? 'مثال: 8.5م × 3.2م × 2.8م' : 'e.g., 8.5m × 3.2m × 2.8m'}
                    value={customDimensions}
                    onChange={(e) => setCustomDimensions(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-[#DFD5C3] text-sm focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                  />
                  {errors.customDimensions && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.customDimensions}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Step 3: Project Location & Target Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs sm:text-sm font-bold text-[#0E1726] mb-2 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
                    4. {isAr ? 'موقع المشروع' : 'Project Location'} *
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded border border-[#DFD5C3] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B27] focus:border-transparent transition-all"
                  >
                    <option value="Jeddah">{isAr ? 'جدة (شمال/جنوب/الميناء/الصناعية)' : 'Jeddah (North / South / Port / Industrial)'}</option>
                    <option value="Makkah">{isAr ? 'مكة المكرمة والمشاعر المقدسة' : 'Makkah Al-Mukarramah'}</option>
                    <option value="Rabigh & KAEC">{isAr ? 'رابغ ومدينة الملك عبدالله الاقتصادية' : 'Rabigh & KAEC'}</option>
                    <option value="Taif">{isAr ? 'الطائف والمناطق المجاورة' : 'Taif & Vicinity'}</option>
                    <option value="Other">{isAr ? 'موقع آخر بالمنطقة الغربية' : 'Other Western Region Site'}</option>
                  </select>
                  {location === 'Other' && (
                    <input
                      type="text"
                      placeholder={isAr ? 'أدخل اسم الموقع بالتفصيل' : 'Enter specific location name'}
                      value={customLocation}
                      onChange={(e) => setCustomLocation(e.target.value)}
                      className="mt-2 w-full px-3 py-2 rounded border border-[#DFD5C3] text-sm focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                    />
                  )}
                  {errors.location && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-xs sm:text-sm font-bold text-[#0E1726] mb-2 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
                    5. {isAr ? 'موعد التسليم المتوقع' : 'Target Delivery Date'}
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded border border-[#DFD5C3] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B27] focus:border-transparent transition-all font-mono"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {isAr ? 'تسليم فوري للمقاسات الجاهزة' : 'Immediate dispatch for stocked sizes'}
                  </span>
                </div>
              </div>

              {/* Step 4: Required Features & Finishing */}
              <div>
                <label className={`block text-xs sm:text-sm font-bold text-[#0E1726] mb-2 ${isAr ? 'font-amiri text-base font-bold' : ''}`}>
                  6. {isAr ? 'التجهيزات والتشطيبات المطلوبة' : 'Required Features & Finishing'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {featureOptions.map((feat) => {
                    const label = isAr ? feat.ar : feat.en;
                    const isSelected = selectedFeatures.includes(label);
                    return (
                      <button
                        type="button"
                        key={feat.id}
                        onClick={() => handleToggleFeature(label)}
                        className={`p-2.5 text-left rtl:text-right rounded border text-xs font-serif transition-all flex items-center gap-2.5 ${
                          isSelected
                            ? 'bg-[#FFF9EE] border-[#C59B27] text-[#0E1726] font-bold'
                            : 'bg-[#FAF7F0] border-[#DFD5C3] text-slate-700 hover:border-slate-400'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-xs flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? 'bg-[#C59B27] border-[#C59B27] text-white'
                              : 'border-slate-400 bg-white'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className={`leading-tight ${isAr ? 'font-amiri text-sm' : ''}`}>{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 5: Optional Contact Info & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {isAr ? 'اسم المسؤول / الشركة' : 'Contact Person / Company Name'}
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={isAr ? 'مثال: م. أحمد - شركة المقاولات' : 'e.g., Eng. Ahmed - Contracting Co.'}
                    className="w-full px-3.5 py-2 rounded border border-[#DFD5C3] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {isAr ? 'رقم الجوال للتواصل' : 'Mobile Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="05XXXXXXXX / +966..."
                    className="w-full px-3.5 py-2 rounded border border-[#DFD5C3] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C59B27] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {isAr ? 'ملاحظات إضافية أو اشتراطات خاصة' : 'Additional Notes / Project Specifications'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    isAr
                      ? 'أي تفاصيل عن طبيعة الموقع، اشتراطات السلامة، أو مواقع فتحات الأبواب...'
                      : 'Any specifics regarding site access, safety requirements, or door placements...'
                  }
                  className="w-full px-3.5 py-2 rounded border border-[#DFD5C3] bg-[#FAF7F0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C59B27]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-5 bg-emerald-700 hover:bg-emerald-600 text-white font-serif font-bold text-sm rounded shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer border border-emerald-500/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {isAr
                      ? 'إرسال المواصفات مباشرة عبر الواتساب'
                      : 'Send Specifications via WhatsApp'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto py-3.5 px-4 bg-[#F0ECE1] hover:bg-[#E2DBCB] text-[#0E1726] font-serif font-bold text-xs rounded border border-[#DFD5C3] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Copy className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الملخص' : 'Copy Summary')}</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded text-xs flex items-center gap-2 font-serif">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    {isAr
                      ? 'تم تجهيز الرسالة وفتح تطبيق الواتساب لمتابعة طلبكم مع فريق المبيعات.'
                      : 'WhatsApp chat launched with your configured cabin specifications.'}
                  </span>
                </div>
              )}

            </form>
          </div>

          {/* Right Column: Traditional Ledger Card + Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Old School Ledger Card */}
            <div className="bg-[#0E1726] text-white rounded-lg p-6 sm:p-7 border-2 border-[#C59B27]/40 shadow-xl font-serif">
              <div className="flex items-center justify-between pb-4 border-b border-[#C59B27]/30">
                <div>
                  <div className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-widest">
                    {isAr ? 'ملخص المواصفات الفورية' : 'Live Quote Ledger'}
                  </div>
                  <h3 className={`text-lg font-bold text-white mt-0.5 ${isAr ? 'font-amiri text-2xl' : ''}`}>
                    {cabinType}
                  </h3>
                </div>
                {floorArea && (
                  <div className="text-right rtl:text-left">
                    <span className="text-2xl font-mono font-bold text-[#D4AF37]">{floorArea}</span>
                    <span className="text-xs text-slate-400 block font-mono">m²</span>
                  </div>
                )}
              </div>

              <div className="py-4 space-y-3 text-xs text-slate-300 border-b border-[#C59B27]/30">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isAr ? 'المقاس:' : 'Dimensions:'}</span>
                  <span className="font-mono font-bold text-[#D4AF37]">
                    {dimensions === 'Custom' ? customDimensions || 'Custom' : dimensions}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isAr ? 'الكمية المطلوبة:' : 'Quantity:'}</span>
                  <span className="font-mono font-bold text-white">{quantity} {isAr ? 'وحدة' : 'units'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isAr ? 'موقع المشروع:' : 'Site Location:'}</span>
                  <span className="font-semibold text-white">{getEffectiveLocation()}</span>
                </div>

                {deliveryDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">{isAr ? 'موعد التسليم:' : 'Target Date:'}</span>
                    <span className="font-mono text-white">{deliveryDate}</span>
                  </div>
                )}

                <div>
                  <span className="text-slate-400 block mb-1">{isAr ? 'التجهيزات المحددة:' : 'Selected Features:'}</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedFeatures.map((f, i) => (
                      <span key={i} className="text-[10px] bg-[#162238] text-slate-200 px-2 py-0.5 rounded border border-slate-700">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs">
                <span className="text-slate-400">{isAr ? 'التسعير والتوافر:' : 'Pricing & Availability:'}</span>
                <span className="text-[#D4AF37] font-bold">
                  {isAr ? 'يتم تأكيده فورياً بالواتساب' : 'Confirmed on WhatsApp'}
                </span>
              </div>
            </div>

            {/* Official Company Credential Card */}
            <div className="bg-white border-2 border-[#DFD5C3] rounded-lg p-6 space-y-4 font-serif shadow-xs">
              <h3 className={`text-base font-bold text-[#0E1726] border-b border-[#DFD5C3] pb-2 ${isAr ? 'font-amiri text-2xl font-bold' : ''}`}>
                {isAr ? 'بيانات التواصل الرسمية' : 'Official Corporate Details'}
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#FAF7F0] border border-[#DFD5C3] text-[#C59B27] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{isAr ? 'اسم المنشأة:' : 'Establishment:'}</div>
                    <div className="font-bold text-[#0E1726]">
                      {isAr ? 'شركة القبطان الأول' : 'Al Qabtan Al Awwal Est. Co.'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#FAF7F0] border border-[#DFD5C3] text-[#C59B27] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{isAr ? 'الرئيس التنفيذي:' : 'CEO / Leadership:'}</div>
                    <div className="font-bold text-slate-900">{CEO_NAME}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{isAr ? 'الواتساب والهاتف المباشر:' : 'Phone & WhatsApp:'}</div>
                    <div className="font-mono font-bold text-slate-900" dir="ltr">
                      +966 50 250 0899
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{isAr ? 'مناطق التغطية:' : 'Service Areas:'}</div>
                    <div className="font-medium text-slate-800">
                      {isAr
                        ? 'جدة، مكة المكرمة، والمناطق المحيطة بالمملكة'
                        : 'Jeddah, Makkah, and surrounding areas, Saudi Arabia'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="py-2.5 px-3 bg-[#FAF7F0] hover:bg-[#E8E2D5] text-[#0E1726] border border-[#DFD5C3] rounded text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{isAr ? 'اتصال مباشر' : 'Call Directly'}</span>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
