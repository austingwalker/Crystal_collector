//Global Variables
//=================================================================================================

//crystals
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    red:
    {
        namee: "red",
        value: 0
        
    },
    yellow:
    {
        name: "yellow",
        value: 0
    },
};

//scores
var currentScore = 0;
var targetScore = 0;

//wins and losses
var wins = 0;
var losses = 0;





//Functions
//=================================================================================================

//Helper function for getting random numbers
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Starts the game and restarts the game
var startGame = function(){

    //Reset the current score
    currentScore = 0;
    //Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);
    //Set different values for each of the crystals (between 1 and 12)

    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
   //Change the HTML to reflect all of these changes

   $("#target-score").html(targetScore);
   $("#your-score").html(currentScore);

   //Testing console
   console.log("-------------------------------")
   console.log("Target Score: " + targetScore);
   console.log("blue: " + crystal.blue.value + " | green: " + crystal.green.value + " | red: " + crystal.red.value + " | yellow: " + crystal.yellow.value); 
   console.log("-------------------------------")


}
//Respond to clicks on the crystals
var addValues = function(crystal){
    currentScore = currentScore + crystal.value;

    //Change the html to reflect changes in the current score
    $("#your-score").html(currentScore);

    checkWin()

    console.log("Your Score: " + currentScore);

}

//Check if user won or lost and rest the game
var checkWin = function(){

    //Check if the currentScore is larger than targetScore

    if(currentScore > targetScore){
        alert("Sorry, you lost!")

        losses++;

        $("#lossCounter").html(losses);

        startGame();
    }

    else if(currentScore == targetScore){
        alert("You won!");

        wins++;

        $("#winCounter").html(wins);

        startGame();
    }

}







//Main Process (where functions are called)
//=================================================================================================

//Starts the game the first time
startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
})

$("#green").click(function(){
    addValues(crystal.green);
})

$("#red").click(function(){
    addValues(crystal.red);
})

$("#yellow").click(function(){
    addValues(crystal.yellow);
})

