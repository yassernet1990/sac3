const f=document.querySelector('iframe');
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
  const ar=d.documentElement.lang==='ar';
  const h=d.querySelector('.hero h1');
  if(h)h.dataset.ar='معدات لوجستية<br>تحرّك<br>أعمالك.';
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
  const option=d.querySelector('#type option:nth-child(4)');
  if(option){option.dataset.en='Low Bed / High Bed Trucks';option.dataset.ar='شاحنات لو بد / هاي بد';option.textContent=ar?option.dataset.ar:option.dataset.en;}
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
  if(ar&&h)h.innerHTML=h.dataset.ar;
}
f.addEventListener('load',()=>{X();setTimeout(X,500);setTimeout(X,1500)});
