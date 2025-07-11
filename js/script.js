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
});
