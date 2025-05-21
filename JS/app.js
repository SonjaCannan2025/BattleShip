const squares = document.querySelectorAll(".square");
 
const startGame = document.querySelector(".startGame");

const resultGame = document.querySelector(".result");

const resetGame = document.querySelector(".reset");

const battleshipPosition = Math.floor(Math.random() * 9);

let moves = 0;

let BattleField = false;

let shipIndex = null;

      moves = 0;

        BattleField = true;

      


 
squares.forEach((square, index) => {

    square.addEventListener("click", function () {          


        const gamePlayed = square.style.backgroundColor;
    


        if(!BattleField){
          resultGame.textContent = "Please start!"

          resultGame.classList.remove("hidden");
        
          return;

        }

        moves++;

        if (index === battleshipPosition) {

            square.style.backgroundColor = "green";

            resultGame.textContent = 'You win ${moves} moves!'

            resultGame.classList.remove("hidden");

            square.textContent = "You win!";

        BattleField = false;    

        } else {

            square.style.backgroundColor = "red";

            square.textContent = "You Lose!";

        }
       

        

    });

});
 


