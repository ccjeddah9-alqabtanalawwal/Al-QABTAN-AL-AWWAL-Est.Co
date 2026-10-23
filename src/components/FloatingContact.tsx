import React, { useState } from 'react';
import { MessageSquare, Phone, X, ChevronUp, FileText } from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_RAW_NUMBER } from '../utils/quote';

interface FloatingContactProps {
  language: 'ar' | 'en';
  onOpenQuote: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({
  language,
  onOpenQuote,
}) => {
  const isAr = language === 'ar';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col items-end rtl:items-start gap-2.5">
      
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="bg-[#19233E] border border-slate-700 text-white p-3 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="text-[11px] font-bold text-[#CC9736] pb-1 border-b border-slate-700">
            {isAr ? 'تواصل فوري مع القبطان الأول' : 'Instant Contact'}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
              isAr
                ? 'السلام عليكم شركة القبطان الأول، أود الاستفسار عن الكرفانات والحاويات.'
                : 'Hello Al Qabtan Al Awwal, I would like to inquire about portable cabins.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-semibold text-white transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp (+966 50 250 0899)</span>
          </a>

          <a
            href={`tel:${COMPANY_PHONE}`}
            className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold text-slate-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#CC9736]" />
            <span>{isAr ? 'اتصال بالهاتف' : 'Direct Call'}</span>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenQuote();
            }}
            className="flex items-center gap-2 px-3 py-2 bg-[#CC9736] hover:bg-[#b8822a] text-[#19233E] rounded-lg text-xs font-bold transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>{isAr ? 'طلب عرض سعر سريع' : 'Fast Quote Form'}</span>
          </button>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isAr ? 'خيارات التواصل السريع' : 'Quick Contact Menu'}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 relative cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-7 h-7" />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#CC9736] rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-[#19233E]">
                1
              </span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
