var currentPlayer = 1;

var images = ["Dory.jpeg", "Tad.jpg"];

var board = [];
board.push([]);
board.push([]);
board.push([]);

divClicked = function(boxNumber){
	fillBox(boxNumber);
	lockBox(boxNumber);
	storeBoard(boxNumber);
	checkWinner();
	changePlayers();
}

checkWinner = function(){
	checkRow(0);
	checkRow(1);
	checkRow(2);

	checkColumn(0);
	checkColumn(1);
	checkColumn(2);

	checkDiagonals();
}

checkRow = function(row){
	if(board[row][0] == board[row][1] && board[row][1] == board[row][2] && board[row][0] != null){
		announceWinner(board[row][0]);
	}
}

checkColumn = function(column){
	if(board[0][column] == board[1][column] && board[1][column] == board[2][column] && board[0][column] != null){
		announceWinner(board[0][column]);
	}
}

checkDiagonals = function(){
	if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != null){
		announceWinner(board[0][0]);
	} else if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != null){
		announceWinner( board[0][2] );
	}
}

announceWinner = function(playerNumber){
	alert( playerNumber + " is the winner!");
	
}

changePlayers = function(){
	if (currentPlayer == 1){
		currentPlayer ++;
	} else currentPlayer --;
	console.log("Current player is" + currentPlayer)
}

fillBox = function(boxNumber) {
	box = document.getElementById('box' + boxNumber);
	img = document.createElement('img');
	img.src=images[currentPlayer - 1];
	box.appendChild(img);
}

lockBox = function(boxNumber){
	box = document.getElementById('box' + boxNumber);
	box.className = box.className + " locked";
}

storeBoard = function(boxNumber){
	var row, column;
	switch(boxNumber){
		case 1:
			row = 1;
			column = 1;
			break;
		case 2:
			row = 1;
			column = 2;
			break;
		case 3:
			row = 1;
			column = 3;
			break;
		case 4:
			row = 2;
			column = 1;
			break;
		case 5:
			row = 2;
			column = 2;
			break;
		case 6:
			row = 2;
			column = 3;
			break;
		case 7:
			row = 3;
			column = 1;
			break;
		case 8:
			row = 3;
			column = 2;
			break;
		case 9:
			row = 3;
			column = 3;
			break;
		default:
			break;
		
	}
board[row - 1][column - 1] = currentPlayer;
console.log(board);
}
