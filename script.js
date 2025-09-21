// Hamburger Menu Toggle
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('current'));
    link.classList.add('current');
  });
});

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Scroll to Top & Fade-in Sections
const scrollBtn = document.getElementById('scrollBtn');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) scrollBtn.classList.remove('hidden');
  else scrollBtn.classList.add('hidden');

scrollBtn.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
});

  document.querySelectorAll('.fade-in').forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) section.classList.add('visible');
  });
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

// Lightbox for Projects & Certificates with navigation
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
let lightboxImgs = Array.from(document.querySelectorAll('.lightbox-img'));
let currentIndex = 0;

lightboxImgs.forEach((img, i) => {
  img.addEventListener('click', () => {
    currentIndex = i;
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + lightboxImgs.length) % lightboxImgs.length;
  lightboxImg.src = lightboxImgs[currentIndex].src;
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % lightboxImgs.length;
  lightboxImg.src = lightboxImgs[currentIndex].src;
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) lightbox.classList.add('hidden');
});

// Hero typing effect
const heroText = ["Hi, I'm Charan Mahendaran ", "Software Developer", "IoT Enthusiast", "Learner"];
let heroIndex = 0;
let charIndex = 0;
const heroElement = document.querySelector("#home h2");

function typeHeroText() {
  if(heroIndex >= heroText.length) heroIndex = 0;
  const currentText = heroText[heroIndex];
  heroElement.textContent = currentText.slice(0, charIndex++);
  if(charIndex <= currentText.length) setTimeout(typeHeroText, 100);
  else {
    setTimeout(() => { charIndex = 0; heroIndex++; typeHeroText(); }, 1500);
  }
}
typeHeroText();

const btn = document.getElementById('gradientBtn');

  btn.addEventListener('mouseenter', () => {
    btn.style.background = 'linear-gradient(to right, #000 0%, #111 60%, #2a1b33 70%, #10b981 75%, #22c55e 100%)';
    btn.querySelector('span').classList.add('text-amber-400');
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.background = 'linear-gradient(to right, #000 0%, #111 60%, #2a1b33 70%, #7c3aed 75%, #8b5cf6 100%)';
    btn.querySelector('span').classList.remove('text-amber-400');
  });