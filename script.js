let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turnO = true;

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    win();
  });
});

let win = () => {
  for (let pattern of winpattern) {
    let pattern1 = boxes[pattern[0]].innerText;
    let pattern2 = boxes[pattern[1]].innerText;
    let pattern3 = boxes[pattern[2]].innerText;

    if (pattern1 != "" && pattern2 != "" && pattern3 != "") {
      if (pattern1 == pattern2 && pattern2 == pattern3) {
        if (pattern1 == "X") {
          alert("X win the Game");
          boxes.forEach((box) => {
            box.disabled = true;
          });
        }else{
          alert("O win the Game");
          boxes.forEach((box) => {
            box.disabled = true;
          });
        }
      }
    }
  }
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});
