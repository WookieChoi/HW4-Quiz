//declare/instantiate global variables
//grabs timer html class
var timerEl = document.querySelector(".timer");
//75 seconds remaining
var secondsLeft = 75;

function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        //set timer html class text content to what's shown below
        timerEl.textContent = "Timer: " + secondsLeft;

        //decrement timer
        secondsLeft--;

        //if you run out of time
        if(secondsLeft === 0) {
        // Stops set interval method
        clearInterval(timerInterval);
        // Calls timerOver
        timeOver();
        }
    //1000 milliseconds = 1 second
    }, 1000);
}

// Function to create and append colorsplosion image
function timeOver() {
    timerEl.textContent = "";

}



setTimer();