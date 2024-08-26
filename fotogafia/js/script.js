document.addEventListener('DOMContentLoaded', function() {
  const carrossel = document.getElementById('carrossel');
  const items = carrossel.querySelectorAll('.carrossel-item');
  let currentIndex = 0;

  function moveToNextImage() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarrossel();
  }

  function updateCarrossel() {
      const offset = -currentIndex * 100;
      carrossel.style.transform = `translateX(${offset}%)`;
  }

  items.forEach(item => {
      item.addEventListener('click', moveToNextImage);
  });

  // Inicialize o carrossel
  updateCarrossel();
});
