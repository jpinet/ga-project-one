var game = {
	turn: "Please start the game",
	scoreX: 0,
	scoreO: 0,
	c1: "",
	c2: "",
	c3: "",
	c4: "",
	c5: "",
	c6: "",
	c7: "",	
	c8: "",
	c9: "",
	stop: false,
};

// var cells = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"];
var cells = [game.c1, game.c2, game.c3, game.c4, game.c5, game.c6, game.c7, game.c8, game.c9];


$(function(){

	// var source = $("#game-template").html();
	// var template = Handlebars.compile(source);
	// $("body").html(template(game));

	var buttonNewGame = document.getElementById("new-game");
	buttonNewGame.onclick = function newGame(){
		game.stop = false;
		$("td").html("");
		for(i=0; i<cells.length; i++){
			cells[i] = "";
		};
		if(game.turn === "Please start the game"){
			var init = Math.floor(Math.random()*2);
			if (init === 0){
			game.turn = "X";
			$("#turn").html("Player's turn = " + game.turn)
			} else {
			game.turn = "O";
			$("#turn").html("Player's turn = " + game.turn)
			};
		};
	};

	var buttonReset = document.getElementById("reset");
	buttonReset.onclick = function reset(){
		game.scoreO = 0;
		game.scoreX = 0;
		game.turn = "Please start the game";
		game.stop = false;
		for(i=0; i<cells.length; i++){
			cells[i] = "";
		};
		$("td").html("");
		$('#turn').html("Player's turn = " + game.turn);
		$('#player-x').html("Player X: " + game.scoreX);
		$('#player-o').html("Player O: " + game.scoreO);
	}

	$('td').on("click", function(){
		game[this.id] = game.turn;
		console.log(game[this.id])
		if(this.innerText === "" && game.turn !== "Please start the game" && game.stop === false){
			$(this).html(game.turn);
			declareWinner(this.innerText);
			if(game.turn === "X"){
				game.turn = "O";
				$('#turn').html("Player's turn = " + game.turn);
			} else {
				game.turn = "X";
				$('#turn').html("Player's turn = " + game.turn);
			}
		};
	});

	function checkRow(){
		if((game.c1 === game.c2 && game.c1 === game.c3 && game.c1 !== "") || (game.c4 === game.c5 && game.c4 === game.c6 && game.c4 !== "") || 
			(game.c7 === game.c8 && game.c7 === game.c9 && game.c7 !== "") || (game.c1 === game.c4 && game.c1 === game.c7 && game.c1 !== "") ||
			(game.c2 === game.c5 && game.c2 === game.c8 && game.c2 !== "") || (game.c3 === game.c6 && game.c3 === game.c9 && game.c3 !== "") ||
			(game.c1 === game.c5 && game.c1 === game.c9 && game.c1 !== "") || (game.c3 === game.c5 && game.c3 === game.c7 && game.c3 !== "")){
			return true;
		};
	};

	function declareWinner(input){
		if(checkRow()){
			console.log("Player " + input + " wins")
		 	game.stop = true;
			if(game.turn === "X"){
				game.scoreX += 1;
				$('#player-x').html("Player X: " + game.scoreX);
			} else {
				game.scoreO += 1;
				$('#player-o').html("Player O: " + game.scoreO);
			}
		} 
	}

});
