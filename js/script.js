window.addEventListener("DOMContentLoaded", () => {

    const calculator = require("./modules/calculator"),
        cards = require("./modules/cards"),
        forms = require("./modules/forms"),
        modalwindow = require("./modules/modalwindow"),
        slider = require("./modules/slider"),
        tabs = require("./modules/tabs"),
        timer = require("./modules/timer");


    calculator();
    cards();
    forms();
    modalwindow();
    slider();
    tabs();
    timer();

});