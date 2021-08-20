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

module.exports = calculator;