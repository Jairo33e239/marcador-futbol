// script.js

// Score variables
let homeScore = 0;
let awayScore = 0;

// Initialize storage
function initLocalStorage() {
    if (!localStorage.getItem('homeScore')) {
        localStorage.setItem('homeScore', homeScore);
    }
    if (!localStorage.getItem('awayScore')) {
        localStorage.setItem('awayScore', awayScore);
    }
    updateScores();
}

// Update score function
function updateScores() {
    homeScore = parseInt(localStorage.getItem('homeScore'));
    awayScore = parseInt(localStorage.getItem('awayScore'));
    document.getElementById('home-score').innerText = homeScore;
    document.getElementById('away-score').innerText = awayScore;
}

// Increment score for home team
function incrementHome() {
    homeScore++;
    localStorage.setItem('homeScore', homeScore);
    updateScores();
}

// Increment score for away team
function incrementAway() {
    awayScore++;
    localStorage.setItem('awayScore', awayScore);
    updateScores();
}

// Timer variables
let timer;
let isRunning = false;
let seconds = 0;

// Timer functions
function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('timer').innerText = formatTime(seconds);
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    document.getElementById('timer').innerText = formatTime(seconds);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Change color function
function changeColor(team) {
    let color = team === 'home' ? 'blue' : 'red';
    document.getElementById('game').style.backgroundColor = color;
}

// Logo upload function
function uploadLogo(event, team) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const logo = document.getElementById(`${team}-logo`);
        logo.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Initialize local storage on load
window.onload = initLocalStorage;
