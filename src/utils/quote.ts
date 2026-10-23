/**
 * Pure business logic for Al Qabtan Al Awwal Est. Co. quotation calculations
 * and WhatsApp message generation.
 */

export interface QuoteRequest {
  cabinType: string;
  dimensions: string;
  customDimensions?: string;
  quantity: number;
  location: string;
  deliveryDate?: string;
  features: string[];
  clientName?: string;
  clientPhone?: string;
  notes?: string;
  language: 'ar' | 'en';
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const COMPANY_PHONE = '+966502500899';
export const WHATSAPP_RAW_NUMBER = '966502500899';
export const CEO_NAME = 'NASEER AHMAD';

export function validateQuoteRequest(req: Partial<QuoteRequest>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!req.cabinType || req.cabinType.trim() === '') {
    errors.cabinType = req.language === 'ar' ? 'يرجى اختيار نوع الكرفان' : 'Please select a cabin type';
  }

  if (!req.dimensions || req.dimensions.trim() === '') {
    errors.dimensions = req.language === 'ar' ? 'يرجى تحديد المقاسات' : 'Please select dimensions';
  }

  if (req.dimensions === 'Custom' && (!req.customDimensions || req.customDimensions.trim() === '')) {
    errors.customDimensions = req.language === 'ar' ? 'يرجى إدخال المقاسات المخصصة' : 'Please specify custom dimensions';
  }

  if (!req.quantity || req.quantity < 1) {
    errors.quantity = req.language === 'ar' ? 'الكمية يجب أن تكون 1 على الأقل' : 'Quantity must be at least 1';
  }

  if (!req.location || req.location.trim() === '') {
    errors.location = req.language === 'ar' ? 'يرجى تحديد موقع المشروع' : 'Please specify project location';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatWhatsAppMessage(req: QuoteRequest): string {
  const isAr = req.language === 'ar';
  const effectiveDimensions = req.dimensions === 'Custom' && req.customDimensions 
    ? req.customDimensions 
    : req.dimensions;

  if (isAr) {
    let msg = `السلام عليكم ورحمة الله،\n`;
    msg += `أود الاستفسار وطلب عرض سعر من شركة القبطان الأول (Al Qabtan Al Awwal):\n\n`;
    if (req.clientName) msg += `👤 الاسم: ${req.clientName}\n`;
    if (req.clientPhone) msg += `📞 الهاتف: ${req.clientPhone}\n`;
    msg += `📦 نوع الكرفان: ${req.cabinType}\n`;
    msg += `📐 المقاسات: ${effectiveDimensions}\n`;
    msg += `🔢 الكمية: ${req.quantity}\n`;
    msg += `📍 موقع المشروع: ${req.location}\n`;
    if (req.features && req.features.length > 0) {
      msg += `🛠️ التجهيزات المطلوبة: ${req.features.join('، ')}\n`;
    }
    if (req.deliveryDate) {
      msg += `📅 موعد التسليم المتوقع: ${req.deliveryDate}\n`;
    }
    if (req.notes) {
      msg += `📝 ملاحظات إضافية: ${req.notes}\n`;
    }
    msg += `\nيرجى التكرم بتزويدنا بعرض السعر والتوافر. شكراً لكم.`;
    return msg;
  } else {
    let msg = `Hello Al Qabtan Al Awwal Est. Co.,\n`;
    msg += `I would like to request a quotation for portable cabins & modular solutions:\n\n`;
    if (req.clientName) msg += `👤 Name: ${req.clientName}\n`;
    if (req.clientPhone) msg += `📞 Phone: ${req.clientPhone}\n`;
    msg += `📦 Cabin Type: ${req.cabinType}\n`;
    msg += `📐 Dimensions: ${effectiveDimensions}\n`;
    msg += `🔢 Quantity: ${req.quantity}\n`;
    msg += `📍 Location: ${req.location}\n`;
    if (req.features && req.features.length > 0) {
      msg += `🛠️ Required Features: ${req.features.join(', ')}\n`;
    }
    if (req.deliveryDate) {
      msg += `📅 Target Delivery Date: ${req.deliveryDate}\n`;
    }
    if (req.notes) {
      msg += `📝 Notes: ${req.notes}\n`;
    }
    msg += `\nPlease let us know the quotation details and availability. Thank you.`;
    return msg;
  }
}

export function generateWhatsAppLink(req: QuoteRequest): string {
  const message = formatWhatsAppMessage(req);
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function estimateFloorArea(dimensionsStr: string): number | null {
  // Looks for patterns like "6m x 3m", "12 x 3.5", "3x3", etc.
  const match = dimensionsStr.match(/(\d+(?:\.\d+)?)\s*(?:m)?\s*[xX×]\s*(\d+(?:\.\d+)?)/);
  if (match) {
    const l = parseFloat(match[1]);
    const w = parseFloat(match[2]);
    if (!isNaN(l) && !isNaN(w)) {
      return Math.round(l * w * 10) / 10;
    }
  }
  return null;
}
