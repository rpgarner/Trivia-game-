// variables
let howToPlay = document.querySelector(".howToButton");
let categoryButton = document.querySelector(".categoryButton");
let rules = ["- Play as one team or by your self","- take turns choosing a topic category and a question in that category ($100 - $500)","- You will get 1 minute to answer each question.","- If the questions is answered correctly, you win the value of the question you picked.","- If the questions answered incorrect. Their turn is over and the question will go off the board. (corectly of incorrectly)","- The game is over when all the questions have been picked","- You need atleast $5000 to win the game."];
let howTo = "How to Play:";
let categories = "Sports, history, music, movies!";
//click events
howToPlay.addEventListener("click", () => {
  alert(`${howTo} 
        ${rules[0]}
        ${rules[1]}
        ${rules[2]}
        ${rules[3]}
        ${rules[4]}
        ${rules[5]}
        ${rules[6]}`)
});
categoryButton.addEventListener("click", () => {
  alert(`Select category at game board, here are the categories:              ${categories}`);
});
