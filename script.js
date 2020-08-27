const upcomingSlide = document.querySelector('.upcomingSlider');
const upcomingImages = document.querySelectorAll('.upcomingSlider img');


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 0;
let prevIndex = 0;
const size = upcomingImages[1].clientWidth;

upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listener

nextBtn.addEventListener('click', () => {
    upcomingSlide.style.transition = "transform: 0.4s ease-in-out";
    upcomingImages[prevIndex].classList.add("hidden");
    counter++;
    prevIndex = counter;
    if (counter === 3) {
        counter = 0;  
    }
    
    upcomingImages[counter].classList.remove("hidden");
    upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    prevIndex = counter;
       
});

prevBtn.addEventListener('click', () => {
    upcomingSlide.style.transition = "transform 0.4s ease-in-out"
    upcomingImages[prevIndex].classList.add("hidden");
    counter--;
    prevIndex = counter;
    if (counter === -1) {
        counter = upcomingImages.length - 1;
    }
    upcomingImages[counter].classList.remove("hidden");
    upcomingSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    prevIndex = counter;
   
});

/* 
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
*/
