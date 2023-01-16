// функция для вслытия cookies
const cookies = document.getElementById("cookies")

let start = Date.now() // запомнить время начала
let timer = setInterval(function () {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start
    if (timePassed >= 2000) {
        clearInterval(timer) // закончить анимацию через 2 секунды
        return
    }
    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    draw(timePassed)
}, 100)

function draw(timePassed) {
    cookies.style.display = "block"
    cookies.style.bottom = timePassed / 100 + "px"
}

function useCookies() {
    cookies.style.display = "none"
}

document
    .getElementById("button-use-cookies")
    .addEventListener("click", useCookies)
