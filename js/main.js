const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const wrapper = document.querySelectorAll(".slides div");
const spans = document.querySelectorAll('#cards span')

let counter = 0;

spans.forEach(elm =>{
    elm.addEventListener('click', (e)=>{
        counter = e.target.dataset.ind
        slideImg()
    })
})

spans[0].classList.add('button_active')
const slideImg = () => {
    wrapper.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        slide.style.transition = ".4s";
    });
    spans.forEach(elm => elm.classList.remove('button_active'))
    spans[counter].classList.add('button_active')
};
const nextSlide = () => {
    counter++;
    if (counter === wrapper.length) {
        counter = 0;
    }
    slideImg();
};
const prevSlide = () => {
    if (counter === 0) {
        counter = wrapper.length - 1
        slideImg();
    } else {
        counter--;
        slideImg();
    }
};

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);
