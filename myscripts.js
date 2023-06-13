const boxes=document.querySelectorAll('.box');
var numberOfPlays=0;
var winner="";
var HumanPlayer="";
var gameOver=false;
var mode="";
var computerChoice= 0;
let player="O"; //X player is human and O player is computer 
var choosePlayer=0;
boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) 
{
    if ((player!="X") || (gameOver==true))
    {
      document.getElementById("message").innerHTML="\!ComputerTurn!";
      // alert("it is not you turn") 
      return;
    }
    if(box.id=="zero")
    putNaughtOrCross(0)
    if(box.id=="one")
    putNaughtOrCross(1)
    if(box.id=="two")
    putNaughtOrCross(2)
    if(box.id=="three")
    putNaughtOrCross(3)
    if(box.id=="four")
    putNaughtOrCross(4)
// alert(event.target)
   if(box.id=="five")
    putNaughtOrCross(5)
    if(box.id=="six")
    putNaughtOrCross(6)
    if(box.id=="seven")
    putNaughtOrCross(7)
    if(box.id=="eight")
    putNaughtOrCross(8)
 //add Event Listener 
    });  
    });
//Tic tac toe table designer//

  TicTacToe=[0,1,2,
           3,4,5,
           6,7,8];
// each arrange location is set one space

TicTacToe = [
  "", "", "",
  "", "", "",
  "", "", ""
];

//let player="O"; //X player is human and O player is computer 

function checkWinner() //code fuction for every single row//
{
    checkTopRow();
    checkMiddleRow();
    checkbottomRow();
    checkdiagonal1Row();
    checkdiagonal2Row();
    checkcolumn1Row();
    checkcolumn2Row();
    checkcolumn3Row();
}


function checkTopRow() //Code for the top row//
{   
  const TopRow = TicTacToe[0] + TicTacToe[1] + TicTacToe[2];
    if (TopRow === "XXX")
    {
      winner = player;
      gameOver = true;
    displayWinner("X player wins");
    } 
  else if (TopRow === "OOO")
    {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
    }
}


function checkMiddleRow() {
  MiddleRow = TicTacToe[3] + TicTacToe[4] + TicTacToe[5];
  if (MiddleRow == "XXX") {
    winner = player;
    gameOver = true;
    displayWinner("X player wins");
  } 
  else if (MiddleRow == "OOO")
   {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
  }
}

function checkbottomRow() {
  bottomRow = TicTacToe[6] + TicTacToe[7] + TicTacToe[8];
  if (bottomRow == "XXX") {
    winner = player;
    gameOver = true;
    displayWinner("X player wins");
  } else if (bottomRow == "OOO") {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
  }
}
function checkdiagonal1Row() {
  diagonal1Row = TicTacToe[0] + TicTacToe[4] + TicTacToe[8];
  if (diagonal1Row == "XXX") {
    winner = player;
    gameOver = true;
    displayWinner("X player wins");
  } else if (diagonal1Row == "OOO") {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
  }
}

function checkdiagonal2Row() {
  diagonal2Row = TicTacToe[6] + TicTacToe[4] + TicTacToe[2];
  if (diagonal2Row == "XXX") {
    winner = player;
    gameOver = true;
    displayWinner("X player wins");
  } else if (diagonal2Row == "OOO") {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
  }
}
function checkcolumn1Row() {
  column1Row = TicTacToe[0] + TicTacToe[3] + TicTacToe[6];
  if (column1Row == "XXX") {
    winner = player;
    gameOver = true;
    displayWinner("X player wins");
  } else if (column1Row == "OOO") {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
  }
}

function checkcolumn2Row() {
  column2Row = TicTacToe[1] + TicTacToe[4] + TicTacToe[7];
  if (column2Row == "XXX") {
    winner = player;
    gameOver = true;
    displayWinner("X player wins");
  } else if (column2Row == "OOO") {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
  }
}


