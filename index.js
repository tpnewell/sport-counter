// Variables
const homeCount = document.getElementById("home-tally");
const guestCount = document.getElementById("guest_score");
let homeTally = 0;
let guestTally = 0;

// Functions
// add 1 to home
function homeAddOne() {
    homeTally += 1;
    homeCount.textContent = homeTally;
}

// add 2 to home
function homeAddTwo() {
    homeTally += 2;
    homeCount.textContent = homeTally;
}

// add 3 to home
function homeAddThree() {
    homeTally += 3;
    homeCount.textContent = homeTally;
}

// add 1 to guest
function guestAddOne() {
    guestTally += 1;
    guestCount.textContent = guestTally;  
}

// add 2 to guest
function guestAddTwo() {
    guestTally += 2;
    guestCount.textContent = guestTally;
}

// add 3 to guest
function guestAddThree() {
    guestTally += 3;
    guestCount.textContent = guestTally;
}


