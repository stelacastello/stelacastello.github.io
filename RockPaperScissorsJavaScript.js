document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rock").addEventListener("click", function() {
        play("rock");
    });
    document.getElementById("paper").addEventListener("click", function() {
        play("paper");
    });
    document.getElementById("scissors").addEventListener("click", function() {
        play("scissors");
    });
});

function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result;

    if (playerChoice === computerChoice) {
        result = "It's a tie! You can try again! :)";
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
               playerChoice === 'paper' && computerChoice === 'rock' ||
               playerChoice === 'scissors' && computerChoice === 'paper') {
        result = "Woohooo! You win! Computer chose " + computerChoice + ".";
    } else {
        result = "Oh no! You lose! :( Computer chose " + computerChoice + ".";
    }

    document.getElementById("result").innerText = result;
}
