let boxes = document.querySelectorAll(".box");
let turnMsg = document.getElementById("turn");
let winPara = document.getElementById("winpara");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#newgamebtn");
let resetBtn = document.querySelector("#resetgamebtn");

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

let oTurn = true;

const resetGame = () => {
  oTurn = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  turnMsg.innerHTML = "'O' Play Your Turn";
};

const showWinner = (winner) => {
  winPara.innerHTML = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (oTurn) {
      box.innerHTML = "O";

      turnMsg.innerHTML = "'X' Play Your Turn";
      oTurn = false;
    } else {
      box.innerHTML = "X";

      turnMsg.innerHTML = "'O' Play Your Turn";
      oTurn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Value = boxes[pattern[0]].innerHTML;
    let pos2Value = boxes[pattern[1]].innerHTML;
    let pos3Value = boxes[pattern[2]].innerHTML;
    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        showWinner(pos1Value);
        disableBoxes();
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
