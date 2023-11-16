document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const bulletsContainer = document.getElementById('bullets');
    let currentIndex = 0;

    slides.forEach((_, index) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.addEventListener('click', () => goToSlide(index));
        bulletsContainer.appendChild(bullet);
    });

    function updateBullets() {
        const bullets = document.querySelectorAll('.bullet');
        bullets.forEach((bullet, index) => {
            bullet.classList.toggle('active-bullet', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        const translateValue = `translateX(${-index * 100}%)`;
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = translateValue;
        updateBullets();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const translateValue = `translateX(${-currentIndex * 100}%)`;
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = translateValue;
        updateBullets();
    }

    setInterval(nextSlide, 3000);
});


    // Parallax effect for the hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    });