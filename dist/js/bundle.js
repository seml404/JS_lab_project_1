/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {


    const result = document.querySelector(".calculating__result span");

    let sex, height, weight, age, ratio;

    // MY VERSION - LESSON 67
    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex")
    } else {
        sex = "female"
        localStorage.setItem("sex", "female");
    }
    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem("ratio", 1.375);
    }



    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        } else {
            if (sex === "female") {
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
            } else if (sex === "male") {
                result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
        }
    }

    calcTotal();

    // ************************ MY VERSION - FULLY WORKING*****************************

    // function addListener(elements, func, eve) {
    //     if (elements.length > 1) {
    //         elements.forEach((element) => {
    //             element.classList.remove("calculating__choose-item_active");
    //             element.addEventListener(`${eve}`, (event) => {
    //                 func(event.target);
    //             });
    //         });
    //     } else {
    //         elements.addEventListener(`${eve}`, () => {
    //             func();
    //         });
    //     }
    // }

    // function getValue(object) {
    //     let parent = object.parentElement;
    //     let others = parent.children
    //     for (let i = 0; i < others.length; i++) {
    //         others[i].classList.remove("calculating__choose-item_active");
    //     }
    //     object.classList.add("calculating__choose-item_active");
    //     if (object.id === "male" || object.id === "female") {
    //         sex = object.id;
    //     } else {
    //         ratio = +object.getAttribute("data-ratio");
    //     }
    //     calcTotal();
    // }

    // function getInputValue(input) {
    //     if (input.id === "height") {
    //         height = +input.value;
    //     } else if (input.id === "weight") {
    //         weight = +input.value;
    //     } else if (input.id === "age") {
    //         age = +input.value;
    //     }
    //     calcTotal();
    // }

    // const genderDivs = document.querySelectorAll("#gender div"),
    //     activityDivs = document.querySelectorAll(".calculating__choose_big div"),
    //     metricsDivs = document.querySelectorAll(".calculating__choose_medium input"),
    //     field = document.querySelector(".calculating__field");

    // addListener(genderDivs, getValue, "click");
    // addListener(activityDivs, getValue, "click");
    // addListener(metricsDivs, getInputValue, "input");


    // ************************************* LECTURER'S VERSION *************************************  

    function getStaticInformation(selector, activeClass) { //, param) {
        // MY VER1
        // const elements = document.querySelectorAll(`${parentSelector} div`);
        // document.querySelector(parentSelector).addEventListener("click", (e) => {
        //     if (e.target.classList.contains("calculating__choose-item")) {
        //         if (e.target.getAttribute("data-ratio")) {
        //             ratio = +e.target.getAttribute("data-ratio");
        //         } else {
        //             sex = e.target.getAttribute("id");
        //         }
        //         elements.forEach(elem => {
        //             elem.classList.remove(activeClass);
        //             e.target.classList.add(activeClass);
        //         })
        //         calcTotal();
        //     }
        // })
        // MY VER2

        const elements = document.querySelectorAll(selector);

        elements.forEach(element => { // LECTURER DID JUST THE SAME WAY
            element.addEventListener("click", (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = +e.target.getAttribute("data-ratio");
                    // MY VERSION FOR LESSON 67 - LECTURER'S VERSION WAS JUST THE SAME
                    localStorage.setItem("ratio", `${ratio}`);
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", `${sex}`);
                }
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                    e.target.classList.add(activeClass);
                })
                calcTotal();
            })
        })

        // LESSON 67 - MY VERSION
        // defineWhichActive(elements, activeClass, param);
    }
    //я правильно написал
    getStaticInformation('#gender div', "calculating__choose-item_active"); ///sex);
    getStaticInformation('.calculating__choose_big div', "calculating__choose-item_active") //, ratio);

    //  я правильно написал
    function getDymanicInformation(selector) {
        const input = document.querySelector(selector);
        input.addEventListener("input", () => {
            // MY VERSION - ver 1
            // if (isNaN(+input.value)) {
            //     input.style.backgroundColor = "red";
            // } else {
            //     input.style.backgroundColor = "#fff"
            // }

            // MY VERSION - ver 2
            // if (/\D/ig.test(input.value)) {
            //     input.style.backgroundColor = "red";
            // } else {
            //     input.style.backgroundColor = "#fff"
            // }
            // LECTURER'S VERSION
            if (input.value.match(/\D/g)) {
                input.style.border = "solid red";
            } else {
                input.style.border = "none"
            }

            switch (input.getAttribute("id")) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    // my version - IS BETTER
    // const metrics = document.querySelectorAll(".calculating__choose_medium input");
    // metrics.forEach((element) => {
    //     getDymanicInformation(element);
    // });

    // LECTURER VERSION

    getDymanicInformation("#height");
    getDymanicInformation("#weight");
    getDymanicInformation("#age");


    // MY VERSION ACTIVITY CLASS - LESSON 67 - FULLY WORKING

    // function defineWhichActive(elements, activeClass, param) {
    //     elements.forEach(element => { element.classList.remove(activeClass) });
    //     if (!isNaN(+param)) {
    //         switch (+param) {
    //             case (1.2):
    //                 elements[0].classList.add(activeClass);
    //                 break;
    //             case (1.375):
    //                 elements[1].classList.add(activeClass);
    //                 break;
    //             case (1.55):
    //                 elements[2].classList.add(activeClass);
    //                 break;
    //             case (1.725):
    //                 elements[3].classList.add(activeClass);
    //                 break;
    //         }
    //     } else {
    //         switch (param) {
    //             case ("female"):
    //                 elements[0].classList.add(activeClass);
    //                 break;
    //             case ("male"):
    //                 elements[1].classList.add(activeClass);
    //                 break;
    //         }
    //     }
    // }

    // LECTURER'S VERSION

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute("id") === localStorage.getItem("sex")) { //я бы здесь ссылался не на Localstorage, а на переменные - у них и значения по умолчанию, и подтяги
                // вают они значения из localstorage
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
                elem.classList.add(activeClass);
            }
        })
    }

    initLocalSettings('#gender div', "calculating__choose-item_active");
    initLocalSettings('.calculating__choose_big div', "calculating__choose-item_active");


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {

    // LESSON 48 - USING CLASSES FOR CARDS

    // ***************************************************************MY VERSION***************************************************************

    // class Menu {
    //     constructor(img, title, descr, price) {
    //         this.img = img;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //     }
    //     render() {
    //         return `<div class="menu__item">
    //                 <img src="${this.img}" alt="vegy">
    //                 <h3 class="menu__item-subtitle">${this.title}</h3>
    //                 <div class="menu__item-descr">${this.descr}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                     <div class="menu__item-cost">Цена:</div>
    //                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //                 </div>
    //             </div>`

    //     }

    // }
    // let menuItem, itemHTML;
    // const menus = [
    //     ["img/tabs/vegy.jpg", "Меню 'Фитнес'", "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!", "229"],
    //     ["img/tabs/elite.jpg", `Меню “Премиум”`, `В меню “Премиум” мы используем не только красивый дизайн упаковки, но
    //     и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
    //     в ресторан!`, "550"],
    //     ["img/tabs/post.jpg", `Меню "Постное"`, `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
    //     продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
    //     количество белков за счет тофу и импортных вегетарианских стейков. `, "430"]
    // ],
    //     menuContainer = document.querySelector(".menu__field>.container");


    // menus.forEach((item) => {
    //     let i = 0;
    //     menuItem = new Menu(item[i++], item[i++], item[i++], item[i++]);
    //     itemHTML = menuItem.render();
    // new Menu(item[i++], item[i++], item[i++], item[i++]).render();
    //     menuContainer.innerHTML += `${itemHTML}`;
    // });


    // ***************************************************************LECTURER'S VERSION***************************************************************

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.changeToUAH();
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement("div");
            /*if (this.classes.length > 0) {// Я САМ ПРАВИЛЬНО НАПИСАЛ
                this.classes = this.classes;
            } else {
                this.classes = ["menu__item"];
            }
            */

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                // Я САМ ПРАВИЛЬНО НАПИСАЛ
                this.classes.forEach(item => element.classList.add(item));
            }
            element.innerHTML = `
                             <img src=${this.src} alt=${this.alt}>
                             <h3 class="menu__item-subtitle">${this.title}</h3>
                             <div class="menu__item-descr">${this.descr}</div>
                             <div class="menu__item-divider"></div>
                             <div class="menu__item-price">
                                 <div class="menu__item-cost">Цена:</div>
                                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                             </div>
                         `

            this.parent.append(element);
        }
    }
    // ****************************FUNCTION, RECEIVING INFO FROM SERVER AND RENDERRING THE LAYOUT****************************
    // MY VERSION
    // const getResourse = async function (url) {
    //     const res = await fetch(url);
    //     if (!res.ok) {
    //         throw new Error(`Couldn't fetch ${url}, status: ${res.status}`)
    //     } else {
    //         const newData = await res.json();
    //         console.log(newData);
    //         newData.forEach((obj, index) => {
    //             console.log(obj, index);
    //             let cardItem = new MenuCard(obj.img, obj.altimg, obj.title, obj.descr, obj.price, ".menu__field .container");
    //             console.log(cardItem);
    //             cardItem.render();
    //         });
    //     };
    // }
    // getResourse("http://localhost:3000/menu");


    // LECTURER'S VERSION - v1



    // LESSON 60 - USING AXIOS LIBRARY

    // axios.get("http://localhost:3000/menu")
    //     .then((data) => {
    //         data.data.forEach(({
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price
    //         }) => {
    //             new MenuCard(img, altimg, title, descr, price, ".menu__field .container").render();
    //         });
    //     });

    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)("http://localhost:3000/menu")
        .then((data) => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, ".menu__field .container").render();
            });
        });

    // LECTURER'S VERSION - v2 - creating cards without a special constructor and class (MenuCard)


    //метод, когда не требуется шаблонизация и нужно построить что-то только один раз
    // getResourse("http://localhost:3000/menu")
    //     .then((data) => {
    //         createCard(data);
    //     });

    // function createCard(data) {
    //     data.forEach(({
    //         img,
    //         altimg,
    //         title,
    //         descr,
    //         price
    //     }) => {
    //         const element = document.createElement("div");
    //         element.classList.add("menu__item");
    //         element.innerHTML = /* //Я ПРАВИЛЬНО НАПИСАЛ    */ `       
    //                          <img src=${img} alt=${altimg}>
    //                          <h3 class="menu__item-subtitle">${title}</h3>
    //                          <div class="menu__item-descr">${descr}</div>
    //                          <div class="menu__item-divider"></div>
    //                          <div class="menu__item-price">
    //                              <div class="menu__item-cost">Цена:</div>
    //                              <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //                          </div>
    //                      `
    //         document.querySelector(".menu__field .container").append(element); //Я ПРАВИЛЬНО НАПИСАЛ
    //     });
    // }




    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "alt1",
    //     "Меню 'Фитнес'",
    //     "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    //     9,
    //     ".menu__field .container",
    //     // "menu__item",
    //     // "big"
    // ).render();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "alt2",
    //     `Меню “Премиум”`,
    //     `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
    // в ресторан!`,
    //     14,
    //     ".menu__field .container",
    //     "menu__item"

    // ).render();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "alt3",
    //     `Меню "Постное"`,
    //     `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
    // //     продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
    // //     количество белков за счет тофу и импортных вегетарианских стейков. `,
    //     21,
    //     ".menu__field .container",
    //     "menu__item"
    // ).render();



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalwindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalwindow */ "./js/modules/modalwindow.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(formSelector, modalTimerId) {
    //LESSON_53 - SENDING DATA ON SERVER

    // ******************************************MY VERSION******************************************

    // version 1 - not good version
    // const inputsModal = document.querySelectorAll(".modal__input"),
    //     btnModal = document.querySelector(".modal__content button"),
    //     form = document.querySelector(".modal__content form");

    // form.addEventListener("click", (event) => {
    //     event.preventDefault();
    // })




    // btnModal.addEventListener("click", () => {
    //     let submittedValues = [];
    //     inputsModal.forEach(item => {
    //         submittedValues.push(item.value);
    //     });
    //     console.log(submittedValues);
    //     let request = new XMLHttpRequest();
    //     request.open("POST", "server.php");
    //     request.setRequestHeader("Content-type", "json; charset = utf-8");
    //     request.send(submittedValues);
    //     request.addEventListener("load", () => {
    //         if (request.status === 200) {
    //             console.log("success!");
    //         } else {
    //             console.log("Что то пошло не так");
    //         }
    //     });

    // version 2 - first good version

    // const forms = document.querySelectorAll("form");
    // forms.forEach(item =>
    //     item.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         let submittedValues = [];
    //         item.querySelectorAll("input").forEach(input => {
    //             submittedValues.push(input.value);
    //         });
    //         console.log(submittedValues);
    //         let request = new XMLHttpRequest();
    //         request.open("POST", "server.php");
    //         request.setRequestHeader("Content-type", "json; charset = utf-8");
    //         request.send(submittedValues);
    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 console.log("success!");
    //             } else {
    //                 console.log("Что то пошло не так");
    //             }
    //         });
    //     })
    // );

    // // version 3 using (1) function

    // const forms = document.querySelectorAll("form"),
    //     submittedValues = {};

    // function checkAndSubmit(form) {
    //     form.querySelectorAll("input").forEach(input => {
    //         submittedValues[input.placeholder] = input.value;
    //     });
    //     console.log(submittedValues);
    //     let request = new XMLHttpRequest();
    //     request.open("POST", "server.php");
    //     request.setRequestHeader("Content-type", "json; charset = utf-8");
    //     request.send(submittedValues);
    //     request.addEventListener("load", () => {
    //         if (request.status === 200) {
    //             console.log("success!");
    //             console.log(request.response);
    //         } else {
    //             console.log("Что то пошло не так");
    //         }
    //     });
    // }

    // forms.forEach(form =>
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         checkAndSubmit(form);
    //     })
    // );


    //version 4 - using (1) function and (2) js object FromData

    // const forms = document.querySelectorAll("form");


    // function checkAndSubmit(form) {
    //     let newFormInfo = new FormData(form);
    //     console.log(newFormInfo);
    //     let request = new XMLHttpRequest();
    //     request.open("POST", "server.php");
    //     // request.setRequestHeader("Content-type", "multipart/form-data");
    //     request.send(newFormInfo);
    //     request.addEventListener("load", () => {
    //         if (request.status === 200) {
    //             console.log("success!");
    //             console.log(request.response);
    //         } else {
    //             console.log("Что то пошло не так");
    //         }
    //     });
    // }

    // forms.forEach(form =>
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         checkAndSubmit(form);
    //     })
    // );

    // // ******************************************LESTURER VERSION form data******************************************


    // const forms = document.querySelectorAll("form");

    // const message = {
    //     loading: "Загружается",
    //     success: "Спасибо!",
    //     failure: "Что то пошло не так",
    // };




    // function postData(form) {
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         const statusMessage = document.createElement("div");
    //         statusMessage.classList.add("status");
    //         statusMessage.innerHTML = `${message.loading}`;
    //         form.append(statusMessage);
    //         let request = new XMLHttpRequest();

    //         request.open("POST", "server.php");
    //         // request.setRequestHeader("Content-type", "multipart/form-data");
    //         let formData = new FormData(form);
    //         request.send(formData);
    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.success;
    //                 form.reset();
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 3000);
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });

    //     });


    // };
    // forms.forEach((form) => {
    //     postData(form);
    // });


    // ******************************************LESTURER VERSION amended by me******************************************


    // const forms = document.querySelectorAll("form");

    // const message = {
    //     loading: "Загружается",
    //     success: "Спасибо!",
    //     failure: "Что то пошло не так",
    // };




    // function postData(form) {
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         const statusMessage = document.createElement("div");
    //         statusMessage.classList.add("status");
    //         statusMessage.innerHTML = `${message.loading}`;
    //         form.append(statusMessage);
    //         let request = new XMLHttpRequest();

    //         request.open("POST", "server.php");
    //         // request.setRequestHeader("Content-type", "multipart/form-data");
    //         let formData = new FormData(form);
    //         request.send(formData);
    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 form.reset();
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.success;
    //                 setTimeout(() => {
    //                     if (modal.classList.contains("show")) {
    //                         closeModal();

    //                     };
    //                     statusMessage.innerHTML = "";
    //                 }, 1000);

    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });

    //     });


    // };
    // forms.forEach((form) => {
    //     postData(form);
    // });

    // ***************************************************LECTURER VERSION JSON AMENDED BY ME***************************************************************



    // const forms = document.querySelectorAll("form");

    // const message = {
    //     loading: "Загружается",
    //     success: "Спасибо!",
    //     failure: "Что то пошло не так",
    // };




    // function postData(form) {
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         const statusMessage = document.createElement("div");
    //         statusMessage.classList.add("status");
    //         statusMessage.innerHTML = `${message.loading}`;
    //         form.append(statusMessage);
    //         let request = new XMLHttpRequest();

    //         request.open("POST", "server.php");
    //         request.setRequestHeader("Content-type", "application/json");
    //         let formData = new FormData(form);

    //         const object = {};
    //         formData.forEach((item, index) => {//  Я НАПИСАЛ
    //             object[index] = item;
    //         });

    //         const tempObj = JSON.stringify(object);

    //         request.send(tempObj);
    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.success;
    //                 form.reset();// я написал правильно
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 3000); // я написал правильно
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });

    //     });


    // };
    // forms.forEach((form) => {
    //     postData(form);
    // });


    // LESSON_54

    // ************************************MY VERSION**************************************


    // version 1 - fully working

    // const forms = document.querySelectorAll("form"),
    //     message = {
    //         loading: "Загружается",
    //         success: "Спасибо!",
    //         failure: "Что то пошло не так",
    //     },
    //     modalDialog = document.querySelector(".modal__dialog"),
    //     modalContent = document.querySelector(".modal__content");


    // function toggleShowHide(item) {
    //     if (item.classList.contains("show") || item.classList.contains("hide")) {
    //         if (item.classList.contains("show")) {
    //             item.classList.remove("show");
    //             item.classList.add("hide");
    //         } else {
    //             item.classList.remove("hide");
    //             item.classList.add("show");
    //         }
    //     } else {
    //         item.classList.remove("show");
    //         item.classList.add("hide");

    //     }
    // }


    // function postData(form) {
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         let newModalContent = document.createElement("div"),
    //             spinnerDiv = document.createElement("div"),
    //             spinner = document.createElement("img");
    //         toggleShowHide(newModalContent);
    //         newModalContent.style.cssText = "background-color: white; width: 100%; text-align: center; font-size: 22px; text-transform: uppercase";
    //         spinnerDiv.append(spinner);
    //         spinnerDiv.style.cssText = "text-align: center";
    //         spinner.src = "icons/spinner.svg";
    //         form.append(spinnerDiv);
    //         spinnerDiv.classList.add("show");
    //         let request = new XMLHttpRequest();
    //         request.open("POST", "server.php");
    //         request.setRequestHeader("Content-type", "application/json");
    //         let formData = new FormData(form);
    //         const object = {};
    //         formData.forEach((item, index) => {//  Я НАПИСАЛ САМ И ПРАВИЛЬНО
    //             object[index] = item;
    //         });
    //         const tempObj = JSON.stringify(object); //  Я НАПИСАЛ САМ И ПРАВИЛЬНО
    //         request.send(tempObj);
    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 setTimeout(() => {
    //                     console.log(request.response);
    //                     setTimeout(() => {
    //                         spinnerDiv.remove();
    //                         modalDialog.append(newModalContent);
    //                         toggleShowHide(modalContent);
    //                         toggleShowHide(newModalContent);
    //                         newModalContent.innerHTML = "Спасибо за обращение";
    //                     }, 3000); // я написал правильно
    //                     setTimeout(() => {
    //                         closeModal();
    //                         form.reset();
    //                         newModalContent.remove();
    //                         toggleShowHide(modalContent);
    //                     }, 5000);
    //                 }, 1000);
    //             } else {
    //             }
    //         });
    //     });
    // };
    // forms.forEach((form) => {
    //     postData(form);
    // });



    // ************************************LECTURER VERSION**************************************



    // const forms = document.querySelectorAll("form");

    // const message = {
    //     loading: "icons/spinner.svg",
    //     success: "Спасибо!",
    //     failure: "Что то пошло не так",
    // };




    // function postData(form) {
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         const statusMessage = document.createElement("img");

    //         statusMessage.src = message.loading;
    //         statusMessage.style.cssText = `
    //         display: block;
    //         margin: 0 auto;
    //         `;
    //         // form.append(statusMessage);

    //         form.insertAdjacentElement("afterend", statusMessage);

    //         let request = new XMLHttpRequest();

    //         request.open("POST", "server.php");
    //         request.setRequestHeader("Content-type", "application/json");
    //         let formData = new FormData(form);

    //         const object = {};
    //         formData.forEach((item, index) => {//  Я НАПИСАЛ
    //             object[index] = item;
    //         });

    //         const tempObj = JSON.stringify(object);

    //         request.send(tempObj);
    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 showThanksModal(message.success);
    //                 form.reset();// я написал правильно
    //                 statusMessage.remove();
    //             } else {
    //                 showThanksModal(message.failure);
    //             }
    //         });
    //     });
    // }

    // forms.forEach((form) => {
    //     postData(form);
    // });

    // function showThanksModal(message) {
    //     const prevModalDialog = document.querySelector(".modal__dialog");
    //     prevModalDialog.classList.add("hide");
    //     showModal();
    //     const thanksModal = document.createElement("div");
    //     thanksModal.classList.add("modal__dialog");
    //     thanksModal.innerHTML = `
    //     <div class="modal__content">
    //     <div class = "modal__close" data-close>×</div>
    //     <div class = "modal__title">${message}</div>


    //     </div>
    //     `;
    //     document.querySelector(".modal").append(thanksModal);

    //     setTimeout(() => {
    //         closeModal();
    //         thanksModal.remove();
    //         prevModalDialog.classList.remove("hide");
    //     }, 1000);

    // }

    // LESSON_56 FETCH

    // // *******************MY VERSION********************************************



    // const forms = document.querySelectorAll("form");

    // const message = {
    //     loading: "icons/spinner.svg",
    //     success: "Спасибо!",
    //     failure: "Что то пошло не так",
    // };




    // function postData(form) {
    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault();
    //         const statusMessage = document.createElement("img");

    //         statusMessage.src = message.loading;
    //         statusMessage.style.cssText = `
    //     display: block;
    //     margin: 0 auto;
    //     `;
    //         // form.append(statusMessage);

    //         form.insertAdjacentElement("afterend", statusMessage);
    //         let formData = new FormData(form);
    //         const object = {};
    //         formData.forEach((item, index) => { //  Я НАПИСАЛ
    //             object[index] = item;
    //         });

    //         const tempObj = JSON.stringify(object);

    //         // request.send(tempObj);


    //         fetch("server.php", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-type": "application/json;charset=utf-8"
    //                 },
    //                 body: tempObj,

    //             }).then(response => response.text())
    //             .then((response) => {
    //                 console.log(response);
    //                 showThanksModal(message.success);
    //                 form.reset(); // я написал правильно
    //                 statusMessage.remove();
    //             });
    //     });
    // }

    // forms.forEach((form) => {
    //     postData(form);
    // });

    // function showThanksModal(message) {
    //     const prevModalDialog = document.querySelector(".modal__dialog");
    //     prevModalDialog.classList.add("hide");
    //     showModal();
    //     const thanksModal = document.createElement("div");
    //     thanksModal.classList.add("modal__dialog");
    //     thanksModal.innerHTML = `
    // <div class="modal__content">
    // <div class = "modal__close" data-close>×</div>
    // <div class = "modal__title">${message}</div>


    // </div>
    // `;
    //     document.querySelector(".modal").append(thanksModal);

    //     setTimeout(() => {
    //         closeModal();
    //         thanksModal.remove();
    //         prevModalDialog.classList.remove("hide");
    //     }, 1000);

    // }


    //     // *******************LECTURER'S VERSION - sending as a FORM DATA********************************************



    //     const forms = document.querySelectorAll("form");

    //     const message = {
    //         loading: "icons/spinner.svg",
    //         success: "Спасибо!",
    //         failure: "Что то пошло не так",
    //     };




    //     function postData(form) {
    //         form.addEventListener("submit", (event) => {
    //             event.preventDefault();
    //             const statusMessage = document.createElement("img");

    //             statusMessage.src = message.loading;
    //             statusMessage.style.cssText = `
    //         display: block;
    //         margin: 0 auto;
    //         `;
    //             form.insertAdjacentElement("afterend", statusMessage);
    //             let formData = new FormData(form);

    //             fetch("server.php", {
    //                     method: "POST",
    //                     // headers: {
    //                     //     "Content-type": "application/json"
    //                     // },
    //                     body: formData //ВСЕ ПРАВИЛЬНО СДЕЛАЛ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //                 }).then(data => data.text())
    //                 .then((response) => {
    //                     console.log(response);
    //                     showThanksModal(message.success);
    //                     form.reset(); // я написал правильно
    //                     statusMessage.remove();
    //                 })
    //                 .catch(() => {
    //                     showThanksModal(message.failure);
    //                 })
    //                 .finally(() => {
    //                     form.reset();
    //                 });
    //         });
    //     }

    //     forms.forEach((form) => {
    //         postData(form);
    //     });

    //     function showThanksModal(message) {
    //         const prevModalDialog = document.querySelector(".modal__dialog");
    //         prevModalDialog.classList.add("hide");
    //         showModal();
    //         const thanksModal = document.createElement("div");
    //         thanksModal.classList.add("modal__dialog");
    //         thanksModal.innerHTML = `
    //     <div class="modal__content">
    //     <div class = "modal__close" data-close>×</div>
    //     <div class = "modal__title">${message}</div>


    //     </div>
    //     `;
    //         document.querySelector(".modal").append(thanksModal);

    //         setTimeout(() => {
    //             closeModal();
    //             thanksModal.remove();
    //             prevModalDialog.classList.remove("hide");
    //         }, 1000);

    //     }


    // *******************LECTURER'S VERSION - sending as a json********************************************



    //     const forms = document.querySelectorAll("form");

    //     const message = {
    //         loading: "icons/spinner.svg",
    //         success: "Спасибо!",
    //         failure: "Что то пошло не так",
    //     };




    //     function postData(form) {
    //         form.addEventListener("submit", (event) => {
    //             event.preventDefault();
    //             const statusMessage = document.createElement("img");

    //             statusMessage.src = message.loading;
    //             statusMessage.style.cssText = `
    //     display: block;
    //     margin: 0 auto;
    //     `;
    //             form.insertAdjacentElement("afterend", statusMessage);
    //             let formData = new FormData(form);

    //             const object = {};
    //             formData.forEach((item, index) => { //  Я НАПИСАЛ
    //                 object[index] = item;
    //             });
    //             fetch("server.php", {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-type": "application/json"
    //                     },
    //                     body: JSON.stringify(object) //ВСЕ ПРАВИЛЬНО СДЕЛАЛ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //                 }).then(data => data.text())
    //                 .then((response) => {
    //                     console.log(response);
    //                     showThanksModal(message.success);
    //                     form.reset(); // я написал правильно
    //                     statusMessage.remove();
    //                 })
    //                 .catch(() => {
    //                     showThanksModal(message.failure);
    //                 })
    //                 .finally(() => {
    //                     form.reset();
    //                 });
    //         });
    //     }

    //     forms.forEach((form) => {
    //         postData(form);
    //     });

    //     function showThanksModal(message) {
    //         const prevModalDialog = document.querySelector(".modal__dialog");
    //         prevModalDialog.classList.add("hide");
    //         showModal();
    //         const thanksModal = document.createElement("div");
    //         thanksModal.classList.add("modal__dialog");
    //         thanksModal.innerHTML = `
    // <div class="modal__content">
    // <div class = "modal__close" data-close>×</div>
    // <div class = "modal__title">${message}</div>


    // </div>
    // `;
    //         document.querySelector(".modal").append(thanksModal);

    //         setTimeout(() => {
    //             closeModal();
    //             thanksModal.remove();
    //             prevModalDialog.classList.remove("hide");
    //         }, 1000);

    //     }

    //     fetch("http://localhost:3000/menu")
    //         .then((response) => response.json())
    //         .then((jsobj) => console.log(jsobj));



    // LESSON 59

    //     // *******************************************function for sending requests to server MY VERSION*****************************************************************




    //     const forms = document.querySelectorAll("form");

    //     const message = {
    //         loading: "icons/spinner.svg",
    //         success: "Спасибо!",
    //         failure: "Что то пошло не так",
    //     };

    //     function servRequest(url, method, headers, body) {
    //         return fetch(url, {
    //             method: method,
    //             headers: headers,
    //             body: body //ВСЕ ПРАВИЛЬНО СДЕЛАЛ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //         });
    //     }

    //     function postData(form) {
    //         form.addEventListener("submit", (event) => {
    //             event.preventDefault();
    //             const statusMessage = document.createElement("img");

    //             statusMessage.src = message.loading;
    //             statusMessage.style.cssText = `
    // display: block;
    // margin: 0 auto;
    // `;
    //             form.insertAdjacentElement("afterend", statusMessage);
    //             let formData = new FormData(form);

    //             const object = {};
    //             formData.forEach((item, index) => { //  Я НАПИСАЛ
    //                 object[index] = item;
    //             });

    //             servRequest("server.php", "POST", {
    //                     "Content-type": "application/json"
    //                 }, JSON.stringify(object))
    //                 .then(data => data.text())
    //                 .then((response) => {
    //                     console.log(response);
    //                     showThanksModal(message.success);
    //                     form.reset(); // я написал правильно
    //                     statusMessage.remove();
    //                 })
    //                 .catch(() => {
    //                     showThanksModal(message.failure);
    //                 })
    //                 .finally(() => {
    //                     form.reset();
    //                 });
    //         });
    //     }

    //     forms.forEach((form) => {
    //         postData(form);
    //     });

    //     function showThanksModal(message) {
    //         const prevModalDialog = document.querySelector(".modal__dialog");
    //         prevModalDialog.classList.add("hide");
    //         showModal();
    //         const thanksModal = document.createElement("div");
    //         thanksModal.classList.add("modal__dialog");
    //         thanksModal.innerHTML = `
    // <div class="modal__content">
    // <div class = "modal__close" data-close>×</div>
    // <div class = "modal__title">${message}</div>


    // </div>
    // `;
    //         document.querySelector(".modal").append(thanksModal);

    //         setTimeout(() => {
    //             closeModal();
    //             thanksModal.remove();
    //             prevModalDialog.classList.remove("hide");
    //         }, 1000);

    //     }


    //     servRequest("http://localhost:3000/menu")
    //         .then((response) => response.json())
    //         .then((jsobj) => console.log(jsobj));

    // *******************************************function for sending requests to server LECTURER'S VERSION*****************************************************************

    // WORKING WITH FORMS



    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: "icons/spinner.svg",
        success: "Спасибо!",
        failure: "Что то пошло не так",
    };



    function bindPostData(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
display: block;
margin: 0 auto;
`;
            form.insertAdjacentElement("afterend", statusMessage);
            let formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json)
                .then((response) => {
                    console.log(response);
                    showThanksModal(message.success);
                    form.reset(); // я написал правильно
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    forms.forEach((form) => {
        bindPostData(form);
    });

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");
        (0,_modalwindow__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", modalTimerId);
        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
<div class="modal__content">
<div class = "modal__close" data-close>×</div>
<div class = "modal__title">${message}</div>
</div>
`;
        document.querySelector(".modal").append(thanksModal);

        setTimeout(() => {
            (0,_modalwindow__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
            thanksModal.remove();
            prevModalDialog.classList.remove("hide");
        }, 1000);
    }

    fetch("http://localhost:3000/menu")
        .then((response) => response.json())
        .then((jsobj) => console.log(jsobj));

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modalwindow.js":
/*!***********************************!*\
  !*** ./js/modules/modalwindow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show'); // преподаватель делал не через Inline а через классы; это действительно лучше
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden"; // все правильно я сделал
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    // LESSON 43 - MODAL WINDOW

    //MY VERSION

    // const btnOpen = document.querySelectorAll("[data-modal]"),
    // btnClose = document.querySelector("[data-close]"),
    // modal = document.querySelector(".modal");

    // console.log(btnOpen);

    // btnOpen.forEach((item)=>{
    //     item.addEventListener('click', ()=>{
    //         modal.style.display = "block"; 
    //     });
    // });

    // btnClose.addEventListener("click", ()=>{
    //     modal.style.display = "none";
    // });


    //*********************************************************************lecturer version********************************************************************* 
    // const modalTrigger = document.querySelectorAll("[data-modal]"),
    // modalCloseBtn = document.querySelector("[data-close]"),
    // modal = document.querySelector(".modal");


    // modalTrigger.forEach((item)=>{
    //     item.addEventListener("click", ()=>{
    //         modal.classList.add('show');// преподаватель делал не через Inline а через классы; это действительно лучше
    //         modal.classList.remove("hide");
    //       document.body.style.overflow = "hidden";// все правильно я сделал
    //     });
    // });

    // function closeModal (){
    //     modal.classList.remove("show");
    //     modal.classList.add("hide");
    //     document.body.style.overflow = "auto";
    // }

    // modalCloseBtn.addEventListener('click', closeModal);

    // modal.addEventListener('click', (event)=>{
    //     // console.log(event.target);
    //     // console.log(event.currentTarget);
    //     if(event.target ===modal){//event.target - возвращает элемент, непосредственно
    // //         // на котором произошло событие! modal это переменная которая хранит DOM элемент
    // //         // так как div.modal это общая коробка непосредственно на нем событие, когда не на КАКИХ-ЛИБО
    // //         // его внутренних элементах.
    // //         // Почему не происходит поднятие? Происходит, но условие не выполняется (!!!), т.к. event target совпадает и условие выполняется, только если не дочерний элемент.
    //         closeModal();
    // }
    // });
    // document.addEventListener("keydown", (event)=>{
    //     if(event.key ==='Escape' && modal.classList.contains("show")){//я сделал правильно
    //     closeModal();
    //     console.log(event.key);
    // };
    // });



    //lecturer version amended by me


    const modalTrigger = document.querySelectorAll(triggerSelector),
        // modalCloseBtn = document.querySelector("[data-close]"),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach((item) => {
        item.addEventListener("click", () => openModal(modalSelector, modalTimerId));
    });
    // modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute("data-close") == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === 'Escape' && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });

    // LESSON 44

    // **********************************************MY VERSION**********************************************
    // появление через определенное время
    // setTimeout(openModal, 5000);

    // когда долистал до конца
    // const html = document.querySelector("html");
    //  function checkHeight(){
    //      if(document.documentElement.clientHeight === document.documentElement.scrollHeight - window.pageYOffset){
    //         openModal();
    //      }
    // }

    // window.addEventListener("scroll", checkHeight);


    // *********************************************lecturer version amended by me*********************************************



    function showModalByScroll(modalSelector) {
        if (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", () => showModalByScroll(".modal"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
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
    const
        slider = document.querySelector(container),
        slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
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
    });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    // LESSON 38 - TABS

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);




    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.remove("show");
            item.classList.remove("fade");
            item.classList.add("hide");
        });
        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }


    function showTabContent(i = 0) {
        tabs[i].classList.remove("hide");
        tabsContent[i].classList.add("fade");
        tabsContent[i].classList.add("show");
        tabs[i].classList.add(activeClass);

    }


    hideTabContent();
    showTabContent();
    // ********************************MY VERSION********************************

    // tabsParent.addEventListener("click", (event) => {
    //     let index;
    //     const target = event.target;
    //     if (target && target.classList.contains("tabheader__item")) {
    //         console.log(target);
    //         for (let i = 0; i < tabs.length; i++) {
    //             if (target.innerHTML == tabs[i].innerHTML) {
    //                 index = i;
    //                 break;
    //             }
    //         }
    //         hideTabContent();
    //         showTabContent(index);
    //     }
    // });
    // ********************************LECTURER'S VERSION********************************
    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) { //идет сравнение переменных, в которых записывается ССЫЛКА на один и тот же объект (!!!!!!!). 
                    // Соответственно, один и тот же объект в один момент сравнивается сам с собой! А так, конечно, два объекта никогда не равны друг другу.
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    // console.log(target);
    // console.log(item);
    // console.log(target === item && target === tabs[i]);
    // console.log(typeof (target));

    // let a = {
    //     name: "value",
    // };

    // let b = a;
    // let c = a;

    // console.log(b === c);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadLine) {

    //LESSON 41 - TIMER

    // MY REALIZATION

    // let daysParent = document.querySelectorAll(".timer__block")[0],
    //     days = daysParent.querySelector("span"),
    //     hoursParent = document.querySelectorAll(".timer__block")[1],
    //     hours = hoursParent.querySelector("span"),
    //     minutesParent = document.querySelectorAll(".timer__block")[2],
    //     minutes = minutesParent.querySelector("span"),
    //     secondsParent = document.querySelectorAll(".timer__block")[3],
    //     seconds = secondsParent.querySelector("span"),
    //     deadLine = new Date("2021-09-17T20:55"),
    //     currentDate = new Date(),
    //     leftTime,
    //     leftDays,
    //     leftHours,
    //     leftMinutes,
    //     leftSeconds;

    // console.log(days, hours, minutes, seconds, deadLine, currentDate);


    // function timeLeft() {
    //     currentDate = new Date();
    //     leftTime = deadLine - currentDate;
    //     leftDays = Math.floor(leftTime / 86400000);
    //     leftHours = Math.floor((leftTime - leftDays * 86400000) / 3600000);
    //     leftMinutes = Math.floor((leftTime - leftDays * 86400000 - leftHours * 3600000) / 60000);
    //     leftSeconds = Math.floor((leftTime - leftDays * 86400000 - leftHours * 3600000 - leftMinutes * 60000) / 1000);
    //     console.log(`осталось: ${leftDays} дней ${leftHours} часов ${leftMinutes} минут ${leftSeconds} секунд`);
    // }
    // timeLeft();

    // function renderTimeRates() {
    //     let secondsTimer = setTimeout(function generalTimer() {
    //         timeLeft();
    //         if (leftTime > 0) {
    //             seconds.innerText = `${leftSeconds}`;
    //             minutes.innerText = `${leftMinutes}`;
    //             hours.innerText = `${leftHours}`;
    //             days.innerText = `${leftDays}`;
    //             secondsTimer = setTimeout(generalTimer, 1000);
    //         } else {
    //             clearTimeout(secondsTimer);
    //         }
    //     }, 1000);
    // }

    // renderTimeRates();


    // let id = setTimeout(function log() {
    //     console.log("test");
    //     id = setTimeout(log, 500);
    // }, 500);


    // leftTime = deadLine - currentDate;
    //     leftSeconds = leftTime / 1000;
    //     leftMinutes = leftSeconds / 60;
    //     leftHours = leftMinutes / 60;

    // leftDays = Math.floor(leftHours / 24);
    // console.log(leftDays);

    // VERSION OF LECTURER



    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / 86400000),
            hours = Math.floor((t / 3600000) % 24),
            minutes = Math.floor((t / 60000) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return { //прикольная идея записывать все переменные в один объект
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"), // надо внимательные быть с селекторами
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds");

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    }

    setClock(id, deadLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResourse": () => (/* binding */ getResourse)
/* harmony export */ });
const postData = async function (url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: data
    });
    console.log(res);
    const newData = await res.json();
    console.log(newData);
    return newData;
};

const getResourse = async function (url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modalwindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalwindow */ "./js/modules/modalwindow.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");










window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => (0,_modules_modalwindow__WEBPACK_IMPORTED_MODULE_3__.openModal)(".modal", modalTimerId), 50000);
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__.default)("form", modalTimerId);
    (0,_modules_modalwindow__WEBPACK_IMPORTED_MODULE_3__.default)("[data-modal]", ".modal", modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)({
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
    });
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.default)(".tabheader__item", ".tabcontent", ".tabcontainer", "tabheader__item_active");
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__.default)(".timer", "2021-09-11");
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map