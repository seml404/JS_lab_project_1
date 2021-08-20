function timer() {

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

    const deadLine = "2021-08-11";

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
            return `0${num}`
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
    setClock(".timer", deadLine);




}

module.exports = timer;