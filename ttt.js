let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newgame = document.querySelector("#new");
let msgcon = document.querySelector(".msg");
let msg= document.querySelector("#winner");
let img = document.querySelector("img");
let turno = true;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetbtn = ()=>{
    turno = true;
    enable();
    msgcon.classList.add("hide");
    img.classList.add("hide");
}
Array.from(boxes).forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turno){
            box.innerText = "O";

            turno = false;
        }
        else{
            box.innerText = "X"
            turno = true;
        }
        box.disabled = "ture";
        winner();
    });
});
const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner)=>{
    msg.innerText=`Congrs, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disable();
};



const winner = ()=> {

    for(pattern of win){
        
          let pos1 = boxes[pattern[0]].innerText
          let pos2 = boxes[pattern[1]].innerText
          let pos3 = boxes[pattern[2]].innerText

       if(pos1!= "" && pos2!= "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner", pos1);
            showwinner(pos1);
            img.classList.remove("hide");
        }
       }
    };

};
newgame.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn)
