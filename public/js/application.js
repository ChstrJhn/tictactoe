	$(document).ready(function() {

	 var turn = true;

	  var Player = function(id,symbol){
	    this.symbol = symbol;
	    this.id = id;

	  function playerMove(player){
	    $("#tictac").on("click", function(event){
	      event.preventDefault();
	      var $button = $(event.target);
          $button.val(symbol);
	      turn = turn ? false : true;
	      console.log(checkIfWinner());
	      console.log("turn:"+turn);
	      })
	    };
	    this.playerMove = playerMove;

	  function checkIfWinner(player) {
	  	var $board = $("#tictac").children();

	    if ($board.find("#cell0").children().val() == symbol &&
	       $board.find("#cell1").children().val() == symbol &&
	       $board.find("#cell2").children().val() == symbol)
	    return true;

	    if ($board.find("#cell2").children().val() == symbol &&
	       $board.find("#cell5").children().val() == symbol &&
	       $board.find("#cell8").children().val() == symbol)
	    return true;

	    if($board.find("#cell0").children().val() == symbol &&
	      $board.find("#cell3").children().val() == symbol &&
	      $board.find("#cell6").children().val() == symbol)
	    return true;

	    if ($board.find("#cell0").children().val() == symbol &&
	      $board.find("#cell4").children().val() == symbol &&
	      $board.find("#cell8").children().val() == symbol)
	    return true;

	    if ($board.find("#cell2").children().val() == symbol &&
	      $board.find("#cell4").children().val() == symbol &&
	      $board.find("#cell6").children().val() == symbol)
	    return true;

	    if ($board.find("#cell3").children().val() == symbol &&
	      $board.find("#cell4").children().val() == symbol &&
	      $board.find("#cell5").children().val() == symbol)
	    return true;

	    if ($board.find("#cell6").children().val() == symbol &&
	      $board.find("#cell7").children().val() == symbol &&
	      $board.find("#cell8").children().val() == symbol)
	    return true;

	    if ($board.find("#cell1").children().val() == symbol &&
	      $board.find("#cell4").children().val() == symbol &&
	      $board.find("#cell7").children().val() == symbol)
	    return true;

	  return false;
	  }
	  this.checkIfWinner = checkIfWinner;
	};

	var startGame = function(player_1,player_2){
	  	this.player_1 = player_1;
	  	this.player_2 = player_2;
	    setMessage('<p>'+ player_1.symbol + ' starts the game</p>');

	  function setMessage(msg){
	  	$("#message").html(msg);
	    };

	  function takeTurns(){
        if (turn === true){
          player_1.playerMove();
        }
        else if (turn === false){
          player_2.playerMove();   
        }
	  }
	  this.takeTurns = takeTurns;

	  function gameEnd(){
	  	if (player_1.checkIfWinner === true){
	  		return true
	  	}
	  	else if (player_2.checkIfWinner === true){
	  		return true
	  	}
	  	return false
	  }
	  this.gameEnd = gameEnd;

	  // while (this.gameEnd() === false){
   //        this.takeTurns();
   //      }

	};

	var player_1 = new Player(1,"X");
	var player_2 = new Player(2,"O");
	var game = new startGame(player_1,player_2);

	while(game.gameEnd === false){
      game.takeTurns();
	}


	});
