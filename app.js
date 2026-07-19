const font = document.createElement('link');
font.rel = 'stylesheet';
font.href = 'https://fonts.googleapis.com/css2?family=Alexandria:wght@400;600;700;800&display=swap';
document.head.appendChild(font);

const root = document.documentElement;
const languageButton = document.getElementById('lang');
const video = document.querySelector('.hero video');

if (video) {
  const sourceUrl = 'https://videos.pexels.com/video-files/32838797/13996856_3840_2160_30fps.mp4';
  const source = video.querySelector('source');

  if (source) {
    source.src = sourceUrl;
    video.load();
  } else {
    video.src = sourceUrl;
  }

  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  const playback = video.play();
  if (playback?.catch) playback.catch(() => {});
}

function L(language) {
  root.lang = language;
  root.dir = language === 'ar' ? 'rtl' : 'ltr';
  languageButton.textContent = language === 'ar' ? 'EN' : 'AR';

  document.querySelectorAll('[data-en]').forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  document.querySelectorAll('[data-ph-en]').forEach((element) => {
    element.placeholder = element.dataset[language === 'ar' ? 'phAr' : 'phEn'];
  });

  localStorage.setItem('sac-lang', language);
  root.classList.add('booted');
}

languageButton.onclick = () => L(root.lang === 'en' ? 'ar' : 'en');
L(localStorage.getItem('sac-lang') || 'en');

const quoteForm = document.getElementById('quote');
if (quoteForm) {
  quoteForm.onsubmit = (event) => {
    event.preventDefault();
    const isArabic = root.lang === 'ar';
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').selectedOptions[0].text;
    const details = document.getElementById('details').value;
    const message = isArabic
      ? `مرحباً SAC Logistics، أنا ${name}. أحتاج ${type}. التفاصيل: ${details}`
      : `Hello SAC Logistics, I am ${name}. I need ${type}. Details: ${details}`;
    open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };
}
