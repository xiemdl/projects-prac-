const choices = ["rock", "paper", "scissor"];
const displayResult = document.getElementById('result');
const displayplayer1Choice = document.getElementById('player1');
const displayplayer2Choice = document.getElementById('player2');
const player1ScoreDisplay = document.getElementById('score1');
const player2ScoreDisplay = document.getElementById('score2');
let player1Score = 0;
let player2Score = 0;

function PLAY() {
    const player1Choice = choices[Math.floor(Math.random() * choices.length)];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    // Determine the result
    if (player1Choice === player2Choice) {
        result = "It's a Tie!";
    } else if (
        (player1Choice === "rock" && player2Choice === "scissor") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "scissor" && player2Choice === "paper")
    ) {
        result = "Player 1 Wins!";
    } else {
        result = "Player 2 Wins!";
    }

    // Update player choice images
    if (player1Choice === 'paper') {
        displayplayer1Choice.src = "./pictures/paper.png"
    } else if (player1Choice === 'rock') {
        displayplayer1Choice.src = "./pictures/rock.png"
    } else {
        displayplayer1Choice.src = "./pictures/scissor.png"
    }

    if (player2Choice === "paper") {
        displayplayer2Choice.src = "./pictures/paper.png"
    } else if (player2Choice === "rock") {
        displayplayer2Choice.src = "./pictures/rock.png"
    } else {
        displayplayer2Choice.src = "./pictures/scissor.png"
        
    }

    // Display the result
    displayResult.textContent = result;

    // Update scores
    if (result === "Player 1 Wins!") {
        player1Score++;
        player1ScoreDisplay.textContent = player1Score;
    } else if (result === "Player 2 Wins!") {
        player2Score++;
        player2ScoreDisplay.textContent = player2Score;
    }

    // winner
    if (player1Score === 5|| player2Score === 5 ) {
            player1Score = 0;
            player2Score = 0;
            player1ScoreDisplay.textContent = player1Score;
            player2ScoreDisplay.textContent = player2Score;
            alert("WINNER KA NA CUTIE");
    };
    }