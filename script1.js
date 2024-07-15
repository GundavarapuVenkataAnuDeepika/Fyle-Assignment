const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');

  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

showSlide(currentSlide);

// Auto-play slider
setInterval(() => {
  nextSlide();
}, 5000); // change the interval time as needed

// Add new slides dynamically
function addSlide(imageUrl, hoverContent) {
  const newSlide = document.createElement('div');
  newSlide.className = 'slide';
  newSlide.innerHTML = `
    <img src="${imageUrl}" alt="Image">
    <div class="hover-content">
      <h3>${hoverContent.title}</h3>
      <p>${hoverContent.text}</p>
      <a href="${hoverContent.link}" target="_blank" class="read-more">READ MORE</a>
    </div>
  `;
  document.querySelector('.slider-container').appendChild(newSlide);

  const newDot = document.createElement('span');
  newDot.className = 'dot';
  document.querySelector('.dots').appendChild(newDot);

  slides = document.querySelectorAll('.slide');
  dots = document.querySelectorAll('.dot');
}