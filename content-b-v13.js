const FF = document.querySelector('iframe');

function CB() {
  const d = FF.contentDocument;
  if (!d || d.getElementById('sacWorkflow')) return;

  const services = d.getElementById('sacServices');
  if (!services) {
    setTimeout(CB, 200);
    return;
  }

  const ar = d.documentElement.lang === 'ar';
  const T = (a, e) => ar ? a : e;

  const workflowItems = ar ? [
    ['استلام الطلب', 'تحديد نوع المعدة أو الشاحنة، السعة، الموقع، المدة والموعد المطلوب.'],
    ['دراسة الاحتياج', 'مراجعة ظروف التشغيل والتحميل والمسار والمتطلبات الفنية للموقع.'],
    ['اختيار الحل', 'مقارنة التوفر والسعر والمواصفات والقدرة على تنفيذ الخدمة.'],
    ['الجدولة والتنفيذ', 'تأكيد الحجز وتنسيق الوصول أو التحميل والتشغيل والتسليم.'],
    ['المتابعة والإغلاق', 'متابعة الطلب حتى اكتمال الخدمة وتوثيق الملاحظات والتسليم.']
  ] : [
    ['Receive the Request', 'Define equipment or truck type, capacity, location, duration and required date.'],
    ['Study the Requirement', 'Review operating, loading, route and site-specific technical conditions.'],
    ['Select the Solution', 'Compare availability, price, specification and execution capability.'],
    ['Schedule & Execute', 'Confirm booking and coordinate arrival, loading, operation and delivery.'],
    ['Follow Up & Close', 'Monitor the order through completion, handover and service close-out.']
  ];

  const workflow = d.createElement('section');
  workflow.id = 'sacWorkflow';
  workflow.className = 'sac light workflow-section';
  workflow.innerHTML = `<div class="wrap"><div class="section-intro"><span class="tag">${T('كيف نعمل', 'How We Work')}</span><h2>${T('خمس خطوات واضحة من الطلب حتى اكتمال التنفيذ.', 'Five clear steps from request through completion.')}</h2><p>${T('مسار واحد يوضح المسؤوليات ويقلل التأخير وتعدد الاتصالات.', 'One coordinated workflow that clarifies responsibility and reduces delay and fragmented communication.')}</p></div><div class="steps steps-five">${workflowItems.map((item, index) => `<article class="step"><span class="step-index">${String(index + 1).padStart(2, '0')}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div></div>`;
  services.after(workflow);

  const sectors = ar ? [
    'المقاولات والبنية التحتية',
    'المصانع ومواد البناء',
    'المستودعات والمراكز اللوجستية',
    'الموانئ وساحات الحاويات',
    'المشاريع الصناعية',
    'شركات التطوير العقاري',
    'الموردون والموزعون',
    'المشاريع الحكومية والخاصة'
  ] : [
    'Contracting & Infrastructure',
    'Factories & Building Materials',
    'Warehouses & Logistics Centers',
    'Ports & Container Yards',
    'Industrial Projects',
    'Real Estate Developers',
    'Suppliers & Distributors',
    'Government & Private Projects'
  ];

  const why = ar ? [
    ['شبكة تشغيل واسعة', 'الوصول إلى ملاك المعدات وشركات النقل والورش ومقدمي الخدمات.'],
    ['استجابة أسرع', 'التعامل المنظم مع الطلبات العاجلة والاحتياجات التشغيلية.'],
    ['خيارات مدروسة', 'مقارنة السعر والمواصفات والتوفر قبل اعتماد الحل.'],
    ['إدارة من جهة واحدة', 'تنسيق الحجز والنقل والتشغيل والمتابعة عبر نقطة اتصال واحدة.'],
    ['دعم مستمر', 'متابعة حالة الطلب والمعدة أو المركبة حتى اكتمال الخدمة.'],
    ['حلول مرنة', 'توريد أو تأجير قصير وطويل الأجل حسب حجم الاحتياج.']
  ] : [
    ['Broad Operating Network', 'Access to equipment owners, transport companies, workshops and specialist providers.'],
    ['Faster Response', 'Organized handling of urgent requests and changing operating requirements.'],
    ['Evaluated Options', 'Price, specification and availability compared before approval.'],
    ['One-Point Management', 'Booking, transport, operation and follow-up coordinated through one contact.'],
    ['Continuous Support', 'Order, equipment and vehicle status followed through service completion.'],
    ['Flexible Solutions', 'Supply or short- and long-term rental based on the scale of need.']
  ];

  const sectorSection = d.createElement('section');
  sectorSection.className = 'sac dark sectors-section';
  sectorSection.id = 'sacSectors';
  sectorSection.innerHTML = `<div class="wrap"><div class="section-intro"><span class="tag">${T('القطاعات التي نخدمها', 'Sectors We Serve')}</span><h2>${T('حلول للمشاريع والعمليات التي تعتمد على سرعة الموقع.', 'Support for projects and operations where site readiness matters.')}</h2><p>${T('نخدم احتياجات القطاعين الحكومي والخاص في مختلف مناطق المملكة.', 'Our network supports public- and private-sector requirements across Saudi Arabia.')}</p></div><div class="sector-list">${sectors.map((item, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${item}</span>`).join('')}</div><div class="why-heading"><span class="tag">${T('لماذا SAC Logistics؟', 'Why SAC Logistics?')}</span><h3>${T('تنفيذ أوضح، خيارات أوسع ومسؤولية واحدة.', 'Clearer execution, broader choice and one accountable partner.')}</h3></div><div class="why-grid why-grid-six">${why.map(item => `<article class="why-card"><i>✓</i><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div></div>`;
  workflow.after(sectorSection);

  const future = ar ? [
    'طلب المعدات والشاحنات مباشرة',
    'مقارنة الخيارات والتوفر',
    'تحديد مواقع الاستلام والتسليم',
    'تتبع حالة الطلب والتنفيذ',
    'توثيق التحميل والتسليم',
    'متابعة الفواتير والمستندات'
  ] : [
    'Request equipment and trucks directly',
    'Compare options and availability',
    'Set pickup and delivery locations',
    'Track order and execution status',
    'Document loading and delivery',
    'Follow invoices and documents'
  ];

  const vision = d.createElement('section');
  vision.className = 'sac light vision-section';
  vision.id = 'sacVision';
  vision.innerHTML = `<div class="wrap vision-layout"><div><span class="tag">${T('رؤيتنا', 'Our Vision')}</span><h2>${T('من إدارة ميدانية منظمة إلى منصة لوجستية رقمية موحدة.', 'From organized field execution to one digital logistics platform.')}</h2><p class="lead">${T('نطوّر نموذجًا يربط العميل وملاك المعدات وشركات النقل والورش في مسار واضح يمكن طلبه ومتابعته وتوثيقه من مكان واحد.', 'We are developing a model that connects clients, equipment owners, transport companies and workshops through one workflow that can be requested, tracked and documented in one place.')}</p></div><div class="vision-box"><span class="vision-label">${T('المنصة المستقبلية', 'Future Platform')}</span><ul class="future-list">${future.map(item => `<li><i>✓</i>${item}</li>`).join('')}</ul></div></div>`;
  sectorSection.after(vision);

  const faqItems = ar ? [
    ['كيف أطلب معدة أو شاحنة؟', 'أرسل نوع المعدة أو المركبة، السعة أو الحمولة، الموقع، المدة والموعد المطلوب. يراجع الفريق التفاصيل ويقترح الخطوة التالية.'],
    ['هل الخدمة توريد أم تأجير؟', 'نوفر خيارات التوريد والتأجير القصير والطويل الأجل والتشغيل حسب المشروع، وفق نوع المعدة والتوفر.'],
    ['هل تغطون جميع مناطق المملكة؟', 'تتم دراسة الطلبات في مختلف مناطق المملكة من خلال شبكة الموردين وملاك المعدات وشركات النقل.'],
    ['هل يمكن توفير مشغل أو سائق؟', 'يمكن تنسيق المعدة أو المركبة مع المشغل أو السائق عندما يكون ذلك متاحًا وضمن نطاق الطلب.'],
    ['كيف يتم اختيار المورد؟', 'تتم المقارنة حسب المطابقة الفنية والسعر والموقع والتوفر والقدرة التشغيلية وسجل التنفيذ.'],
    ['هل تتعاملون مع الطلبات العاجلة؟', 'نراجع الطلبات العاجلة مباشرة ونوضح أسرع خيار متاح وموعد الوصول المتوقع قبل التأكيد.']
  ] : [
    ['How do I request equipment or a truck?', 'Share the asset type, capacity or load, location, operating period and required date. The team reviews the details and proposes the next step.'],
    ['Do you provide supply or rental?', 'Options include supply, short- and long-term rental and project-based deployment, subject to equipment type and availability.'],
    ['Do you cover all regions of Saudi Arabia?', 'Requests across the Kingdom are assessed through our network of suppliers, equipment owners and transport companies.'],
    ['Can an operator or driver be included?', 'Equipment or vehicles can be coordinated with an operator or driver when available and included in the requested scope.'],
    ['How is a provider selected?', 'Options are compared by technical match, price, location, availability, operating capability and execution record.'],
    ['Can you handle urgent requests?', 'Urgent requirements are reviewed directly, with the fastest available option and expected arrival clarified before confirmation.']
  ];

  const faq = d.createElement('section');
  faq.id = 'sacFAQ';
  faq.className = 'sac faq-section';
  faq.innerHTML = `<div class="wrap faq-layout"><div class="faq-intro"><span class="tag">${T('الأسئلة الشائعة', 'Frequently Asked Questions')}</span><h2>${T('إجابات واضحة قبل أن تبدأ طلبك.', 'Clear answers before you place a request.')}</h2><p>${T('إذا كان احتياجك غير اعتيادي، أرسل المواصفات أو صورة مرجعية وسنتولى المراجعة.', 'For an unusual requirement, send the specification or a reference image and we will review it.')}</p></div><div class="faq-list">${faqItems.map((item, index) => `<details${index === 0 ? ' open' : ''}><summary>${item[0]}<span>+</span></summary><div class="faq-answer">${item[1]}</div></details>`).join('')}</div></div>`;
  vision.after(faq);

  const cta = d.createElement('section');
  cta.id = 'sacCTA';
  cta.className = 'cta-wide cta-polished';
  cta.innerHTML = `<div class="wrap"><span class="tag">${T('ابدأ الطلب', 'Start a Request')}</span><h2>${T('أخبرنا بالمعدة أو الشاحنة أو الخدمة المطلوبة، وسننسّق الخطوة التالية.', 'Tell us what equipment, truck or logistics service you need, and we will coordinate the next step.')}</h2><div class="buttons"><a class="btn primary" href="#contact">${T('اطلب عرض سعر ←', 'Request a quotation →')}</a><a class="btn outline" href="#equipment">${T('استعرض المعدات', 'Explore equipment')}</a></div></div>`;
  faq.after(cta);

  const quick = d.createElement('a');
  quick.id = 'sacQuick';
  quick.className = 'quick-request';
  quick.href = '#contact';
  quick.innerHTML = `<span class="quick-dot"></span><span>${T('اطلب الآن', 'Request now')}</span><b>↗</b>`;
  d.body.appendChild(quick);
}

FF.addEventListener('load', () => {
  CB();
  setTimeout(CB, 900);
});
