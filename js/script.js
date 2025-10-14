document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.project-card');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    function showSlide(index) {
        // Ocultar todas las diapositivas
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        // Asegurarse de que el índice se mantenga dentro de los límites
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        // Mostrar la diapositiva correcta
        slides[currentIndex].classList.add('active');
    }

    // Event Listeners para los botones
    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Iniciar el carrusel mostrando la primera diapositiva
    showSlide(currentIndex);
});