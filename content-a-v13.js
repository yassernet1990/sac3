const F = document.querySelector('iframe');

async function CA() {
  const d = F.contentDocument;
  if (!d || d.getElementById('sacAbout')) return;

  let l = d.getElementById('contentCSS');
  if (!l) {
    l = d.createElement('link');
    l.id = 'contentCSS';
    l.rel = 'stylesheet';
    l.href = 'content-v13.css?v=20';
    d.head.appendChild(l);
  }

  const ar = d.documentElement.lang === 'ar';
  const T = (a, e) => ar ? a : e;
  d.querySelector('.equipment')?.remove();
  d.querySelector('.services')?.remove();

  let image = '';
  try {
    image = await fetch('equipment-showcase-v17.txt?v=17').then(r => r.text());
  } catch (e) {}

  const about = d.createElement('section');
  about.id = 'sacAbout';
  about.className = 'sac dark';
  about.innerHTML = `<div class="wrap"><div class="media-copy"><div><span class="tag">${T('عن SAC Logistics', 'About SAC Logistics')}</span><h2>${T('جهة واحدة توفّر المعدة أو الشاحنة وتدير التنفيذ حتى الإغلاق.', 'One accountable partner for equipment, transport and execution.')}</h2><p class="lead">${T('SAC Logistics شركة سعودية مقرها جدة، تخدم مشاريع المقاولات والمصانع والبنية التحتية والمستودعات عبر شبكة من ملاك المعدات وشركات النقل والورش ومقدمي الخدمات. ندرس الاحتياج، نقارن الحلول، ننسّق الجدولة والوصول، ونتابع التشغيل أو التسليم حتى اكتمال الخدمة.', 'SAC Logistics is a Jeddah-based Saudi company supporting contractors, factories, infrastructure projects and warehouses through a network of equipment owners, transport companies, workshops and specialist providers. We study the requirement, compare solutions, coordinate mobilisation and follow operation or delivery through completion.')}</p></div><div class="equipment-stage">${image ? `<img class="approved-equipment" src="${image}" alt="SAC Logistics equipment and transport network">` : ''}<span class="equipment-label">${T('شبكة تشغيل تغطي احتياجات المشروع', 'A project-ready operating network')}</span></div></div><div class="value-ribbon"><div><strong>${T('جهة واحدة', 'One partner')}</strong><span>${T('للطلب والتنسيق والمتابعة', 'Request, coordination and follow-up')}</span></div><div><strong>${T('خيارات متعددة', 'Multiple options')}</strong><span>${T('مقارنة فنية وتجارية قبل الاعتماد', 'Technical and commercial comparison')}</span></div><div><strong>${T('انتشار داخل المملكة', 'Kingdom-wide reach')}</strong><span>${T('شبكة موردين وملاك معدات ونقل', 'Equipment, transport and supplier network')}</span></div><div><strong>${T('دعم مستمر', 'Continuous support')}</strong><span>${T('من تأكيد الطلب حتى إغلاق الخدمة', 'From confirmation through close-out')}</span></div></div></div>`;
  d.querySelector('.hero').after(about);

  const equipment = [
    {
      image: 'assets/equipment/mobile-crane.webp',
      number: '01',
      title: T('الكرينات المتنقلة', 'Mobile Cranes'),
      description: T('كرينات تلسكوبية محمولة على شاحنات لأعمال الرفع والتركيب والمناولة في المشاريع والمصانع والساحات. ننسّق اختيار السعة وطول الذراع ونطاق الوصول وفق وزن الحمولة وموقع الرفع وظروف الموقع.', 'Truck-mounted telescopic cranes for lifting, installation and handling across projects, factories and yards. Capacity, boom length and working radius are coordinated around load weight, lift position and site conditions.'),
      tags: T(['رفع وتركيب', 'سعات متعددة', 'تنسيق الموقع'], ['Lifting & erection', 'Multiple capacities', 'Site coordination'])
    },
    {
      image: 'assets/equipment/power-generator.webp',
      number: '02',
      title: T('مولدات الطاقة', 'Power Generators'),
      description: T('مولدات ديزل للطاقة المؤقتة والاحتياطية والتشغيل المستمر في المواقع والمصانع والمستودعات. يتم تحديد القدرة المطلوبة بناءً على الأحمال وساعات التشغيل وطريقة التوصيل ومتطلبات الموقع.', 'Diesel generator sets for temporary, standby and continuous power at sites, factories and warehouses. Required output is selected around connected loads, operating hours, connection method and site requirements.'),
      tags: T(['طاقة مؤقتة', 'تشغيل احتياطي', 'خيارات ملحقات'], ['Temporary power', 'Standby duty', 'Accessory options'])
    },
    {
      image: 'assets/equipment/warehouse-stacker.webp',
      number: '03',
      title: T('الستاكر ومعدات المستودعات', 'Stackers & Warehouse Equipment'),
      description: T('ستاكر كهربائي ويدوي ومعدات مناولة داخلية لتكديس الطبالي وتحريك البضائع في الممرات ومناطق التخزين. يتم الاختيار حسب الحمولة وارتفاع الرفع وعرض الممر ودورة التشغيل.', 'Electric and manual stackers with indoor handling equipment for pallet stacking and goods movement through aisles and storage zones. Selection is based on load, lift height, aisle width and duty cycle.'),
      tags: T(['ممرات ضيقة', 'مناولة طبالي', 'كهربائي ويدوي'], ['Narrow aisles', 'Pallet handling', 'Electric & manual'])
    },
    {
      image: 'assets/equipment/welding-machine.webp',
      number: '04',
      title: T('ماكينات ومعدات اللحام', 'Welding Machines & Equipment'),
      description: T('ماكينات لحام للمشاريع وورش الصيانة والأعمال الصناعية، مع خيارات تناسب عمليات اللحام المختلفة ومتطلبات القدرة والتنقل. يمكن تنسيق الكابلات والملحقات ومصدر الطاقة ضمن الطلب.', 'Welding machines for projects, maintenance workshops and industrial work, with options suited to different welding processes, power requirements and mobility needs. Cables, accessories and power source can be coordinated with the request.'),
      tags: T(['أعمال صناعية', 'صيانة ميدانية', 'ملحقات متكاملة'], ['Industrial work', 'Field maintenance', 'Integrated accessories'])
    },
    {
      image: 'assets/equipment/forklift.webp',
      number: '05',
      title: T('الرافعات الشوكية', 'Forklifts'),
      description: T('رافعات شوكية ديزل وكهرباء وغاز لمناولة البضائع والطبالي داخل المستودعات والساحات والمصانع. نوفر خيارات مختلفة للحمولة وارتفاع الرفع ونوع الإطارات وبيئة التشغيل.', 'Diesel, electric and LPG forklifts for goods and pallet handling inside warehouses, yards and factories. Options cover different load capacities, lift heights, tyre types and operating environments.'),
      tags: T(['ديزل وكهرباء وغاز', 'مستودعات وساحات', 'ملحقات متنوعة'], ['Diesel, electric & LPG', 'Warehouse & yard', 'Multiple attachments'])
    },
    {
      image: 'assets/equipment/backhoe-loader.webp',
      number: '06',
      title: T('الباكهو لودر', 'Backhoe Loaders'),
      description: T('معدات متعددة الاستخدام تجمع بين الحفر والتحميل والتسوية لخدمة أعمال البنية التحتية وتجهيز المواقع والمرافق. يتم التنسيق حسب طبيعة التربة وعمق الحفر وحجم الأعمال ومدة التشغيل.', 'Versatile machines combining excavation, loading and grading for infrastructure, site preparation and utility works. Deployment is coordinated around soil conditions, digging depth, work volume and operating period.'),
      tags: T(['حفر وتحميل', 'تجهيز مواقع', 'أعمال مرافق'], ['Digging & loading', 'Site preparation', 'Utility works'])
    }
  ];

  const eq = d.createElement('section');
  eq.id = 'equipment';
  eq.className = 'sac equipment-portfolio';
  eq.innerHTML = `<div class="wrap"><div class="equipment-head"><div><span class="tag">${T('قسم المعدات', 'Equipment Portfolio')}</span><h2>${T('معدات متكاملة للمشاريع والمصانع والمستودعات.', 'A complete equipment range for projects, factories and warehouses.')}</h2></div><div><p class="lead">${T('نوفر حلول التوريد والتأجير والتشغيل حسب نوع المعدة والسعة ومدة الاستخدام وموقع المشروع. يساعدك فريقنا على تحديد الخيار المناسب، التحقق من التوفر، تنسيق النقل والوصول، ومتابعة الخدمة حتى الإغلاق.', 'We provide supply, rental and deployment solutions based on equipment type, capacity, required period and project location. Our team helps define the right option, confirm availability, coordinate transport and arrival, and follow the service through close-out.')}</p><div class="equipment-modes"><span>${T('توريد', 'Supply')}</span><span>${T('تأجير قصير وطويل الأجل', 'Short & long-term rental')}</span><span>${T('تشغيل حسب المشروع', 'Project deployment')}</span></div></div></div><div class="equipment-grid">${equipment.map(item => `<article class="equipment-card"><div class="equipment-photo"><img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async"><span class="equipment-number">${item.number}</span></div><div class="equipment-copy"><h3>${item.title}</h3><p>${item.description}</p><div class="equipment-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div><a href="#contact" class="equipment-link">${T('اطلب هذه المعدة ←', 'Request this equipment →')}</a></div></article>`).join('')}</div><div class="equipment-note"><div><b>${T('هل تحتاج معدة غير مدرجة؟', 'Need equipment not listed here?')}</b><p>${T('أرسل لنا المواصفات أو صورة المعدة المطلوبة، وسنراجع التوفر من خلال شبكة الموردين وملاك المعدات.', 'Send the required specifications or a reference image, and we will check availability through our supplier and equipment-owner network.')}</p></div><a class="btn primary" href="#contact">${T('أرسل طلبك', 'Send your request')}</a></div></div>`;
  about.after(eq);

  const services = ar ? [
    ['تأجير المعدات الثقيلة', 'توفير معدات المشاريع والمقاولات حسب نوع العمل والسعة ومدة التشغيل وموقع المشروع.'],
    ['الشاحنات والنقل البري', 'شاحنات وتريلات لنقل مواد البناء والبضائع والحاويات بين المدن والمواقع.'],
    ['نقل لو بد وهاي بد', 'نقل الآليات والمعدات والأحمال الكبيرة مع تنسيق التحميل والمسار والوصول.'],
    ['حلول المشاريع والمصانع', 'دعم تشغيلي دوري أو عند الطلب للمشاريع والمصانع والمستودعات.'],
    ['نقل المواد والشحنات', 'تنسيق الاستلام والتحميل والنقل والتسليم مع متابعة حالة الطلب.'],
    ['الصيانة والطوارئ', 'ربط المعدات والشاحنات بالورش المتنقلة والثابتة وخدمات الأعطال العاجلة.'],
    ['قطع الغيار والملحقات', 'تنسيق قطع الغيار والبطاريات والشواحن والشوك والملحقات المتخصصة.'],
    ['المقارنة والمتابعة', 'مقارنة السعر والتوفر والقدرة التشغيلية، ثم متابعة التنفيذ حتى الإغلاق.']
  ] : [
    ['Heavy Equipment Rental', 'Project and construction equipment matched to the work type, capacity, operating period and location.'],
    ['Trucks & Road Transport', 'Trucks and trailers for building materials, cargo and containers between cities and project sites.'],
    ['Low Bed & High Bed Transport', 'Machinery and oversized-load transport with loading, route and arrival coordination.'],
    ['Project & Factory Solutions', 'Scheduled or on-demand operating support for projects, factories and warehouses.'],
    ['Materials & Shipment Transport', 'Pickup, loading, transport and delivery coordination with order-status follow-up.'],
    ['Maintenance & Emergency', 'Access to mobile and fixed workshops for planned service and urgent breakdown support.'],
    ['Parts & Attachments', 'Coordination of parts, batteries, chargers, forks and specialist attachments.'],
    ['Comparison & Follow-up', 'Price, availability and capability compared before execution is monitored through close-out.']
  ];

  const serviceSection = d.createElement('section');
  serviceSection.id = 'sacServices';
  serviceSection.className = 'sac panel';
  serviceSection.innerHTML = `<div class="wrap"><div class="section-intro"><span class="tag">${T('خدماتنا', 'Our Services')}</span><h2>${T('معدات ونقل ودعم تشغيلي ضمن مسار واحد واضح.', 'Equipment, transport and operating support through one clear workflow.')}</h2><p>${T('بدلاً من التنسيق مع عدة جهات، تتولى SAC Logistics مطابقة الاحتياج واختيار مقدم الخدمة والجدولة والمتابعة حتى اكتمال الطلب.', 'Instead of coordinating multiple vendors, SAC Logistics matches the requirement, selects the provider, schedules execution and follows the order through completion.')}</p></div><div class="service-grid-clean">${services.map((x, i) => `<article class="service-card-clean"><b>${String(i + 1).padStart(2, '0')}</b><h3>${x[0]}</h3><p>${x[1]}</p><span class="card-arrow">↗</span></article>`).join('')}</div></div>`;
  eq.after(serviceSection);
}

F.addEventListener('load', () => {
  CA();
  setTimeout(CA, 700);
});
