const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener("click" , () => {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });

        playMatch();
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach((hand) => {
            hand.addEventListener("animationend" , function(){
                this.style.animation = "";
            });
        });    

        const computerOptions = ["rock","paper","scissors"];

        options.forEach((option) => {

            option.addEventListener("click" , function(){

                playerHand.src = `./Media/rock.png`;
                computerHand.src = `./Media/rock.png`;

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                playerHand.style.animation = "shakePlayer 1.2s ease";
                computerHand.style.animation = "shakeComputer 1.2s ease";

                setTimeout(() => {
                    compareHands(this.textContent , computerChoice);

                    playerHand.src = `./Media/${this.textContent}.png`;
                    computerHand.src = `./Media/${computerChoice}.png`;

                    updateScore();
                } , 1200);

            });

        });
        
    };

    const compareHands = (playerChoice , computerChoice) => {
        const winner = document.querySelector(".winner");
        
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "You Win";
                pScore++;
                return;
            }
            else{
                winner.textContent = "Computer Win";
                cScore++;
                return;
            }
        }

        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "You Win";
                pScore++;
                return;
            }
            else{
                winner.textContent = "Computer Win";
                cScore++;
                return;
            }
        }

        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Win";
                cScore++;
                return;
            }
            else{
                winner.textContent = "You Win";
                pScore++;
                return;
            }
        }
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    startGame();

};

game();