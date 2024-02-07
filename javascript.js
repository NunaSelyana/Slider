console.log('work');

//Исходные данные по слайдеру 
const sliderImages = document.querySelectorAll('.image'),
      sliderLine = document.querySelector('.slider__img'),
      sliderDots = document.querySelectorAll('.point_dot'),
      sliderArrow = document.querySelector('.nav_arrows'),
      sliderBtnNext = document.querySelector('.arrow_next'),
      sliderBtnPrev = document.querySelector('.arrow_prev'),

// Массив текста
let textOne = ["<p>Rostov-on-Don<br>LCD admiral</p>", "<p>Sochi<br>Thieves</p>","<p>Rostov-on-Don<br>Patriotic</p>"],
    tetxTwo = ["81 m2", "105 m2", "93 m2"],
    tetxThree = ["3.5 months", "4 months", "3 months"];


//Переменные 
let sliderCount = 0,
    sliderWidth;
    

// Кнопки листания слайдов вперед и назадфз
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    moveSlider(sliderCount);
}


// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    moveSlider(sliderCount);
}

//Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

 function initDots() {
        let dotsWrapper = document.createElement("div");
        dotsWrapper.className = "slider__dots"; 
        sliderImages.forEach((_, index) => {
          let dot = document.createElement("div");
          dot.className = `slider__dots-item n${index} ${index ? "" : "active"}`;
          dot.dataset.index = index;
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          });
          dotsWrapper.appendChild(dot);

        });
        document.querySelector('.nav_point').appendChild(dotsWrapper);

      }

      initDots();

document.querySelector('.slider__dots').addEventListener('click', function(event) {
    const target = event.target
    if (target.hasAttribute('data-index')) {
        sliderCount = target.getAttribute('data-index');
        rollSlider();
        moveSlider(sliderCount);
    }
})

 function moveSlider(num) {
        let dotsWrapper = document.querySelector(".slider__dots");
            dotsWrapper.querySelector(".active").classList.remove("active");
            dotsWrapper.querySelector(`.n${num}`).classList.add("active");
        
        document.getElementById('city_name').innerHTML = textOne[num];
        document.getElementById('apartment_text').innerText = tetxTwo[num];
        document.getElementById('time').innerText = tetxThree[num];

        document.querySelector('.active-link').classList.remove("active-link");
        document.getElementById(`city__link_${num}`).classList.add('active-link');
    }



document.getElementById('link').addEventListener('click', function(event) {
    event.preventDefault(); //сбрасываем дефолтные значения
    const target = event.target //следит за таргетом
    if (target.hasAttribute('data-index')) {
        sliderCount = target.getAttribute('data-index');
        rollSlider();
        moveSlider(sliderCount)
    }

})
