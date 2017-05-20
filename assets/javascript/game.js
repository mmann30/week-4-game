// Crystal Collector JS

// Initiating target and player score values
var targetScore = 0;
var playerScore = 0;

// function to create a random number to incriment by.
function getRanNum(){
	var ranNum = Math.floor(Math.random() * 50) + 1;
}


$(".blue").on("click", function(){
	playerScore = getRanNum();
	$(".player-score").html(playerScore);
});