//select boxes with class name
let boxes=document.querySelectorAll(".box");
//select reset btn with id
let resetBtn=document.querySelector("#reset-btn");
//select newGamebtn 
let newGamebtn=document.querySelector("#new-btn");
//select message container for winner
let msgContainer=document.querySelector(".msg-container");
//select message para
let msg=document.querySelector("#msg");
//select which have first turn playerX or playerY
let turnO=true;
//create array for win pattern 2D
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
//add event listner on every box for make them functional 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       console.log("box was clicked");
       if(turnO){                    //turn of player O
        box.innerText="O";
        turnO=false;
       }else{                        //turn of player X
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;         //disable button after click
       checkWinner();
    });
});
//function for disable and enable display winning boxes
const disableBoxes = () =>{
 for(let box of boxes){
    box.disabled=true;
 }
};
const enableBoxes = () =>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
   }
   //create function for showing winner msg
const showWinner=(winner)=>{
    msg.innerText=`congrates, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
//create function for check winner by loop

const checkWinner =() =>{
    for(let pattern of winPatterns){
        
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
//checking winner condition
            if(pos1val !=""&&pos2val !=""&& pos3val !=""){    // pattern value should not be empty
                if(pos1val===pos2val&&pos2val===pos3val){
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }
    }
};
//reset game function

const resetGame =() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//add event listner on NewGame btn .

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);