let counter = 0; // Start the counter at 0
let timerInterval; // To hold the interval ID

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    counter++;
    document.getElementById("counter").textContent = counter;
  }, 1000);
}

// Call startTimer when the page loads
window.onload = function() {
  startTimer();
};
