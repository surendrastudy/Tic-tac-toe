let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msg_conatiner = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");
let turnO =true  //player x and 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msg_conatiner.classList.add("hide"); // winner hide
}


boxes.forEach((box)=>{  // box class name
    box.addEventListener("click", () =>{
        // console.log("box was clikced");
        if(turnO){
            //playerO
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
     box.disabled = true;
     checkWinner();
     checkDraw();
    });

});


// for not to continue after winng
    const disableBoxes = () =>{
        for (let box of boxes){
            box.disabled =true
        }
    }
    const enableBoxes = () =>{
        for (let box of boxes){
            box.disabled =false; // button enable use again for reset btn
            box.innerText = "";
        }
    }

const showWinner = (winner) =>{
    msg.innerText = `congratulation winner is ${winner}`;
    msg_conatiner.classList.remove("hide");
    disableBoxes();
}


const checkWinner = ()=> {
    for ( let pattern of winPatterns){


        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        //     );
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])


        let pos1val = boxes[pattern[0]].innerText;  // iner for print value 
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !=="" && pos2val !== "" && pos3val !== ""){   // no empty need
            if(pos1val === pos2val && pos2val === pos3val ){
                // console.log("winner",pos1val);
                showWinner(pos1val); // winner jo value
                break;
            }
            
        }
       
    }
};

const checkDraw = () => {
    // Check for a draw when all boxes are filled and no winner
    if ([...boxes].every((box) => box.innerText !== "")) {
        msg.innerText = "It's a draw!";
        msg_conatiner.classList.remove("hide");
        disableBoxes();
    }
};


new_btn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)
