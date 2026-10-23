export interface ProductItem {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  specsEn: string[];
  specsAr: string[];
  dimensionsDefault: string;
  image: string;
  badgeEn: string;
  badgeAr: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'office' | 'accommodation' | 'security' | 'storage' | 'ablution' | 'custom' | 'interior' | 'delivery';
  type: 'image' | 'video';
  src: string;
  poster?: string;
  captionEn: string;
  captionAr: string;
  specs?: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'site-office',
    number: '01',
    titleEn: 'Site Office Containers',
    titleAr: 'كرفانات المكاتب',
    descEn: 'Portable offices for construction sites, engineers, supervisors, project managers, and administrative teams. Layouts may include work areas, windows, doors, electrical provisions, and interior finishing options.',
    descAr: 'كرفانات مكتبية للمواقع الإنشائية والمهندسين والمشرفين ومديري المشاريع والفرق الإدارية، مع خيارات متنوعة للتقسيمات الداخلية والتشطيبات حسب المواصفات المطلوبة.',
    specsEn: [
      'Thermal & acoustic sandwich panel insulation',
      'Double-glazed sliding windows with safety security grills',
      'Integrated electrical wiring, LED fixtures & AC opening',
      'Durable wood-grain or vinyl commercial flooring'
    ],
    specsAr: [
      'عزل حراري وصوتي بألواح ساندوتش بانل عالية الجودة',
      'نوافذ سحاب مزدوجة مع شبك حماية وأمان',
      'تجهيزات وتمديدات كهربائية متكاملة مع إضاءات LED وتجهيز للمكيف',
      'أرضيات فينيل تجارية أو تشطيبات خشبية متينة'
    ],
    dimensionsDefault: '6m × 3m (20ft)',
    image: '/assets/aistudio/IMG-20261019-WA0131_b98a96bd.jpg',
    badgeEn: 'Popular Choice',
    badgeAr: 'الأكثر طلباً'
  },
  {
    id: 'worker-accommodation',
    number: '02',
    titleEn: 'Worker Accommodation Cabins',
    titleAr: 'كرفانات سكن العمال',
    descEn: 'Modular accommodation units designed for workforce housing and staff facilities, subject to project specifications and applicable requirements.',
    descAr: 'وحدات سكنية جاهزة لسكن العمال والموظفين، مع إمكانية تحديد التقسيمات والتجهيزات وفقاً لمتطلبات المشروع والاشتراطات المعمول بها.',
    specsEn: [
      'Multi-bed room configurations with optimized ventilation',
      'Heavy-duty steel chassis with corrosion-resistant coating',
      'Pre-wired for lighting, split AC sockets & fire safety',
      'Washable interior wall panels for hygiene & durability'
    ],
    specsAr: [
      'تقسيمات غرف متعددة الأسرة مع تهوية مدروسة',
      'هيكل حديدي ثقيل ومقاوم للصدأ والعوامل الجوية',
      'تجهيز كهربائي للإضاءة ونقاط مكيفات سبليت والسلامة',
      'ألواح جدران قابلة للغسيل ومقاومة للاستهلاك العالي'
    ],
    dimensionsDefault: '12m × 3.5m (40ft)',
    image: '/assets/aistudio/IMG-20261019-WA0130_07e713d4.jpg',
    badgeEn: 'Turnkey Camps',
    badgeAr: 'مجمعات سكنية'
  },
  {
    id: 'security-cabins',
    number: '03',
    titleEn: 'Security Cabins & Guard Rooms',
    titleAr: 'غرف الحراسة والأمن',
    descEn: 'Compact cabins for security personnel, entrance gates, access-control points, parking areas, and construction sites.',
    descAr: 'غرف حراسة وأمن للمداخل والبوابات ومواقف السيارات والمواقع الإنشائية ونقاط تنظيم الدخول.',
    specsEn: [
      '360° or 3-side panoramic observation windows with tinted glass',
      'Compact footprint: 2m × 2m or 2.5m × 2.5m',
      'Exterior canopy / sunshade overhang over viewing windows',
      'External entrance lantern & internal desk power ports'
    ],
    specsAr: [
      'نوافذ رؤية بانورامية في 3 أو 4 اتجاهات مع زجاج عاكس',
      'مقاسات مدمجة مناسبة للبوابات: 2م × 2م أو 2.5م × 2.5م',
      'مظلة حماية خارجية من الشمس والأمطار فوق النافذة',
      'إنارة خارجية فوق الباب ونقاط كهربائية للمكتب والأجهزة'
    ],
    dimensionsDefault: '2m × 2m',
    image: '/assets/aistudio/IMG-20261019-WA0133_7916d470.jpg',
    badgeEn: 'Immediate Dispatch',
    badgeAr: 'تسليم فوري'
  },
  {
    id: 'storage-containers',
    number: '04',
    titleEn: 'Storage Containers',
    titleAr: 'حاويات التخزين',
    descEn: 'Container-based storage solutions for tools, equipment, construction materials, supplies, and other suitable goods.',
    descAr: 'حاويات تخزين مناسبة للأدوات والمعدات ومواد البناء والمستلزمات وغيرها من المواد الملائمة للتخزين.',
    specsEn: [
      'High-grade Corten steel weather-tight construction',
      'Heavy-duty secure locking bars & padlock lockboxes',
      'Heavy load floor bearing capacity for machinery & raw materials',
      'Options for ventilation louvers & racking shelves'
    ],
    specsAr: [
      'هيكل فولاذي متين مقاوم للرياح والأمطار والظروف الصحراوية',
      'أبواب مزدوجة مع أذرع إغلاق محكمة وصندوق حماية للقفل',
      'أرضيات خشبية أو حديدية تتحمل أوزان الآلات والمواد الثقيلة',
      'خيارات لإضافة فتحات تهوية ورفوف تخزين داخلية'
    ],
    dimensionsDefault: '6m × 2.4m (20ft) / 12m × 2.4m (40ft)',
    image: '/assets/aistudio/IMG-20261019-WA0148_59d5aed3.jpg',
    badgeEn: 'Secure & Heavy Duty',
    badgeAr: 'أمان ومتانة عالية'
  },
  {
    id: 'ablution-units',
    number: '05',
    titleEn: 'Portable Toilets & Ablution Units',
    titleAr: 'دورات المياه ووحدات الوضوء',
    descEn: 'Portable sanitation facilities and ablution units for suitable construction, commercial, and temporary project locations, subject to plumbing and installation requirements.',
    descAr: 'وحدات دورات مياه متنقلة ووحدات وضوء للمواقع الإنشائية والتجارية والمشاريع المؤقتة، وفقاً لمتطلبات السباكة والتركيب.',
    specsEn: [
      'Multi-cubicle configurations (up to 12 toilets + 5 washbasins)',
      'High-grade ceramic sanitary fixtures, hand showers & exhaust fans',
      'Anti-slip water-resistant flooring with floor drainage outlets',
      'Pre-installed PPR/PVC plumbing with external inlet/outlet couplings'
    ],
    specsAr: [
      'خيارات متعددة الكبائن (تصل إلى 12 حمام + 5 مغاسل مجمعة)',
      'أطقم صحية سيراميك عالية الجودة وشطافات ومراوح شفط',
      'أرضيات مانعة للانزلاق ومقاومة للماء مع فتحات تصريف أرضية',
      'تمديدات سباكة كاملة وجاهزة للربط مع شبكة المياه والتصريف'
    ],
    dimensionsDefault: '12m × 3.5m or Single/Twin Mobile Units',
    image: '/assets/aistudio/IMG-20261019-WA0132_076ab5d3.jpg',
    badgeEn: 'Sanitary Standard',
    badgeAr: 'معايير صحية معتمدة'
  },
  {
    id: 'meeting-rooms',
    number: '06',
    titleEn: 'Meeting Rooms & Administrative Cabins',
    titleAr: 'غرف الاجتماعات والإدارة',
    descEn: 'Modular spaces for meetings, staff administration, reception areas, and project management activities.',
    descAr: 'وحدات جاهزة للاجتماعات والإدارة واستقبال الزوار ومتابعة أعمال المشاريع.',
    specsEn: [
      'Spacious conference layout accommodating 10-18 delegates',
      'Acoustic ceiling tiles (60×60) with ultra-bright panel lights',
      'HDMI, network data conduit & multiple floor power points',
      'Executive wood laminate wall paneling options'
    ],
    specsAr: [
      'مساحة واسعة تتسع لطاولات اجتماعات من 10 إلى 18 شخصاً',
      'أسقف مستعارة عازلة للصوت (60×60) مع إضاءات بانل حديثة',
      'تمديدات لشاشات العرض وشبكات الاتصال ونقاط الكهرباء',
      'تشطيبات جدارية فخمة بألواح بديل الخشب حسب الطلب'
    ],
    dimensionsDefault: '9m × 3.5m / 12m × 3.5m',
    image: '/assets/aistudio/IMG-20261019-WA0150_4cc8ed72.jpg',
    badgeEn: 'Executive Finish',
    badgeAr: 'تشطيبات تنفيذية'
  },
  {
    id: 'residential-cabins',
    number: '07',
    titleEn: 'Residential & Premium Modular Cabins',
    titleAr: 'الكرفانات السكنية والمتميزة',
    descEn: 'Modular rooms and customized cabin buildings for residential or staff-related applications, depending on the design and permitted use.',
    descAr: 'غرف ومبانٍ جاهزة بتصاميم مخصصة للاستخدامات السكنية أو مرافق الموظفين، وفقاً للتصميم والاستخدام المسموح به.',
    specsEn: [
      'Includes private en-suite bathroom & kitchenette option',
      'High insulation rating for harsh Saudi desert summer climates',
      'Modern decorative ceiling and parquet/herringbone flooring',
      'Stackable design (1 or 2 floors) with external steel stairways'
    ],
    specsAr: [
      'تشمل خيارات الحمام الداخلي والمطبخ التحضيري',
      'عزل حراري فائق يتحمل درجات حرارة الصيف العالية بالمملكة',
      'ديكورات داخلية حديثة وأرضيات باركيه أنيقة',
      'إمكانية التصميم على دورين (طابقين) مع درج حديدي خارجي'
    ],
    dimensionsDefault: '6m × 3m / 12m × 3.5m',
    image: '/assets/aistudio/IMG-20261019-WA0166_e25c8f75.jpg',
    badgeEn: 'Premium Comfort',
    badgeAr: 'راحة متكاملة'
  },
  {
    id: 'commercial-kiosks',
    number: '08',
    titleEn: 'Commercial Kiosks & Canteen Units',
    titleAr: 'الأكشاك التجارية ووحدات الكافتيريا',
    descEn: 'Customized modular units for suitable commercial activities, serving points, and project canteens.',
    descAr: 'وحدات جاهزة مخصصة للأنشطة التجارية ونقاط تقديم الخدمات وكافتيريات المشاريع.',
    specsEn: [
      'Hydraulic or folding service counter windows',
      'Water supply, grease trap provisions & commercial electrical loads',
      'Stainless steel counter installation ready',
      'Custom exterior paint & branding preparation'
    ],
    specsAr: [
      'نوافذ خدمة هيدروليكية أو مفصلية مخصصة للتقديم للجمهور',
      'تمديدات مياه وصرف مع تحمل أحمال كهربائية لأجهزة المطبخ',
      'جاهزية لتركيب أسطح وطاولات الستانلس ستيل',
      'دهانات خارجية وألوان مخصصة تناسب الهوية التجارية'
    ],
    dimensionsDefault: '4m × 2.5m / 6m × 3m',
    image: '/assets/aistudio/IMG-20261019-WA0154_b5f5d09f.jpg',
    badgeEn: 'Commercial Use',
    badgeAr: 'استخدام تجاري'
  },
  {
    id: 'custom-buildings',
    number: '09',
    titleEn: 'Customized Modular Buildings',
    titleAr: 'المباني الجاهزة حسب الطلب',
    descEn: 'Custom cabin configurations and modular spaces developed according to project dimensions, intended use, layout, and finishing requirements.',
    descAr: 'حلول مخصصة للكرفانات والمباني الجاهزة وفقاً لأبعاد المشروع وطبيعة الاستخدام والتقسيمات والتشطيبات المطلوبة.',
    specsEn: [
      'Custom dimensions & structural framing engineered to order',
      'Multi-room layouts: combined office, kitchen, toilet, prayer room',
      'Modular linkable units that can be expanded on demand',
      'Custom interior partitions, door placements, and finishes'
    ],
    specsAr: [
      'مقاسات وتصاميم هندسية مخصصة تصنع بالكامل حسب طلب العميل',
      'تقسيمات متعددة: مكاتب مدمجة، مطبخ، مصلى، دورات مياه',
      'وحدات قابلة للدمج والتوسع مستقبلاً حسب متطلبات الموقع',
      'حرية تامة في اختيار مواقع الأبواب والشبابيك ونوع التشطيب'
    ],
    dimensionsDefault: 'Engineered to Specification',
    image: '/assets/aistudio/IMG-20261019-WA0151_d1b2939d.jpg',
    badgeEn: 'Tailored Solution',
    badgeAr: 'حل مخصص بالكامل'
  },
  {
    id: 'accessories-installation',
    number: '10',
    titleEn: 'Optional Accessories & Installation Services',
    titleAr: 'التجهيزات وخدمات التركيب',
    descEn: 'Depending on availability, additional services may include insulation, electrical provisions, plumbing, air-conditioning preparation, interior finishing, transportation, installation, and maintenance.',
    descAr: 'بحسب الخدمات المتاحة، يمكن توفير العزل والتجهيزات الكهربائية والسباكة والتحضير للتكييف والتشطيبات الداخلية والنقل والتركيب والصيانة.',
    specsEn: [
      'Heavy transportation via specialized flatbed trucks to site',
      'Crane offloading & precision leveling on concrete blocks',
      'Split & window AC bracket mounting & electrical connection',
      'Preventative on-site maintenance & relocations'
    ],
    specsAr: [
      'أسطول تريلات وسطحات مجهزة لنقل الكرفانات إلى موقع المشروع',
      'تنزيل بالكرين وضبط الاستواء على قواعد خرسانية باحترافية',
      'تجهيز حوامل المكيفات وربط التمديدات الكهربائية والصحية',
      'خدمات النقل والصيانة الدورية عند تغيير مواقع العمل'
    ],
    dimensionsDefault: 'Service Across Western Region',
    image: '/assets/aistudio/IMG-20261019-WA0149_70491c83.jpg',
    badgeEn: 'Site Support',
    badgeAr: 'خدمات الموقع'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Videos
  {
    id: 'vid-cover',
    titleEn: 'Al Qabtan Al Awwal Fleet & Project Range',
    titleAr: 'أسطول وحلول شركة القبطان الأول',
    category: 'custom',
    type: 'video',
    src: '/assets/aistudio/01_Cover_f0576d79.mp4',
    poster: '/assets/aistudio/IMG-20261019-WA0131_b98a96bd.jpg',
    captionEn: 'Comprehensive cabin & container solutions serving Jeddah & Makkah.',
    captionAr: 'حلول الكرفانات والحاويات المتكاملة لخدمة مشاريع جدة ومكة المكرمة.'
  },
  {
    id: 'vid-delivery',
    titleEn: 'Crane Dispatch & Flatbed Loading',
    titleAr: 'تحميل وتنزيل الكرفانات بالرافعة',
    category: 'delivery',
    type: 'video',
    src: '/assets/aistudio/02_Container_Delivery_9af7a481.mp4',
    poster: '/assets/aistudio/IMG-20261019-WA0149_70491c83.jpg',
    captionEn: 'Safe crane loading onto specialized long haul transport flatbed.',
    captionAr: 'تحميل آمن بالرافعة على سطحات النقل المخصصة للمشاريع.'
  },
  {
    id: 'vid-installation',
    titleEn: 'Modular Cabin Site Installation',
    titleAr: 'تركيب الكبائن الجاهزة في الموقع',
    category: 'delivery',
    type: 'video',
    src: '/assets/aistudio/03_Cabin_Installation_4d3f67f2.mp4',
    poster: '/assets/aistudio/IMG-20261019-WA0130_07e713d4.jpg',
    captionEn: 'Precision positioning and setup on site foundations by our field team.',
    captionAr: 'إنزال دقيق وضبط الاستواء في الموقع من قبل فريقنا المتخصص.'
  },
  {
    id: 'vid-workforce',
    titleEn: 'Workforce Accommodation Compound',
    titleAr: 'مجمع سكن وإدارة متكامل',
    category: 'accommodation',
    type: 'video',
    src: '/assets/aistudio/04_Portable_Cabins_378a1436.mp4',
    poster: '/assets/aistudio/IMG-20261019-WA0158_bbd72470.jpg',
    captionEn: 'Multi-unit modular compound ready for workforce housing.',
    captionAr: 'مجمع وحدات كرفانات مجهزة بالكامل لسكن العمال والمشرفين.'
  },
  {
    id: 'vid-interior',
    titleEn: 'Modern Executive Office Interior',
    titleAr: 'تشطيب داخلي مكتبي فخم ومريح',
    category: 'interior',
    type: 'video',
    src: '/assets/aistudio/05_Modern_Interior_87a16834.mp4',
    poster: '/assets/aistudio/IMG-20261019-WA0150_4cc8ed72.jpg',
    captionEn: 'Turnkey interior with executive desk, leather seating, and split AC.',
    captionAr: 'تشطيب داخلي جاهز للاستخدام مع مكتب تنفيذي ومكيف سبليت.'
  },
  {
    id: 'vid-containers',
    titleEn: 'New & Used Shipping Containers',
    titleAr: 'حاويات جديدة ومستعملة بمختلف الأحجام',
    category: 'storage',
    type: 'video',
    src: '/assets/aistudio/06_Containers_c5868ae8.mp4',
    poster: '/assets/aistudio/IMG-20261019-WA0148_59d5aed3.jpg',
    captionEn: 'Large stock of durable ISO shipping and storage containers in yard.',
    captionAr: 'مخزون ضخم من حاويات التخزين والشحن المطابقة للمواصفات.'
  },
  {
    id: 'vid-ablution-trailer',
    titleEn: 'Multi-Station Ablution & Toilet Unit',
    titleAr: 'وحدة دورات مياه ووضوء متنقلة متكاملة',
    category: 'ablution',
    type: 'video',
    src: '/assets/aistudio/VID-20261013-WA0002_d4cc76cc.mp4',
    poster: '/assets/aistudio/IMG-20261019-WA0132_076ab5d3.jpg',
    captionEn: 'Comprehensive sanitation unit with row of washbasins and private cubicles.',
    captionAr: 'وحدة صحية كاملة تشمل صف مغاسل وضوء وكبائن حمام خاصة.'
  },
  // Key Genuine Photos
  {
    id: 'img-12toilet-plan',
    titleEn: '12-Toilet + 5-Washbasin Architectural Plan',
    titleAr: 'مخطط 12 حمام + 5 مغاسل (12م × 3.5م)',
    category: 'ablution',
    type: 'image',
    src: '/assets/aistudio/IMG-20261022-WA0021_51107135.jpg',
    captionEn: 'Detailed 3D cutaway and floorplan of 12m modular sanitation container.',
    captionAr: 'مخطط هندسي وتصميم ثلاثي الأبعاد لوحدة صحية بطول 12م.'
  },
  {
    id: 'img-meeting-room',
    titleEn: 'Executive Conference & Meeting Room',
    titleAr: 'غرفة اجتماعات إدارية مجهزة',
    category: 'interior',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0148_59d5aed3.jpg',
    captionEn: 'Long conference table, executive seating, and presentation board.',
    captionAr: 'طاولة اجتماعات طويلة مع كراسي مريحة وشاشة وشبكة اتصالات.'
  },
  {
    id: 'img-blue-security',
    titleEn: 'Architectural Security Guard Cabin',
    titleAr: 'كابينة حراسة وأمن بتشطيب معماري أزرق',
    category: 'security',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0133_7916d470.jpg',
    captionEn: 'Composite panel exterior with panoramic security vantage windows.',
    captionAr: 'واجهة كلادينج عصرية مع نوافذ رؤية شاملة للمداخل ومواقف السيارات.'
  },
  {
    id: 'img-twin-offices',
    titleEn: 'Twin Modular Construction Site Offices',
    titleAr: 'مكاتب موقع إنشائي توأم',
    category: 'office',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0131_b98a96bd.jpg',
    captionEn: 'Standard site offices equipped with heavy steel security window bars.',
    captionAr: 'كرفانات مكتبية للمهندسين والمشرفين مع حماية حديدية للنوافذ.'
  },
  {
    id: 'img-2story-night',
    titleEn: 'Two-Story Modular Compound Structure',
    titleAr: 'مبنى كرفانات جاهز طابقين مع درج خارجي',
    category: 'custom',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0166_e25c8f75.jpg',
    captionEn: 'Stacked modular building with steel access staircase and walkway.',
    captionAr: 'مبنى كرفانات متعدد الأدوار يوفر مساحات مضاعفة في مواقع العمل.'
  },
  {
    id: 'img-multipurpose-hall',
    titleEn: 'Large Modular Multipurpose Hall',
    titleAr: 'قاعة كرفان متعددة الاستخدامات بمساحة واسعة',
    category: 'interior',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0150_4cc8ed72.jpg',
    captionEn: 'False ceiling with recessed lighting and herringbone commercial flooring.',
    captionAr: 'سقف مستعار مع إضاءات ليد وأرضيات هيرينغبون أنيقة ومتينة.'
  },
  {
    id: 'img-bathroom-interior',
    titleEn: 'Ceramic Bathroom & Shower Fitting',
    titleAr: 'تشطيب دورة مياه كاملة مع شاور ومغسلة',
    category: 'ablution',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0132_076ab5d3.jpg',
    captionEn: 'High quality toilet, bidet spray, overhead shower, and exhaust ventilation.',
    captionAr: 'كرسي حمام حديث، شطاف، دوش استحمام، وتهوية ميكانيكية متطورة.'
  },
  {
    id: 'img-truck-transport',
    titleEn: 'Heavy Mercedes Actros Transport Fleet',
    titleAr: 'أسطول نقل ثقيل وتريلات مرسيدس للشحن',
    category: 'delivery',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0143_4b6d735c.jpg',
    captionEn: 'Transport trucks loaded with cabins dispatched to customer sites.',
    captionAr: 'تريلات مجهزة لنقل وتسليم الكرفانات لمختلف مشاريع الغربية.'
  },
  {
    id: 'img-compact-guard',
    titleEn: 'Single Compact Guard Room',
    titleAr: 'غرفة حراسة مدمجة للبوابات',
    category: 'security',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0138_48e36999.jpg',
    captionEn: '2m × 2m insulated sandwich panel guard room with canopy.',
    captionAr: 'كابينة حراسة 2م × 2م معزولة بساندوتش بانل ومظلة شمسية.'
  },
  {
    id: 'img-long-cabin-yard',
    titleEn: '12m Administrative Long Cabin',
    titleAr: 'كرفان طويل 12 متر متعدد الغرف',
    category: 'office',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0151_d1b2939d.jpg',
    captionEn: 'Manufactured and painted in workshop yard, ready for site dispatch.',
    captionAr: 'مكتمل التصنيع والدهان في الورشة وجاهز للنقل والتسليم المباشر.'
  },
  {
    id: 'img-evening-lit',
    titleEn: 'Illuminated Office Unit at Night',
    titleAr: 'كرفان مكتبي مضاء مع درج فولاذي خارجي',
    category: 'office',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0154_b5f5d09f.jpg',
    captionEn: 'Exterior lighting, steel steps, and finished warm wood interior.',
    captionAr: 'إنارة خارجية ودرج حديدي وتشطيبات داخلية دافئة ومريحة.'
  },
  {
    id: 'img-toilets-truck',
    titleEn: 'Sanitary Cabins Batch Dispatch',
    titleAr: 'دفعة وحدات صحية جاهزة للشحن على السطحة',
    category: 'delivery',
    type: 'image',
    src: '/assets/aistudio/IMG-20261019-WA0145_1233de1f.jpg',
    captionEn: 'Multiple mobile toilet units secured for transport to client project.',
    captionAr: 'مجموعة دورات مياه متنقلة جاهزة ومثبتة للنقل إلى موقع العميل.'
  }
];

