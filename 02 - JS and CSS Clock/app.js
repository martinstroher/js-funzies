const runClock = () => {
    const now = new Date();
    const secondHand = document.querySelector(".second-hand")
    const minuteHand = document.querySelector(".min-hand")
    const hourHand = document.querySelector(".hour-hand")

    const secondDegrees = 360 * (now.getSeconds() / 60) + 90
    const minuteDegrees = 360 * (now.getMinutes() / 60) + 90
    const hourDegrees = 360 * (now.getHours() / 12) + 90
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(runClock, 1000)