const upcomingSlide = document.querySelector('.upcomingSlider');
const upcomingImages = document.querySelectorAll('.upcomingSlider img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = upcomingImages[0].clientWidth;

upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listener

nextBtn.addEventListener('click', () => {
    upcomingSlide.style.transition = "transform 0.4 ease-in-out"
    counter++;
    upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});