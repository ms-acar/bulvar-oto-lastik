  // Product Carousel - Combined for desktop and mobile
  document.addEventListener('DOMContentLoaded', () => {
    const productTrack = document.getElementById('product-carousel-track');
    const nextButton = document.getElementById('product-next');
    const prevButton = document.getElementById('product-prev');
    let productInterval;
    
    if (productTrack) {
      // Desktop otomatik kaydırma (sadece masaüstünde)
      function startProductCarousel() {
        if (window.innerWidth >= 768) {
          productInterval = setInterval(() => {
            const card = productTrack.querySelector('.flex-shrink-0');
            if (card) {
              const cardWidth = card.offsetWidth;
              productTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });
              
              // Son karta geldiğinde başa dön
              if (productTrack.scrollLeft >= productTrack.scrollWidth - productTrack.clientWidth - 10) {
                setTimeout(() => {
                  productTrack.scrollTo({ left: 0, behavior: 'smooth' });
                }, 500);
              }
            }
          }, 5000);
        }
      }
      
      // Manuel navigasyon butonları
      if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
          const card = productTrack.querySelector('.flex-shrink-0');
          if (card) {
            const cardWidth = card.offsetWidth;
            productTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        });

        prevButton.addEventListener('click', () => {
          const card = productTrack.querySelector('.flex-shrink-0');
          if (card) {
            const cardWidth = card.offsetWidth;
            productTrack.scrollBy({ left: -cardWidth, behavior: 'smooth' });
          }
        });
      }
      
      // Pencere boyutu değiştiğinde interval'i yeniden başlat
      window.addEventListener('resize', () => {
        if (productInterval) {
          clearInterval(productInterval);
        }
        startProductCarousel();
      });
      
      // Başlangıçta carousel'i başlat
      startProductCarousel();
    }
  });

  // Testimonial Carousel
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-track');
    if (track) {
      const totalCards = 5;
      let currentIndex = 0;
      let interval;
      
      function updateCarousel() {
        const cardWidth = track.querySelector('div').offsetWidth;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
      
      function startCarousel() {
        interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalCards;
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
    }
  });