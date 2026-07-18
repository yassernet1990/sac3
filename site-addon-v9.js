const f=document.querySelector('iframe');
const logoMarkup=(extraClass='')=>`<svg class="sac-logo-svg ${extraClass}" viewBox="60 60 390 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SAC Logistics"><g class="sac-logo-group" tabindex="0"><polygon class="sac-logo-part sac-logo-top" points="77,172 211,245 277,186 166,161 193,130 365,130 434,75 170,75"/><polygon class="sac-logo-part sac-logo-bottom" points="411,200 330,185 179,321 217,358"/></g></svg>`;

function bindLogoMotion(mark){
  if(mark.dataset.motionBound||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  mark.dataset.motionBound='1';
  mark.addEventListener('pointermove',e=>{
    const r=mark.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    mark.style.setProperty('--logo-ry',`${x*14}deg`);
    mark.style.setProperty('--logo-rx',`${-y*14}deg`);
  });
  mark.addEventListener('pointerleave',()=>{
    mark.style.setProperty('--logo-ry','0deg');
    mark.style.setProperty('--logo-rx','0deg');
  });
}

async function syncFavicon(){
  try{
    const themes=await fetch('themes-v6.json?v=19').then(r=>r.json());
    const key=new URLSearchParams(location.search).get('theme')||localStorage.getItem('sac-theme')||'emerald';
    const palette=themes[key]||themes.emerald;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="104" fill="${palette[0]}"/><g transform="translate(-38 48) scale(1.08)"><polygon fill="#fff" points="77,172 211,245 277,186 166,161 193,130 365,130 434,75 170,75"/><polygon fill="${palette[2]}" points="411,200 330,185 179,321 217,358"/></g></svg>`;
    let icon=document.querySelector('link[rel="icon"]');
    if(!icon){icon=document.createElement('link');icon.rel='icon';document.head.appendChild(icon)}
    icon.type='image/svg+xml';
    icon.href='data:image/svg+xml,'+encodeURIComponent(svg);
    let color=document.querySelector('meta[name="theme-color"]');
    if(!color){color=document.createElement('meta');color.name='theme-color';document.head.appendChild(color)}
    color.content=palette[0];
  }catch(e){}
}

function X(){
  const d=f.contentDocument;
  if(!d)return;
  if(!d.getElementById('arabicUI')){
    const l=d.createElement('link');
    l.id='arabicUI';l.rel='stylesheet';l.href='arabic-ui.css?v=11';
    d.head.appendChild(l);
  }
  if(!d.getElementById('equipmentUI')){
    const l=d.createElement('link');
    l.id='equipmentUI';l.rel='stylesheet';l.href='equipment-v12.css?v=12';
    d.head.appendChild(l);
  }
  if(!d.getElementById('logoUI')){
    const l=d.createElement('link');
    l.id='logoUI';l.rel='stylesheet';l.href='logo-v19.css?v=19';
    d.head.appendChild(l);
  }
  if(!d.getElementById('polishUI')){
    const l=d.createElement('link');
    l.id='polishUI';l.rel='stylesheet';l.href='polish-v20.css?v=20';
    d.head.appendChild(l);
  }
  const brand=d.querySelector('.brand');
  if(brand&&!brand.dataset.sacLogo){
    brand.dataset.sacLogo='1';brand.classList.add('sac-brand');
    brand.innerHTML=`<span class="sac-logo-mark">${logoMarkup()}</span><span class="sac-brand-wordmark">SAC <b>LOGISTICS</b></span>`;
    bindLogoMotion(brand.querySelector('.sac-logo-mark'));
  }
  const ar=d.documentElement.lang==='ar';
  const h=d.querySelector('.hero h1');
  const heroP=d.querySelector('.hero-copy>p');
  const eye=d.querySelector('.hero .eyebrow');
  if(eye){eye.dataset.en='Jeddah • Serving Saudi Arabia';eye.dataset.ar='جدة • نخدم جميع مناطق المملكة';eye.textContent=ar?eye.dataset.ar:eye.dataset.en}
  if(h){h.dataset.en='EQUIPMENT, TRUCKS & <span>LOGISTICS SUPPORT.</span>';h.dataset.ar='معدات وشاحنات<br>ودعم لوجستي<br><span>من الطلب إلى التنفيذ.</span>';h.innerHTML=ar?h.dataset.ar:h.dataset.en}
  if(heroP){heroP.dataset.en='SAC Logistics connects contractors, factories, warehouses and infrastructure projects with the right equipment, trucks, transport and operating support—coordinated through one accountable partner.';heroP.dataset.ar='تربط SAC Logistics المقاولين والمصانع والمستودعات ومشاريع البنية التحتية بالمعدات والشاحنات والنقل والدعم التشغيلي المناسب، من خلال جهة واحدة تدير التنسيق والمتابعة.';heroP.textContent=ar?heroP.dataset.ar:heroP.dataset.en}
  const heroBtns=d.querySelectorAll('.hero .btn');
  if(heroBtns[0]){heroBtns[0].dataset.en='Request equipment or truck →';heroBtns[0].dataset.ar='اطلب معدة أو شاحنة ←';heroBtns[0].textContent=ar?heroBtns[0].dataset.ar:heroBtns[0].dataset.en}
  if(heroBtns[1]){heroBtns[1].dataset.en='Explore solutions';heroBtns[1].dataset.ar='استعرض الحلول';heroBtns[1].textContent=ar?heroBtns[1].dataset.ar:heroBtns[1].dataset.en}
  const stats=d.querySelectorAll('.stat');
  const statsEn=[['24/7','Support & follow-up'],['KSA','Kingdom-wide network'],['ONE','Accountable partner'],['FLEX','Flexible solutions']];
  const statsAr=[['24/7','دعم ومتابعة'],['KSA','شبكة داخل المملكة'],['ONE','جهة تنسيق واحدة'],['FLEX','حلول مرنة']];
  stats.forEach((stat,index)=>{const strong=stat.querySelector('strong'),label=stat.querySelector('span'),en=statsEn[index],arabic=statsAr[index];if(!en||!arabic)return;strong.textContent=en[0];label.dataset.en=en[1];label.dataset.ar=arabic[1];label.textContent=ar?arabic[1]:en[1]});
  const card=d.querySelector('.c6');
  if(card){
    const t=card.querySelector('h3'),p=card.querySelector('p');
    if(t){t.dataset.en='Low Bed & High Bed Trucks';t.dataset.ar='شاحنات لو بد وهاي بد';t.textContent=ar?t.dataset.ar:t.dataset.en;}
    if(p){p.dataset.en='Heavy equipment transport for projects and industrial sites.';p.dataset.ar='نقل المعدات الثقيلة للمشاريع والمواقع الصناعية.';p.textContent=ar?p.dataset.ar:p.dataset.en;}
  }
  const service=d.querySelector('.service:nth-child(4)');
  if(service){
    const t=service.querySelector('h3'),p=service.querySelector('p');
    if(t){t.dataset.en='Low Bed & High Bed Transport';t.dataset.ar='نقل لو بد وهاي بد';t.textContent=ar?t.dataset.ar:t.dataset.en;}
    if(p){p.dataset.en='Low bed and high bed trucks for machinery, oversized loads and project logistics.';p.dataset.ar='شاحنات لو بد وهاي بد لنقل الآليات والأحمال الكبيرة وخدمات المشاريع.';p.textContent=ar?p.dataset.ar:p.dataset.en;}
  }
  const select=d.getElementById('type');
  if(select&&select.dataset.optionsLang!==(ar?'ar':'en')){
    const optionsAr=['تأجير معدات ثقيلة','كرينات ومعدات رفع','شاحنات نقل وتريلات','نقل لو بد / هاي بد','معدات مستودعات ورافعات شوكية','باكهو ومعدات مواقع','صيانة وقطع غيار','طلب آخر'];
    const optionsEn=['Heavy equipment rental','Cranes & lifting equipment','Transport trucks & trailers','Low bed / high bed transport','Warehouse equipment & forklifts','Backhoe & site equipment','Maintenance & spare parts','Other requirement'];
    const options=ar?optionsAr:optionsEn;
    select.innerHTML=options.map((text,index)=>`<option data-en="${optionsEn[index]}" data-ar="${optionsAr[index]}">${text}</option>`).join('');
    select.dataset.optionsLang=ar?'ar':'en';
  }
  const b=d.getElementById('lang');
  if(b&&!b.dataset.bound){
    b.dataset.bound='1';
    const U=()=>b.textContent=d.documentElement.lang==='ar'?'EN':'AR';
    U();b.addEventListener('click',()=>setTimeout(()=>{U();X()},0));
  }
  const foot=d.querySelector('.foot');
  if(foot&&!d.getElementById('adminLink')){
    const a=d.createElement('a');a.id='adminLink';a.className='admin-link';
    a.href='admin.html';a.target='_top';a.textContent='Admin';foot.appendChild(a);
  }
  const copyright=foot?.firstElementChild;
  if(copyright&&!copyright.querySelector('.footer-sac-mark')){
    copyright.insertAdjacentHTML('afterbegin',logoMarkup('footer-sac-mark'));
  }
  if(ar&&h)h.innerHTML=h.dataset.ar;
}
syncFavicon();
f.addEventListener('load',()=>{X();setTimeout(X,500);setTimeout(X,1500)});
