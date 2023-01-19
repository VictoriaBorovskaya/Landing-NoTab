// функция для вслытия cookies
const cookies = document.getElementById("cookies")

let start = Date.now()
let timer = setInterval(function () {
    let timePassed = Date.now() - start
    if (timePassed >= 2000) {
        clearInterval(timer)
        return
    }
    draw(timePassed)
}, 100)

function draw(timePassed) {
    cookies.style.display = "block"
    cookies.style.bottom = timePassed / 100 + "px"
}

function useCookies() {
    cookies.style.display = "none"
}

setTimeout(() => {
    document
        .getElementById("button-use-cookies")
        .addEventListener("click", useCookies)
}, 2100)
