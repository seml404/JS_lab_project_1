function slider() {

    // LESSON 61 - SLIDER (SIMPLE VERSION)

    // ************************MY VERSION - fully working  ************************

    // const sliderCounter = document.querySelector("#current"),
    //     sliderTotalCounter = document.querySelector("#total"),
    //     sliderArrowPrev = document.querySelector(".offer__slider-prev"),
    //     sliderArrowNext = document.querySelector(".offer__slider-next"),
    //     sliderImage = document.querySelector(".offer__slide"),
    //     sliderImagesBase = [
    //         ["img/slider/pepper.jpg", "pepper"],
    //         ["img/slider/food-12.jpg", "food"],
    //         ["img/slider/olive-oil.jpg", "oil"],
    //         ["img/slider/paprika.jpg", "paprika"],
    //     ];

    // let sliderCurrentIndex = 1;

    // function sliderWorking(slideIndex) {
    //     sliderCounter.innerHTML = `0${slideIndex}`
    //     sliderImage.innerHTML = `
    //     <img src=${sliderImagesBase[slideIndex - 1][0]} alt=${sliderImagesBase[slideIndex - 1][1]}>
    //     `
    // }

    // sliderArrowNext.addEventListener("click", () => {
    //     sliderCurrentIndex++;
    //     if (sliderCurrentIndex > 4) {
    //         sliderCurrentIndex = 1;
    //         sliderWorking(sliderCurrentIndex);
    //     } else {
    //         sliderWorking(sliderCurrentIndex);
    //     }
    // });

    // sliderArrowPrev.addEventListener("click", () => {
    //     sliderCurrentIndex--;
    //     if (sliderCurrentIndex < 1) {
    //         sliderCurrentIndex = 4;
    //         sliderWorking(sliderCurrentIndex);
    //     } else {
    //         sliderWorking(sliderCurrentIndex);
    //     }
    // });


    // sliderTotalCounter.innerHTML = `0${sliderImagesBase.length}`;
    // sliderWorking(sliderCurrentIndex);

    // ************************MY VERSION NO. 2 (with classes) - fully working ************************


    // const sliderCounter = document.querySelector("#current"),
    //     sliderTotalCounter = document.querySelector("#total"),
    //     sliderArrowPrev = document.querySelector(".offer__slider-prev"),
    //     sliderArrowNext = document.querySelector(".offer__slider-next"),
    //     slides = document.querySelectorAll(".offer__slide");

    // let sliderCurrentIndex = 1;

    // slides.forEach((slide) => {
    //     slide.classList.add("hide");
    // })

    // function sliderWorking(slideIndex) {
    //     sliderCounter.innerHTML = `0${slideIndex}`;
    //     slides.forEach((slide) => {
    //         if (slide.classList.contains("show")) {
    //             slide.classList.remove("show");
    //             slide.classList.add("hide");
    //         };
    //     });
    //     slides[slideIndex - 1].classList.add("show");
    //     slides[slideIndex - 1].classList.remove("hide");
    // };


    // sliderArrowNext.addEventListener("click", () => {
    //     sliderCurrentIndex++;
    //     if (sliderCurrentIndex > 4) {
    //         sliderCurrentIndex = 1;
    //         sliderWorking(sliderCurrentIndex);
    //     } else {
    //         sliderWorking(sliderCurrentIndex);
    //     }
    // });

    // sliderArrowPrev.addEventListener("click", () => {
    //     sliderCurrentIndex--;
    //     if (sliderCurrentIndex < 1) {
    //         sliderCurrentIndex = 4;
    //         sliderWorking(sliderCurrentIndex);
    //     } else {
    //         sliderWorking(sliderCurrentIndex);
    //     }
    // });


    // sliderTotalCounter.innerHTML = `0${slides.length}`;
    // sliderWorking(sliderCurrentIndex);

    // ************************LECTURER'S VERSION (with classes)************************


    // const slides = document.querySelectorAll(".offer__slide"),
    //     prev = document.querySelector(".offer__slider-prev"),
    //     next = document.querySelector(".offer__slider-next"),
    //     total = document.querySelector("#total"),
    //     current = document.querySelector("#current");

    // let slideIndex = 1;

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`
    // } else {
    //     total.textContent = `${slides.length}`
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     } else if (n < 1) {
    //         slideIndex = slides.length;
    //     } else {
    //         slideIndex = n;
    //     }
    //     slides.forEach((item) => {
    //         item.style.display = "none";
    //     });
    //     slides[slideIndex - 1].style.display = "block";
    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`
    //     } else {
    //         total.textContent = `${slideIndex}`
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n)
    // }

    // prev.addEventListener("click", () => {
    //     plusSlides(-1);
    // });


    // next.addEventListener("click", () => {
    //     plusSlides(1);
    // });

    // ------------------------------------------LESSON 62 - SLIDER COMPLEX VERSION

    const slides = document.querySelectorAll(".offer__slide"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`
        total.textContent = `0${slides.length}`
    } else {
        current.textContent = slideIndex;
        total.textContent = `${slides.length}`
    }

    slidesField.style.width = 100 * slides.length + "%";

    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
        slide.style.width = width;
    });

    // MY VERSION OF FUNCTIONS

    function changeDotOpacity() {
        dots.forEach(dot => {
            dot.style.opacity = ".5"
        });
        dots[slideIndex - 1].style.opacity = 1;
    }

    function currentTotalIndex() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex;
        }
    }

    function stringConvert(str) {
        let digitValue;
        if (/\,/ig.test(str)) {
            let nStr = str.replace(/\,/ig, ".");
            digitValue = +nStr.replace(/\D\D/gi, "");
        } else {
            digitValue = +str.replace(/\D\D/gi, "");
        }
        return digitValue;
    }

    next.addEventListener("click", () => {
        // my version
        // if (ofset == width.slice(0, width.indexOf("px")) * (slides.length - 1)) {
        //     ofset = 0;
        // }
        //lesson 65 - my version
        if (offset == stringConvert(width) * (slides.length - 1)) {
            // MY VERSION WAS ABSOLUTELLY CORRECT AND MORE PRECISE THAN THE LECTURER'S ONE!!!!!!!!!!!!!
            offset = 0;
        } else {
            offset += stringConvert(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`
        // MY VERSION
        // slideIndex++
        // if (slideIndex > slides.length) {
        //     slideIndex = 1;
        // }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++
        }
        // lesson 63
        currentTotalIndex();
        changeDotOpacity();

    })

    prev.addEventListener("click", () => { //Я САМ НАПИСАЛ И НАПИСАЛ ПРАВИЛЬНО
        if (offset == 0) {
            offset = stringConvert(width) * (slides.length - 1);
        } else {
            offset -= stringConvert(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        currentTotalIndex();
        changeDotOpacity();
    })

    // LESSON 63

    // ************************ MY VERSION - fully working ************************ 

    // const sliderMainWrapper = document.querySelector(".offer__slider"),
    //     dotsWrapper = document.createElement("div");

    // sliderMainWrapper.style.position = "relative";
    // sliderMainWrapper.append(dotsWrapper);

    // dotsWrapper.classList.add("carousel-indicators");

    // slides.forEach((item, index) => {
    //     let dot = document.createElement("div");
    //     dot.classList.add("dot");
    //     dot.setAttribute('data-number', `${index}`);
    //     dotsWrapper.append(dot);
    // });


    // function makeActive(element) {
    //     element.style.backgroundColor = "red";
    // }

    // function changeSlide(element) {
    //     let indexActive = element.getAttribute("data-number");
    //     offset = width.slice(0, width.length - 2) * indexActive;
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // }

    // const dots = document.querySelectorAll(".dot");
    // dots.forEach((dot) => {
    //     dot.addEventListener("click", (event) => {
    //         dots.forEach((dot) => {
    //             dot.style.backgroundColor = "#fff";
    //         })
    //         makeActive(event.target);
    //         changeSlide(event.target);
    //     })
    // })

    // makeActive(dots[0]);



    // ************************ LECTURER'S VERSION ************************ 

    const slider = document.querySelector(".offer__slider");

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
        dots = [];
    indicators.classList.add("carousel-indicators");
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;`;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    console.log(dots[0]);
    console.log(typeof (dots[0]));

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            offset = stringConvert(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            currentTotalIndex();
            changeDotOpacity();
        })
    });



}

module.exports = slider;