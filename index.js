let homeEl = document.getElementById("home-el")
console.log(homeEl)

let guestEl = document.getElementById("guest-el")
console.log(guestEl)

let homeScore = 0
let guestScore = 0


function hmAdd1() {
    homeScore = homeScore + 1
    homeEl.textContent = homeScore
    console.log("button1 was clicked")
}

function hmAdd2() {
    homeScore = homeScore + 2
    homeEl.textContent = homeScore
    console.log("button2 was clicked")
}
function hmAdd3() {
    homeScore = homeScore + 3
    homeEl.textContent = homeScore
    console.log("button3 was clicked")
}



function gstAdd1() {
    guestScore = guestScore + 1
    guestEl.textContent = guestScore
    console.log("button1 was clicked")
}

function gstAdd2() {
    guestScore = guestScore + 2
    guestEl.textContent = guestScore
    console.log("button1 was clicked")
}
function gstAdd3() {
     guestScore = guestScore + 3
    guestEl.textContent = guestScore
    console.log("button1 was clicked")
}

function clearBtn() {
    guestScore = 0
    homeScore = 0
    guestEl.textContent = 0
    homeEl.textContent = 0
}

let timerEl = document.getElementById("timer-display")
let timerInterval = null
let timeRemaining = 720 // 12 minutes in seconds (12 * 60)

function updateTimerDisplay() {
    let minutes = Math.floor(timeRemaining / 60)
    let seconds = timeRemaining % 60
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function startTimer() {
    if (timerInterval === null) { // Prevent multiple intervals
        timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--
                updateTimerDisplay()
            } else {
                pauseTimer()
                alert("Time's up!")
            }
        }, 1000) // Updates every 1 second
    }
}

function pauseTimer() {
    clearInterval(timerInterval)
    timerInterval = null
}

function resetTimer() {
    pauseTimer()
    timeRemaining = 720 // Reset to 12 minutes
    updateTimerDisplay()
}