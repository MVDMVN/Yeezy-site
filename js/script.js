document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider__image');
  const dots = document.querySelectorAll('.slider__dot');
  const progressFgParts = document.querySelectorAll('.progress-fg-part');
  const total = slides.length;

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    progressFgParts.forEach((part, i) => {
      part.classList.toggle('active', i === index);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index, 10);
      goToSlide(index);
    });
  });

  progressFgParts.forEach((part, i) => {
    part.addEventListener('click', () => {
      goToSlide(i);
    });
  });

  goToSlide(0);

  // 🔧 FAQ logic — внутри DOMContentLoaded!
  if (window.innerWidth <= 1024) {
    document.querySelectorAll('.faq-question').forEach((question) => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        item.classList.toggle('open');
      });
    });
  }
});



 mapboxgl.accessToken = 'pk.eyJ1IjoibWFrc29uMTk5MSIsImEiOiJjbWN6djNqcjkxMjJtMmtzM24yZmR1aWI2In0.jwWvWa-oJOnErDReHqRS-w'; // вставь свой токен сюда

// Инициализация карты
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v11', // можно заменить на light-v11 или другие
  center: [30.5234, 50.4501], // Киев
  zoom: 11
});

// Список адресов с координатами
const locations = [
  { id: 1, name: 'просп. Владимира Ивасюка, 4, корпус 3', coords: [30.5206, 50.4169] },
  { id: 2, name: 'Днепровская набережная, 14А', coords: [30.6025, 50.4020] },
  { id: 3, name: 'ул. Велика Житомирская, 8А', coords: [30.5130, 50.4560] },
  { id: 4, name: 'ул. Андрея Верхогляда, 11', coords: [30.4685, 50.4370] },
  { id: 5, name: 'ул. Антоновича 44', coords: [30.5166, 50.4333] }
];

// Добавление маркеров
locations.forEach(loc => {
  const el = document.createElement('div');
  el.className = 'marker-number';
  el.innerText = loc.id;

  new mapboxgl.Marker(el)
    .setLngLat(loc.coords)
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(`${loc.id}. ${loc.name}`))
    .addTo(map);
});



const haircareTrack = document.querySelector('.haircare-track');
const leftArrow = document.querySelector('.haircare-arrow.left');
const rightArrow = document.querySelector('.haircare-arrow.right');

let haircareScroll = 0;
const cardWidth = 270;

leftArrow.addEventListener('click', () => {
  haircareScroll = Math.max(0, haircareScroll - cardWidth);
  haircareTrack.style.transform = `translateX(-${haircareScroll}px)`;
});

rightArrow.addEventListener('click', () => {
  const maxScroll = haircareTrack.scrollWidth - haircareTrack.clientWidth;
  haircareScroll = Math.min(maxScroll, haircareScroll + cardWidth);
  haircareTrack.style.transform = `translateX(-${haircareScroll}px)`;
});
