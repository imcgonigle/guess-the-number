var guess = window.prompt('Lets get started. Guess a number between 0 and 100');
var number = Math.floor(Math.random() * 101);

while (guess !== null) {
    guess = parseInt(guess);

    if (isNaN(guess)) {
        guess = window.prompt("Hey!!!! That wasn't a number!");
    } else if (guess === number) {
        window.alert(`Congrats you got it! The correct number is ${number}`);
        break;
    } else if (guess > number) {
        guess = window.prompt('Too High...');
    } else {
        guess = window.prompt('Too Low...');
    }
}