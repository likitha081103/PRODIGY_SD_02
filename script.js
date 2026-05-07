let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {

    let guess = parseInt(document.getElementById("guessInput").value);

    attempts++;

    if (isNaN(guess)) {
        document.getElementById("message").innerHTML = "Enter a valid number!";
        return;
    }

    if (guess < randomNumber) {
        document.getElementById("message").innerHTML = "Too low ⬇️";
    }

    else if (guess > randomNumber) {
        document.getElementById("message").innerHTML = "Too high ⬆️";
    }

    else {
        document.getElementById("message").innerHTML = "Correct! 🎉";

        document.getElementById("attempts").innerHTML =
        "Attempts: " + attempts;
    }
}