function checkcolumn3Row() {
  column3Row = TicTacToe[2] + TicTacToe[5] + TicTacToe[8];
  if (column3Row == "XXX") {
    winner = player;
    gameOver = true;
    displayWinner("X player wins");
  } else if (column3Row == "OOO") {
    winner = player;
    gameOver = true;
    displayWinner("O player wins");
  }
}

function putNaughtOrCross(boxNumber) {
  let onscreenBoard = document.getElementsByClassName("box");
  if (TicTacToe[boxNumber] === "") {
    onscreenBoard[boxNumber].innerText = player;
    TicTacToe[boxNumber] = player;
    numberOfPlays++;
    if (player === "X") {
      player = "O";
      display();
      const TimeoutRef = setTimeout(computerPlays, 2000);
    }
    checkWinner();
  }
}

function generateRandomInteger(max) {
   return Math.floor(Math.random() * max);
}

  
function display()
{
  if (player == "X") {
    onscreenBoard[boxNumber].innerText = player;
    TicTacToe[boxNumber] = player;
    numberOfPlays++;
    display();
    player = "O"; // Change player to computer after displaying
    checkWinner();
    const TimeoutRef = setTimeout(computerPlays, 2000);
  }
  
  if (player=="O") 
  {
    // alert("computer2")
    document.getElementById("message").innerHTML="ComputerPlays"
  }
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

function playDefencePositionOne()
{
    decider=generateRandomInteger(4);
  // alert("decider="+decider);
    if(decider == 0)
       return 0;
    if(decider == 1)
       return 2;
    if(decider == 2)
       return 6;
     if(decider == 3)
       return 8;
}


function hard()
	{
    //start of function hard
 		Row2=TicTacToe[3]+TicTacToe[4]+TicTacToe[5];
 		if ((Row2=="X")&&(numberOfPlays==1))//This if statement is testing against X only because the concatenation operator ignores spaces
 		{
    let boardPosition=playDefencePositionOne();
		return boardPosition;//this is the position on the tic tac toe board where the computer will play
		}
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE FIRST ROW AND BLOCK ////////////////
    else if ((TicTacToe[0]=="X") && (TicTacToe[1]=="X") && (TicTacToe[2]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
		{	
		return 2;//block the human player from winning in row1 by playing in box 2
	  }
    else if ((TicTacToe[0]=="") && (TicTacToe[1]=="X") && (TicTacToe[2]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 0;//block the human player from winning in row1 by playing in box 0
    }
    else if ((TicTacToe[0]=="X") && (TicTacToe[1]=="") && (TicTacToe[2]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 1;//block the human player from winning in row1 by playing in box 1
    }
///////////////END OF FIRST ROW TEST////////////////////////////
////////TEST IF HUMAN PLAYER IS  ABOUT TO WIN IN THE SECOND ROW AND BLOCK ////////////////
    else if ((TicTacToe[3]=="X") && (TicTacToe[4]=="X") && (TicTacToe[5]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
{	
  return 5;//block the human player from winning in row1 by playing in box 5
    }

    else if ((TicTacToe[3]=="") && (TicTacToe[4]=="X") && (TicTacToe[5]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 3;//block the human player from winning in row1 by playing in box 3
    }
    else if ((TicTacToe[3]=="X") && (TicTacToe[4]=="") && (TicTacToe[5]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 4;//block the human player from winning in row1 by playing in box 4
    }
///////////////END OF SECOND ROW TEST////////////////////////////
////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE TIRTH ROW AND BLOCK ////////////////
    else if ((TicTacToe[6]=="X") && (TicTacToe[7]=="X") && (TicTacToe[8]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 8;//block the human player from winning in row1 by playing in box 8
    }
    else if ((TicTacToe[6]=="") && (TicTacToe[7]=="X") && (TicTacToe[8]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
   return 6;//block the human player from winning in row1 by playing in box 6
   }

   else if ((TicTacToe[6]=="X") && (TicTacToe[7]=="") && (TicTacToe[8]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
     return 7;//block the human player from winning in row1 by playing in box 7
           }
///////////////END OF TIRTH ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE DIAGONAL1 ROW AND BLOCK ////////////////
    else if ((TicTacToe[0]=="X") && (TicTacToe[4]=="X") && (TicTacToe[8]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
		{	
		return 8;//block the human player from winning in row1 by playing in box 8
	  }

    else if ((TicTacToe[0]=="") && (TicTacToe[4]=="X") && (TicTacToe[8]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 0;//block the human player from winning in row1 by playing in box 0
    }

    else if ((TicTacToe[0]=="X") && (TicTacToe[4]=="") && (TicTacToe[8]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 4;//block the human player from winning in row1 by playing in box 4
    }
///////////////END OF DIAGONAL1 ROW TEST////////////////////////////
////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE DIAGONAL2 ROW AND BLOCK ////////////////
    else if ((TicTacToe[6]=="X") && (TicTacToe[4]=="X") && (TicTacToe[2]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 2;//block the human player from winning in row1 by playing in box 2
    }
    else if ((TicTacToe[6]=="") && (TicTacToe[4]=="X") && (TicTacToe[2]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 6;//block the human player from winning in row1 by playing in box 6
    }
    else if ((TicTacToe[6]=="X") && (TicTacToe[4]=="") && (TicTacToe[2]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 4;//block the human player from winning in row1 by playing in box 4
    }
///////////////END OF DIAGONAL2 ROW TEST////////////////////////////
////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN1 AND BLOCK ////////////////
    else if ((TicTacToe[0]=="X") && (TicTacToe[3]=="X") && (TicTacToe[6]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 6;//block the human player from winning in row1 by playing in box 6
    }

   else if ((TicTacToe[0]=="") && (TicTacToe[3]=="X") && (TicTacToe[6]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
   {	
   return 0;//block the human player from winning in row1 by playing in box 0
    }

   else if ((TicTacToe[0]=="X") && (TicTacToe[3]=="") && (TicTacToe[6]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
   return 3;//block the human player from winning in row1 by playing in box 3
   }
///////////////END OF COLUMN1 TEST////////////////////////////
////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN2 AND BLOCK ////////////////
   else if ((TicTacToe[1]=="X") && (TicTacToe[4]=="X") && (TicTacToe[7]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
   {	
   return 7;//block the human player from winning in row1 by playing in box 7
   }
   else if ((TicTacToe[1]=="") && (TicTacToe[4]=="X") && (TicTacToe[7]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
   {	
   return 1;//block the human player from winning in row1 by playing in box 1
    }
   else if ((TicTacToe[1]=="X") && (TicTacToe[4]=="") && (TicTacToe[7]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
   {	
   return 4;//block the human player from winning in row1 by playing in box 4
   }
///////////////END OF COLUMN2 TEST////////////////////////////
////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN3 AND BLOCK ////////////////
    else if ((TicTacToe[2]=="X") && (TicTacToe[5]=="X") && (TicTacToe[8]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
    {	
    return 8;//block the human player from winning in row1 by playing in box 8
    }
   else if ((TicTacToe[2]=="") && (TicTacToe[5]=="X") && (TicTacToe[8]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
   {	
   return 2;//block the human player from winning in row1 by playing in box 2
   }
   else if ((TicTacToe[2]=="X") && (TicTacToe[5]=="") && (TicTacToe[8]=="X"))//see if there is an X in box 0 and 1 and an empty space in box 2
   {	
   return 5;//block the human player from winning in row1 by playing in box 5
   }
///////////////END OF COLUMN3 TEST////////////////////////////
 		else                {
 			//return generateRandomInteger(9);//computer just searches for an empty slot to play
    let randomPlayingChoice=  attack();
    return randomPlayingChoice;
                 }
} //end of function hard

function attack()
{
        ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE FIRST ROW AND BLOCK ////////////////
        if ((TicTacToe[0]=="O") && (TicTacToe[1]=="O") && (TicTacToe[2]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
        return 2;//block the human player from winning in row1 by playing in box 2
        }
        else if ((TicTacToe[0]=="") && (TicTacToe[1]=="O") && (TicTacToe[2]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
        return 0;//block the human player from winning in row1 by playing in box 0
       }
       else if ((TicTacToe[0]=="O") && (TicTacToe[1]=="") && (TicTacToe[2]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
        return 1;//block the human player from winning in row1 by playing in box 1
       }
    ///////////////END OF FIRST ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE SECOND ROW AND BLOCK ////////////////
        else if ((TicTacToe[3]=="O") && (TicTacToe[4]=="O") && (TicTacToe[5]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
        return 5;//block the human player from winning in row1 by playing in box 5
        }
        else if ((TicTacToe[3]=="") && (TicTacToe[4]=="O") && (TicTacToe[5]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
       {	
       return 3;//block the human player from winning in row1 by playing in box 3
        } 
        else if ((TicTacToe[3]=="O") && (TicTacToe[4]=="") && (TicTacToe[5]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
       return 4;//block the human player from winning in row1 by playing in box 4
        }
    ///////////////END OF SECOND ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE TIRTH ROW AND BLOCK ////////////////
        else if ((TicTacToe[6]=="O") && (TicTacToe[7]=="O") && (TicTacToe[8]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
       return 8;//block the human player from winning in row1 by playing in box 8
        }
    
       else if ((TicTacToe[6]=="") && (TicTacToe[7]=="O") && (TicTacToe[8]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
         return 6;//block the human player from winning in row1 by playing in box 6
         }
        else if ((TicTacToe[6]=="O") && (TicTacToe[7]=="") && (TicTacToe[8]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
        return 7;//block the human player from winning in row1 by playing in box 7
        }
    ///////////////END OF TIRTH ROW TEST////////////////////////////
        ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE DIAGONAL1 ROW AND BLOCK ////////////////
        else if ((TicTacToe[0]=="O") && (TicTacToe[4]=="O") && (TicTacToe[8]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
        return 8;//block the human player from winning in row1 by playing in box 8
        }
        else if ((TicTacToe[0]=="") && (TicTacToe[4]=="O") && (TicTacToe[8]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
        {	
       return 0;//block the human player from winning in row1 by playing in box 0
        }  
       else if ((TicTacToe[0]=="O") && (TicTacToe[4]=="") && (TicTacToe[8]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
       {	
      return 4;//block the human player from winning in row1 by playing in box 4
        }
    ///////////////END OF DIAGONAL1 ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE DIAGONAL2 ROW AND BLOCK ////////////////
       else if ((TicTacToe[6]=="O") && (TicTacToe[4]=="O") && (TicTacToe[2]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
       {	
       return 2;//block the human player from winning in row1 by playing in box 2
       }
    
       else if ((TicTacToe[6]=="") && (TicTacToe[4]=="O") && (TicTacToe[2]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 6;//block the human player from winning in row1 by playing in box 6
      }
      else if ((TicTacToe[6]=="O") && (TicTacToe[4]=="") && (TicTacToe[2]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 4;//block the human player from winning in row1 by playing in box 4
      }
    ///////////////END OF DIAGONAL2 ROW TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN1 AND BLOCK ////////////////
       else if ((TicTacToe[0]=="O") && (TicTacToe[3]=="O") && (TicTacToe[6]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 6;//block the human player from winning in row1 by playing in box 6
      }
      else if ((TicTacToe[0]=="") && (TicTacToe[3]=="O") && (TicTacToe[6]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 0;//block the human player from winning in row1 by playing in box 0
      }
    
      else if ((TicTacToe[0]=="O") && (TicTacToe[3]=="") && (TicTacToe[6]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 3;//block the human player from winning in row1 by playing in box 3
      }
    ///////////////END OF COLUMN1 TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN2 AND BLOCK ////////////////
      else if ((TicTacToe[1]=="O") && (TicTacToe[4]=="O") && (TicTacToe[7]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 7;//block the human player from winning in row1 by playing in box 7
      }
      else if ((TicTacToe[1]=="") && (TicTacToe[4]=="O") && (TicTacToe[7]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 1;//block the human player from winning in row1 by playing in box 1
      }
      else if ((TicTacToe[1]=="O") && (TicTacToe[4]=="") && (TicTacToe[7]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 4;//block the human player from winning in row1 by playing in box 4
      }
    ///////////////END OF COLUMN2 TEST////////////////////////////
    ////////TEST IF HUMAN PLAYER ISABOUT TO WIN IN THE COLUMN3 AND BLOCK ////////////////
      else if ((TicTacToe[2]=="O") && (TicTacToe[5]=="O") && (TicTacToe[8]==""))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 8;//block the human player from winning in row1 by playing in box 8
      }
      else if ((TicTacToe[2]=="") && (TicTacToe[5]=="O") && (TicTacToe[8]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 2;//block the human player from winning in row1 by playing in box 2
      }
      else if ((TicTacToe[2]=="O") && (TicTacToe[5]=="") && (TicTacToe[8]=="O"))//see if there is an X in box 0 and 1 and an empty space in box 2
      {	
      return 5;//block the human player from winning in row1 by playing in box 5
      }
    ///////////////END OF COLUMN3 TEST////////////////////////////
      else
      {
      return generateRandomInteger(9);//computer just searches for an empty slot to play
      }
}

function computerPlays() {
  const emptyBoxes = [];
  for (let i = 0; i < TicTacToe.length; i++) {
    if (TicTacToe[i] === "") {
      emptyBoxes.push(i);
    }
  }

  const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  const boxNumber = emptyBoxes[randomIndex];
  putNaughtOrCross(boxNumber);
}


function displayWinner(winner) {
  // alert("checkWinner")
  document.getElementById("Display").innerHTML = " " + winner;
}


function playTheGame()
{
      choosePlayer = generateRandomInteger(2);
      if(choosePlayer == 0)
      player = "O"; //X is the human player
      if(choosePlayer == 1)
      player = "O"; //O is the computer player
      if(player == "O")
      { 
     display();
     const TimeoutRef=setTimeout(computerPlays,2000);
      }
     else if(player == "X"){
     display();
     }
}




function clearBoard() //is reseting the game
{
       winner="";
       gameOver=false;
     display2();
      let onscreenBoard= document.getElementsByClassName("box") ;
     numberOfPlays=0;
      //  this while loop is clear the tic toc tac
      let counter=0;
      while(counter<onscreenBoard.length ++)
     {
     onscreenBoard[counter].innerText=""; //this line is for clear a box
     counter = counter + 1;
     }  
      TicTacToe[0]="";
      TicTacToe[1]="";
      TicTacToe[2]="";
      TicTacToe[3]="";
      TicTacToe[4]="";
      TicTacToe[5]="";
      TicTacToe[6]="";
      TicTacToe[7]="";
      TicTacToe[8]="";
          player = "O";
          display();
      location.reload();
}

function displayWinner(winner)
{
      // alert("checkWinner")
      document.getElementById("Display").innerHTML=" " + winner;
}
  
function display2 ()
{      
     const num=localStorage.getItem("PN") //retrieve store info from the local storage
      //alert(num);
       mode=localStorage.getItem("dn")
     // alert ("inside  display2 " + mode);
      HumanPlayer=num;
      document.getElementById("Display").innerHTML=HumanPlayer; 
     
     // document.getElementById("message").innerHTML="ComputerTurnxxxxxxxxxx";
    document.getElementById("numberOfPlayers").innerHTML=mode;
}

function resetGame() {
  // Add your code here to reset the game
  console.log("Game reset"); // Example: Log a message to the console
}
function Homepage()
{
      window.location.href="home.html"; //is change for the location of the page
} 
      homeBtn=document.getElementById("Home")
      homeBtn.addEventListener('click',Homepage);

    // let messageElement = document.getElementById("message");
    // messageElement.innerHTML = "Cumputer Turn";
    // document.getElementById("message").innerHTML="ComputerTurnxxxxxxxxxx";
    // document.getElementById("numberOfPlayers").innerHTML=mode;
   

function Homepage() {
  // Your game logic here
}
window.addEventListener('DOMContentLoaded', (event) => {
  //
});

