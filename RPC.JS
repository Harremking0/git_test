
    // computer randomly selects a parameter , store it in computerSelection;
     function computerPLay(){
         result = Math.floor(Math.random() * (3)+1); 
        if (result===1) {
            return "rock"}
            else if (result===2){
                return "paper"
            }
            else {
                return "cissors"
               }
     }
    ;
    let computerSelection
    // IF player wins RETURN YOu won ! ;
    // IF computer wins RETURN You lost!;

    
    function playRound(computerSelection,playerSelection)
    {
        computerSelection=computerPLay();
        if (playerSelection==="rock" && computerSelection==="paper"){
        scoreState = "Paper beats rock you Lose!"
        results.textContent = scoreState;
    }
    else if (playerSelection==="paper" && computerSelection==="cissors"){
        scoreState = "Cissors beats Paper you Lose!"
        results.textContent = scoreState;                                                       
    }
       else if (playerSelection==="cissors"&& computerSelection==="rock"){
        scoreState = "Rock beats cissors you Lose!"
        results.textContent = scoreState;
       }
       else if (playerSelection==="cissors"&& computerSelection==="paper"){
        scoreState = "Cissors beats paper you Win!"
        results.textContent = scoreState;
       }
       else if (playerSelection==="rock"&& computerSelection==="cissors"){
        scoreState = "Rock beats cissors you Win!"
        results.textContent = scoreState;
       }
       else if (playerSelection==="paper"&& computerSelection==="rock"){
        scoreState =  "Paper beats rock you Win!"
        results.textContent = scoreState;
       }
       else{
        scoreState = "Its a tie!";
        results.textContent = scoreState;
       }
       setScore()
    }
    // finding whoever wins a round : 
    let playerScore=0;
    let computerScore=0;
    function setScore(){
        if (isGameEnd()===true){
            let winner=compare(playerScore,computerScore);
            results.textContent = winner +" ,player score :"+playerScore+" ,comptuer score :"+computerScore;
            return;
        }
        else if (scoreState=== "Cissors beats Paper you Win!" ) {
            playerScore+=1
        }
        else if (scoreState=== "Paper beats rock you Win!" ) {
            playerScore+=1
        }
        else if (scoreState=== "Rock beats cissors you Win!" ) {
            playerScore+=1
        }
        else if (scoreState=== "Cissors beats Paper you Lose!" ) {
            computerScore+=1
        }
        else if (scoreState=== "Paper beats rock you Lose!" ) {
            computerScore+=1
        }
        else if (scoreState=== "Rock beats cissors you Lose!" ) {
            computerScore+=1
        }
        else if (scoreState=== "Its a tie!" || playerScore===0 && computerScore===0) { 

        }
        score.textContent = ("\n" + " player score:      " + playerScore + "\n" + "     computer score: "+computerScore);
        
    
    }
    let scoreState;
    function compare (playerScore,computerScore){ 
        if (playerScore>computerScore){
           return("Player wins!")
        }
        else if (playerScore<computerScore){
            return ("Computer wins! You loose!")
        }
        else if (playerScore===computerScore){
            return ("Its a tie!")
        }
     
    }
    function isGameEnd (){
        if (playerScore+computerScore>=5){
            return true 
        }
        else {
            return false
        }
    }
    function retryGame(){
    playerScore=0;
    computerScore=0;
    results.textContent = "";
    }

 const buttons = Array.from (document.querySelectorAll(".btn"));
 buttons.forEach(button => {
     button.addEventListener("click",()=>playRound(computerSelection,button.id));
    
     const container = document.querySelector("#container");
    const results = document.querySelector("#results");
 });
 const retryButton = document.querySelector("#reset");
 retryButton.addEventListener("click",()=>retryGame());
 const score = document.querySelector("#score")
    





     


