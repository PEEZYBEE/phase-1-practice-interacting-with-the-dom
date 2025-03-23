let counter = 0; // Start the counter at 0
let timerInterval;
let likes = 0;
let isPaused = false;

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

// Increment counter
document.getElementById("plus").addEventListener("click", function() {
  counter++;
  document.getElementById("counter").textContent = counter;
});

// Decrement counter
document.getElementById("minus").addEventListener("click", function() {
  counter--;
  document.getElementById("counter").textContent = counter;
});

// Like button functionality
document.getElementById("like").addEventListener("click", function() {
  likes++;
  document.getElementById("likes").textContent = "Likes: " + likes;
});

// Pause/Resume functionality
document.getElementById("pause").addEventListener("click", function() {
  if (isPaused) {
    startTimer(); // Restart the timer
    document.getElementById("pause").textContent = "Pause"; // Change button to "Pause"
    enableButtons(); // Enable other buttons
  } else {
    clearInterval(timerInterval); // Stop the timer
    document.getElementById("pause").textContent = "Resume"; // Change button to "Resume"
    disableButtons(); // Disable other buttons
  }
  isPaused = !isPaused; // Toggle the pause state
});

// Disable other buttons
function disableButtons() {
  document.getElementById("plus").disabled = true;
  document.getElementById("minus").disabled = true;
  document.getElementById("like").disabled = true;
}

// Enable other buttons
function enableButtons() {
  document.getElementById("plus").disabled = false;
  document.getElementById("minus").disabled = false;
  document.getElementById("like").disabled = false;
}

// Handle comment submission
document.getElementById("submitComment").addEventListener("click", function() {
  let commentText = document.getElementById("commentInput").value;
  if (commentText) {
    let commentDiv = document.createElement("div");
    commentDiv.textContent = commentText;
    document.getElementById("comments").appendChild(commentDiv);
    document.getElementById("commentInput").value = ""; // Clear input after submission
  }
});
