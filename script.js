const upcomingSlide = document.querySelector('.upcomingSlider');
const upcomingImages = document.querySelectorAll('.upcomingSlider img');
const tourBody = document.querySelector('.tour_body');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = upcomingImages[0].clientWidth;

upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listener

nextBtn.addEventListener('click', () => {
    if (counter >= upcomingImages.length -1) return;
    upcomingSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    upcomingSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

upcomingSlide.addEventListener('transitionend', () => {
    if (upcomingImages[counter].id === 'lastClone') {
        upcomingSlide.style.transition = "none";
        counter = upcomingImages.length -2;
        upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (upcomingImages[counter].id === 'firstClone') {
        upcomingSlide.style.transition = "none";
        counter = upcomingImages.length - counter;
        upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});