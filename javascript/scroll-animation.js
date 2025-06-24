document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('scrolling-image');
    const container = document.getElementById('scroll-image-container');

    if (!image || !container) {
        return;
    }

    const imageLoadedPromise = new Promise(resolve => {
        if (image.complete) resolve();
        else image.onload = resolve;
    });

    imageLoadedPromise.then(() => {
        const imageWidth = image.offsetWidth;
        const containerWidth = container.offsetWidth;

        function updateImagePosition() {
            const containerRect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (containerRect.bottom < 0 || containerRect.top > viewportHeight) {
                return; 
            }

            const scrollDistanceForAnimation = viewportHeight + containerRect.height;
            const currentPosition = viewportHeight - containerRect.top;
            
            let progress = currentPosition / scrollDistanceForAnimation;
            progress = Math.max(0, Math.min(1, progress));

            const totalTravelDistance = containerWidth + imageWidth;
            const translateX = -(totalTravelDistance * progress);

            requestAnimationFrame(() => {
                image.style.transform = `translate(${translateX}px, -50%)`;
            });
        }

        window.addEventListener('scroll', updateImagePosition, { passive: true });
        window.addEventListener('resize', updateImagePosition);
        
        updateImagePosition();
    });
});