export const SERVICE_AREAS = [
  { en: 'Jeddah', ar: 'جدة' },
  { en: 'Makkah Al-Mukarramah', ar: 'مكة المكرمة' },
  { en: 'Rabigh & King Abdullah Economic City (KAEC)', ar: 'رابغ ومدينة الملك عبدالله الاقتصادية' },
  { en: 'Taif & Western Highway Corridors', ar: 'الطائف ومحاور الطرق السريعة بالمنطقة الغربية' },
  { en: 'Surrounding Western Region Industrial Zones', ar: 'المناطق الصناعية والمشاريع المحيطة' }
];

export const COMPANY_PRINCIPLES = [
  {
    num: '01',
    titleEn: 'Understanding Customer Requirements',
    titleAr: 'فهم احتياجات العملاء',
    descEn: 'We consult closely with your engineering, safety, and procurement teams to identify functional space requirements, occupancy loads, and climate considerations.',
    descAr: 'نتواصل بعناية مع فرق الهندسة والسلامة والمشتريات لتحديد متطلبات المساحة التشغيلية وسعة الاستيعاب والظروف المناخية للموقع.'
  },
  {
    num: '02',
    titleEn: 'Clear Product Specifications',
    titleAr: 'وضوح مواصفات المنتجات',
    descEn: 'Transparent steel gauge, insulation density, electrical wiring load capacities, window dimensions, and paint finishes are detailed prior to confirmation.',
    descAr: 'توضيح دقيق لكافة تفاصيل الهيكل الحديدي، كثافة عزل الساندوتش بانل، قدرات التمديدات الكهربائية، ومقاسات الأبواب والنوافذ والدهانات.'
  },
  {
    num: '03',
    titleEn: 'Customized Options Where Available',
    titleAr: 'توفير خيارات مخصصة حسب الإمكانية',
    descEn: 'From private en-suite toilets and executive meeting setups to heavy-duty storage racks and canteen serving windows, we adapt designs to your site needs.',
    descAr: 'إمكانية تعديل التقسيمات الداخلية، إضافة دورات مياه خاصة، قاعات اجتماعات، أو رفوف تخزين ثقيلة، ونوافذ تقديم للأنشطة التجارية.'
  },
  {
    num: '04',
    titleEn: 'Transparent Quotations',
    titleAr: 'عروض أسعار واضحة',
    descEn: 'Detailed quotes covering unit fabrication, selected finishing options, optional air-conditioning preparation, and site transport & crane offloading.',
    descAr: 'عروض أسعار شاملة وواضحة تشمل تصنيع الوحدة، خيارات التشطيب، التجهيزات الإضافية، والنقل والتنزيل بالكرين في الموقع.'
  },
  {
    num: '05',
    titleEn: 'Professional Communication',
    titleAr: 'التواصل المهني',
    descEn: 'Prompt responses via WhatsApp and phone, responsive order tracking, and dependable on-site coordination by our experienced operations team.',
    descAr: 'سرعة استجابة ومتابعة مستمرة عبر الواتساب والهاتف، والتزام بالدقة والمواعيد عبر فريقنا التشغيلي المتمرس.'
  }
];
