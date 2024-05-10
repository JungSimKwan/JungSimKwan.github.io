const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');
const langBtn = document.getElementById('lang-btn');
const langText = document.getElementById('lang-text');
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');
const aboutTitle = document.getElementById('about-title');
const aboutDescription = document.getElementById('about-description');
const navLinks = document.querySelectorAll('#nav-links a');
const galleryContainer = document.querySelector('.gallery-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let isEnglish = true;
let currentIndex = 0;
const images = galleryContainer.getElementsByTagName('img');
let isSwipeEnabled = false;
let startX, currentX, diffX;

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

langBtn.addEventListener('click', () => {
  isEnglish = !isEnglish;
  updateLanguage();
});

function updateLanguage() {
  // ... (previous language update code) ...
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
});

function updateGallery() {
  galleryContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

galleryContainer.addEventListener('touchstart', (e) => {
  isSwipeEnabled = true;
  startX = e.touches[0].clientX;
});

galleryContainer.addEventListener('touchmove', (e) => {
  if (!isSwipeEnabled) return;
  currentX = e.touches[0].clientX;
  diffX = startX - currentX;
  galleryContainer.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diffX}px))`;
});

galleryContainer.addEventListener('touchend', () => {
  isSwipeEnabled = false;
  if (diffX > 50) {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (diffX < -50) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  updateGallery();
});