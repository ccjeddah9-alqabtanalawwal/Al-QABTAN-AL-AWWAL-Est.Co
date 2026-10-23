import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateQuoteRequest,
  formatWhatsAppMessage,
  generateWhatsAppLink,
  estimateFloorArea,
  WHATSAPP_RAW_NUMBER,
} from './quote';

test('validateQuoteRequest detects missing mandatory fields', () => {
  const result = validateQuoteRequest({ language: 'ar' });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.cabinType);
  assert.ok(result.errors.dimensions);
  assert.ok(result.errors.location);
});

test('validateQuoteRequest flags custom dimensions when Custom is selected but empty', () => {
  const result = validateQuoteRequest({
    cabinType: 'Site Office',
    dimensions: 'Custom',
    customDimensions: '',
    quantity: 1,
    location: 'Jeddah',
    language: 'en',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.customDimensions);
});

test('validateQuoteRequest succeeds with valid inputs', () => {
  const result = validateQuoteRequest({
    cabinType: 'Site Office Containers',
    dimensions: '6m x 3m',
    quantity: 2,
    location: 'Jeddah',
    language: 'en',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('formatWhatsAppMessage formats English message with all fields', () => {
  const msg = formatWhatsAppMessage({
    cabinType: 'Worker Accommodation Cabins',
    dimensions: '12m x 3.5m',
    quantity: 3,
    location: 'Makkah',
    features: ['Insulation', 'Split AC prep'],
    deliveryDate: '2026-11-15',
    clientName: 'Ahmed Al-Harbi',
    clientPhone: '+966500000000',
    notes: 'Urgent for construction site',
    language: 'en',
  });

  assert.ok(msg.includes('Worker Accommodation Cabins'));
  assert.ok(msg.includes('12m x 3.5m'));
  assert.ok(msg.includes('Ahmed Al-Harbi'));
  assert.ok(msg.includes('Split AC prep'));
});

test('generateWhatsAppLink generates valid wa.me URL with phone number', () => {
  const link = generateWhatsAppLink({
    cabinType: 'Security Cabins & Guard Rooms',
    dimensions: '2m x 2m',
    quantity: 1,
    location: 'Jeddah Industrial City',
    features: [],
    language: 'ar',
  });

  assert.ok(link.startsWith(`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=`));
  assert.ok(link.includes('%D8%A7%D9%84%D9%82%D8%A8%D8%B7%D8%A7%D9%86')); // Contains encoded Arabic
});

test('estimateFloorArea accurately calculates square meters', () => {
  assert.equal(estimateFloorArea('6m x 3m'), 18);
  assert.equal(estimateFloorArea('12m x 3.5m'), 42);
  assert.equal(estimateFloorArea('3x3'), 9);
  assert.equal(estimateFloorArea('Invalid'), null);
});
