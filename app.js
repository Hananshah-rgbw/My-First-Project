
// access the html element 
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true;   //player0,playerx
// 2d array (array ka ander dosra array gu is game ma use huta ha )
const winpatterns = [ // this is non primitve data type 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame=()=>{
    turn0= true;
    enableBoxes(); //call it for reable function
    msgContainer.classList.add("hide");
};
// boxes click pr kuch huna chaiy use event listner  for each function is used for call back function 
boxes.forEach((box) => {
    box.addEventListener("click", () => { // "click" bilkul small letters mein
        // console.log("box was clicked");
        if (turn0) { // player0 true 0 print hu ga 
            box.innerText = "0"; // agr 0 hu gy ga tu neaxt condition false hu gy  gi phir x print hu ga
            turn0 = false; // next turn0 false hu gi tu x aa gy ga  
        } else { // playerx
            box.innerText = "x";
            turn0 = true; // x ka baad phir true ha tu uper wali condition lg gy gi 0 ki 
        }
        box.disabled = true; //is sa dosri dafa value nhi ayy gi 
        checkWinner(); // function for checkwinner
    });
});
//winner banany ka bad game ko rok dena 
const disableBoxes=()=>{ // gb winner hu gy ga tu disables krvany ka liy ya use hu ga 
    for (let box of boxes){ // is ko call kary gu show winner function ka ander
        box.disabled=true; // 9 Btn ko disabled krvany ka liy for of loop use kia ha 
    };
};
//dobara game shuru krni ha tu enabled 
const enableBoxes=()=>{  //reset hame ma call krva da gy 
    for (let box of boxes){ 
        box.disabled=false;
        box.innerText="";
    };
};
const showWinner= (winner)=>{ // is ko call bhi karvani ha show winner ka ander 
    msg.innerText = `Winner:  ${winner}`; //$ is p[ata chaly ga kon sa winner ha ]
    msgContainer.classList.remove("hide");
    disableBoxes();// call the disabled function
};
// now its time to win pattern and check the the pattern whos win 
const checkWinner = () => { // use for(of) loop 
    for (let pattern of winpatterns) { //winning pattern check is used for for(of) loop 
        console.log(pattern[0], pattern[1], pattern[2]);// this position and checked and the pattern index 
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText); // ander ki value print krni ha use innerText
        // store individual variable 
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // we use the condtion whoes win this is winning condition 
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);
                showWinner(pos1Val); // call the showwinner function
            }
        }

    }
};
//reset btn ma event listner add kia gya ha 
resetBtn.addEventListener("click", resetGame);
