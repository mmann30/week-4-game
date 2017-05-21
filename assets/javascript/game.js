// Crystal Collector JS

// Programmer Notes:  Game works but code could use refactoring, too much repetition.
// Possible additions:  Win/Loss tracker; 
// Improve graphics: apply cave theme?


// Variables
var targetScore;
var playerScore;
var blueCrystal;
var greenCrystal;
var redCrystal;
var yellowCrystal;

// Function to create a random Target number
function getTargetNum(){
	var targetNum = Math.floor(Math.random() * 100) + 50;
	return targetNum;
}
// Generates random score values when for each button
function getScoreNum(){
	var scoreNum = Math.floor(Math.random() * 20) + 1;
	return scoreNum;
}

// Initializing and resets scores
function reset(){
	targetScore = getTargetNum();
	playerScore = 0;
	blueCrystal = getScoreNum();
	greenCrystal = getScoreNum();
	redCrystal = getScoreNum();
	yellowCrystal = 1;
	// Display iniltial target and player scores
	$(".target-score").html(targetScore);
	$(".player-score").html(playerScore);
}
 
reset();

	// Incriments score by crystal value
	$(".blue").on("click", function(){
		playerScore += blueCrystal;
		$(".player-score").html(playerScore);
		
		if(playerScore === targetScore){
			alert("Congratulations! You Win!");
			reset();
		} else if (playerScore > targetScore){
			alert("You lose");
			reset();
		}
	});

	$(".green").on("click", function(){
		playerScore += greenCrystal;
		$(".player-score").html(playerScore);

		if(playerScore === targetScore){
			alert("Congratulations! You Win!");
			reset();
		} else if (playerScore > targetScore){
			alert("You lose");
			reset();
		}
	});

	$(".red").on("click", function(){
		playerScore += redCrystal;
		$(".player-score").html(playerScore);
		
		if(playerScore === targetScore){
			alert("Congratulations! You Win!");
			reset();
		} else if (playerScore > targetScore){
			alert("You lose");
			reset();
		}
	});

	$(".yellow").on("click", function(){
		playerScore += yellowCrystal;
		$(".player-score").html(playerScore);
		
		if(playerScore === targetScore){
			alert("Congratulations! You Win!");
			reset();
		} else if (playerScore > targetScore){
			alert("You lose");
			reset();
		}
	});


