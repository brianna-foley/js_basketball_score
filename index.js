let homeScore = document.getElementById("home-score")

let homeCount = 0

function add1() {
  homeCount += 1
  homeScore.innerText = homeCount
}

function add2() {
  homeCount += 2
  homeScore.innerText = homeCount
}

function add3() {
  homeCount += 3
  homeScore.innerText = homeCount
}

let guestScore = document.getElementById("guest-score")

let guestCount = 0

function add1ToGuest() {
  guestCount += 1
  guestScore.innerText = guestCount
}

function add2ToGuest() {
  guestCount+= 2
  guestScore.innerText = guestCount
}

function add3ToGuest() {
  guestCount += 3
  guestScore.innerText = guestCount
}
