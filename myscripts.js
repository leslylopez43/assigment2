/////////Copied!
const boxes = document.querySelectorAll('.box');

var winner="";

var gameOver=false;
  
boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    if ((player!="X") || (gameOver==true))
    {
      alert("it is not you turn") 
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

   //box.addEventListener('click', function handleClick(event) {
    //console.log(box.id, event);
    
    //  box.setAttribute('style', 'background-color: yellow;');
  });
  
});


///////////////

TicTacToe=[0,1,2,
           3,4,5,
           6,7,8];
// each arrange location is set one space

TicTacToe[0]="";
TicTacToe[1]="";
TicTacToe[2]="";
TicTacToe[3]="";
TicTacToe[4]="";
TicTacToe[5]="";
TicTacToe[6]="";
TicTacToe[7]="";
TicTacToe[8]="";

let player="O"; //X player is human and O player is computer 
/*let Board=document.getElementById("Display");
CurrentBoard=TicTacToe[0]+TicTacToe[1]+TicTacToe[2]+"<br>";
CurrentBoard=CurrentBoard+TicTacToe[3]+TicTacToe[4]+TicTacToe[5]+"<br>";
CurrentBoard=CurrentBoard+TicTacToe[6]+TicTacToe[7]+TicTacToe[8]+"<br>";
console.log(Board)
Board.innerHTML=CurrentBoard; //display  Tic Tac Toe Board on screen
//alert(CurrentBoard)*/
var numberOfPlays=0;

function checkWinner()

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

function checkTopRow()
{    TopRow=TicTacToe[0]+TicTacToe[1]+TicTacToe[2];
  if(TopRow=="XXX")
  {
    winner=player;
    gameOver=true;
  displayWinner("X player wins");
    }
  
    if(TopRow=="OOO")
  {
    winner=player;
    gameOver=true;
  displayWinner("O player wins");
    }
}

function checkMiddleRow()
{    MiddleRow=TicTacToe[3]+TicTacToe[4]+TicTacToe[5];
 if(MiddleRow=="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    
    MiddleRow=TicTacToe[3]+TicTacToe[4]+TicTacToe[5];
 if(MiddleRow=="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }

}
function checkbottomRow()
{    bottomRow=TicTacToe[6]+TicTacToe[7]+TicTacToe[8];
 if(bottomRow=="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    
     bottomRow=TicTacToe[6]+TicTacToe[7]+TicTacToe[8];
 if(bottomRow=="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }

}
function checkdiagonal1Row()
{    diagonal1Row=TicTacToe[0]+TicTacToe[4]+TicTacToe[8];
 if(diagonal1Row=="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    
    diagonal1=TicTacToe[0]+TicTacToe[4]+TicTacToe[8];
 if(diagonal1=="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }
}
function checkdiagonal2Row()
{    diagonal2Row=TicTacToe[6]+TicTacToe[4]+TicTacToe[2];
 if(diagonal2Row=="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    
    diagonal2=TicTacToe[6]+TicTacToe[4]+TicTacToe[2];
 if(diagonal2=="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }
}
function checkcolumn1Row()
{    column1Row=TicTacToe[0]+TicTacToe[4]+TicTacToe[6];
 if(column1Row=="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    
    column1=TicTacToe[0]+TicTacToe[4]+TicTacToe[6];
 if(column1=="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    }
}
function checkcolumn2Row()
{    column2Row=TicTacToe[1]+TicTacToe[4]+TicTacToe[7];
 if(column2Row=="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    
    column2=TicTacToe[1]+TicTacToe[4]+TicTacToe[7];
 if(column2=="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
  
  }
}
function checkcolumn3Row()
{    column3Row=TicTacToe[2]+TicTacToe[5]+TicTacToe[8];
 if(column3Row=="XXX")
  {
    winner=player;
    gameOver=true;
    displayWinner("X player wins");
    }
    
    column3=TicTacToe[2]+TicTacToe[5]+TicTacToe[8];
 if(column3=="OOO")
  {
    winner=player;
    gameOver=true;
    displayWinner("0 player wins");
    
  
  }
}


function putNaughtOrCross(boxNumber)
 {

  let onscreenBoard=document.getElementsByClassName("box")
  //  alert(TicTacToe[boxNumber] )
   if (TicTacToe[boxNumber] =="")  //CHECK ARRAY LOCATION IF EMPTY
       {
          //Check if player is human then change to computer player and call computerplays  
          onscreenBoard[boxNumber].innerText=player;
          TicTacToe[boxNumber]=player;//Record player position in array TicTacToe
           numberOfPlays++;//increases numerOfPlays by one
           if(player=="X")
               {
                  player="O";//Change player to computer
                  display();
                   //computerPlays();
                    const TimeoutRef=setTimeout(computerPlays,2000);//computer plays after 2 seconds
                }
             checkWinner();   
          }
   
 } // End of put nought or cross fuction 

 function generateRandomInteger(max) {
  let noSpaceFound=true;
  var randomNumber; 
while((noSpaceFound==true) && (numberOfPlays<9))
{
  // randomNumber=Math.floor(Math.random() * max) + 1;
  randomNumber=Math.floor(Math.random() * max);
  
  if (TicTacToe[randomNumber] =="")  //CHECK ARRAY LOCATION IF EMPTY
  {
    noSpaceFound=false;//set noSpaceFound to false to stop while loop
  }
}
 return randomNumber;
}
if(player=="O")
{
 /*let computerChoice= generateRandomInteger(8);
 putNaughtOrCross(computerChoice)*/
 //const TimeoutRef=setTimeout(computerPlays,1000);
}
function display()
{return
  if(player=="X")
  {
   document.getElementById("Display").innerHTML="<h1>humanplayer</h1>" 
  }
  if (player=="O")
  {
    document.getElementById("Display").innerHTML="<h1>computerPlays</h1>"
  }
}

function computerPlays()

{ 
  if (gameOver==true)
  return;
  let computerChoice= generateRandomInteger(9);
  //alert(computerChoice)
putNaughtOrCross(computerChoice)
player=("X") //Change player to human playeer
display();
}
//gameOn=true
//while(gameOn===true)
//{
  if(player=="O")
  { 
    display();
 const TimeoutRef=setTimeout(computerPlays,2000);
  //computerPlays();
   
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

 const TimeoutRef=setTimeout(computerPlays,2000);
  }   

  function displayWinner(winner)
  {

    alert("checkWinner")
     document.getElementById("Display").innerHTML=winner 
    }
  
   
    function display2 ()
    {
      const num=localStorage.getItem("PN") //retrieve store info from the local storage
      alert(num);
    }
    
