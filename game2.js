// $(".peace1").text("*");

// $(".peace2").text("#");

var counterPlayerOne = 0;
var counterPlayerTwo = 0;
var playerOneWins = 0;
var playerTwoWins = 0;


//Function triggers a move when keyboard button is pressed
$(document).keypress(function(action){

//when "1" is pressed this action will start 
	if (action.which == 49) {
		var playerOne = $("#start1");
		//selectedText = $(this).text()
		//$(".block").remove();
		var newBlock = $(".block").eq(counterPlayerOne + 1);
		(newBlock).append("*");
		counterPlayerOne = (counterPlayerOne + 1);

//when "0" is pressed this action will start	
	} else if (action.which == 48) {
		var playerTwo = $("#start2");
		//$("#start2").remove();
		var newBlock2 = $(".block2").eq(counterPlayerTwo + 1);
		(newBlock2).append("*");
		counterPlayerTwo = (counterPlayerTwo + 1)
	}

//Will keep track of wins and say who won the round
	if (counterPlayerOne === 7) {
		playerOneWins += 1;
		$('h2').append("<br/>" + "Player One wins!" + " Score: " + playerOneWins);
		alert("Player One wins!");

	} else if (counterPlayerTwo === 7) {
		playerTwoWins += 1;
		$('h2').append("<br/>" + "Player Two wins!" + " Score: " + playerOneWins);
		alert("Player Two Wins!");
	}



	
})
// var target = $('td').eq(0)

// 	$(".peace1").on("click", function click(event) {
// 	  	selectedText = $(this).text()
// 	 	console.log(selectedText);
// 		$("target").append( "<td>" + selectedText + "<td>" );
// 	});
	
// })
