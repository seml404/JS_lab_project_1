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

    const getResourse = async function (url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    };

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

    getResourse("http://localhost:3000/menu")
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

module.exports = cards;