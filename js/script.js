import calculator from "./modules/calculator";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modalwindow";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import {
    openModal
} from "./modules/modalwindow";


window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 50000);
    calculator();
    cards();
    forms("form", modalTimerId);
    modal("[data-modal]", ".modal", modalTimerId);
    slider({
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
    });
    tabs(".tabheader__item", ".tabcontent", ".tabcontainer", "tabheader__item_active");
    timer(".timer", "2021-09-11");
});