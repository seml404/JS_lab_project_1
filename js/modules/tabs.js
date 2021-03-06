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

export default tabs;