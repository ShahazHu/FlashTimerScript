let trackedKey = '}';

// Store timers in a map
let timers = new Map();

window.addEventListener('keydown', function (event) {
    if (event.key === trackedKey) {
        // If the key is pressed, start a new timer
        startNewTimer();
    }
});

function startNewTimer() {
    let count = 270;  // 4 minutes and 30 seconds in total, in seconds

    let timer = setInterval(() => {
        count--;
        console.log(`Timer: ${Math.floor(count/60)} minutes and ${count%60} seconds`);

        // If time's up, remove the timer
        if (count <= 0) {
            clearInterval(timer);
            console.log("Time's up!");
            timers.delete(timer);
        }
    }, 1000);

    // Save the timer
    timers.set(timer, count);
}

function changeTrackedKey(key) {
    // Change the tracked key
    trackedKey = key;
}
