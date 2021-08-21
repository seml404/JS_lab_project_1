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

export default modal;
export {
    closeModal
};
export {
    openModal
};