import {
    closeModal,
    openModal
} from "./modalwindow";

import {
    postData
} from '../services/services';

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

            postData("http://localhost:3000/requests", json)
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
        openModal(".modal", modalTimerId);
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
            closeModal(".modal");
            thanksModal.remove();
            prevModalDialog.classList.remove("hide");
        }, 1000);
    }

    fetch("http://localhost:3000/menu")
        .then((response) => response.json())
        .then((jsobj) => console.log(jsobj));

}


export default forms;