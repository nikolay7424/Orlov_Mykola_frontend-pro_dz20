const imgWrapper = document.querySelector('.img-wrapper')
const slides = Array.from(imgWrapper.children)
const slidesCount = slides.length
let slideWidth = slides[0].getBoundingClientRect().width

const rightButton = document.getElementById('right-button')
const leftButton = document.getElementById('left-button')

rightButton.addEventListener('click', nextSlide)
leftButton.addEventListener('click', previousSlide)

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
  }
slides.forEach(setSlidePosition)

let translateX = 0
let currentSlide = 1
function nextSlide() {
    leftButton.classList.remove('is-hidden')
    translateX -= slideWidth
    imgWrapper.style.transform = `translateX(${translateX}px)`
    currentSlide++
    if(currentSlide === slidesCount) {
        rightButton.classList.add('is-hidden')
    }
}

function previousSlide() {
    translateX += slideWidth
    imgWrapper.style.transform = `translateX(${translateX}px)`
    currentSlide--
    rightButton.classList.remove('is-hidden')
    if(currentSlide === 1) {
        leftButton.classList.add('is-hidden')
    }
}