function play(now) {
    // hidden the current interface and start the game
    hidden(now);

    gameLoop();
}

function gameLoop() {
    // step - 1: generate a random letter
    const char = getRandomLetter();

    const showBar = document.getElementById('show-bar');
    showBar.innerText = char;
}