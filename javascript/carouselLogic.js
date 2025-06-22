// Carousel slider logic
const track = document.getElementById('carousel-track');
const totalCards = 5;
const visibleCards = window.innerWidth < 768 ? 1 : 3;
let currentIndex = 0;
let interval;
function updateCarousel() {
  const cardWidth = track.querySelector('div').offsetWidth;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
function startCarousel() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards;
    // Masaüstünde 3 kart göster, mobilde 1 kart
    if (window.innerWidth >= 768 && currentIndex > totalCards - 3) currentIndex = 0;
    if (window.innerWidth < 768 && currentIndex > totalCards - 1) currentIndex = 0;
    updateCarousel();
  }, 5000);
}
function stopCarousel() {
  clearInterval(interval);
}
window.addEventListener('resize', () => {
  stopCarousel();
  updateCarousel();
  startCarousel();
});
updateCarousel();
startCarousel();
// Product Carousel slider logic
const productTrack = document.getElementById('product-carousel-track');
const productTotalCards = 6;
let productCurrentIndex = 0;
let productInterval;
function updateProductCarousel() {
  const cardWidth = productTrack.querySelector('div').offsetWidth;
  productTrack.style.transform = `translateX(-${productCurrentIndex * cardWidth}px)`;
}
function startProductCarousel() {
  productInterval = setInterval(() => {
    productCurrentIndex = (productCurrentIndex + 1) % productTotalCards;
    if (window.innerWidth >= 768 && productCurrentIndex > productTotalCards - 3) productCurrentIndex = 0;
    if (window.innerWidth < 768 && productCurrentIndex > productTotalCards - 1) productCurrentIndex = 0;
    updateProductCarousel();
  }, 5000);
}
function stopProductCarousel() {
  clearInterval(productInterval);
}
window.addEventListener('resize', () => {
  stopProductCarousel();
  updateProductCarousel();
  startProductCarousel();
});
updateProductCarousel();
startProductCarousel();