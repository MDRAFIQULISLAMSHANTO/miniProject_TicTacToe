let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let newGamebtn = document.querySelector("#new-gamebtn");

let count = 0;
let trunO = true; // two player : player X and player O
//winning patterns stored in array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

       count += 1;
        if(trunO){
            box.innerText = "O";

            trunO = false;
        }else{
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;
        if(count > 8){
            showDraw();
        }else{
            checkWinner();
        }

    });

});
const showWinner = (winner) => {

    message.innerText = `Congraculations! The winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBox ();    // disable all buttion after get the winner ;

}
const showDraw=()=>{

    message.innerText = "This Match is Draw. Try Again! ";
    msgContainer.classList.remove("hide");
    disableBox ();
}
const disableBox = () =>{

    for (let box of boxes){
        box.disabled = true;
    }
}
const checkWinner = () => {

    for(let pattern of winPatterns){

        let position1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;
            if(position1value != "" && position2value != "" && position3value != ""){
              if(position1value == position2value && position2value == position3value){
             showWinner(position1value);
              }
            }

    }
};
const resetGame = () =>{
    count = 0;
    trunO = true;
    ebablebox();
    msgContainer.classList.add("hide");


}
const ebablebox =()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }


}
//buttion call
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);