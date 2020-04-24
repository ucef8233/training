let div, questions, answers, counter, quiz, next, back, start;
next = document.querySelector("#form_next");
back = document.querySelector("#form_back");
div = document.querySelectorAll(".q_r");
quiz = document.querySelector(".Quiz");
start = document.getElementById("start");
msg = document.getElementById("msg");
var QST;
counter = 0;
var test = [];
start.addEventListener("click", function () {
  quiz.innerHTML = div[counter].innerHTML;
  btnControl();
  next.classList.remove("hide");
  QST = document.querySelectorAll(".Quiz input");
  recup();
});

let btnNext;
btnNext = () => {
  counter++;
  quiz.innerHTML = div[counter].innerHTML;
  btnControl();
  QST = document.querySelectorAll(".Quiz input");
  recup();
};

let btnBack;
btnBack = () => {
  if (counter > 0) {
    counter--;
    quiz.innerHTML = div[counter].innerHTML;
    btnControl();
    QST = document.querySelectorAll(".Quiz input");
    recup();
  }
};
let btnControl;
btnControl = () => {
  if (counter === 0) {
    back.classList.add("hide");
  } else {
    back.classList.remove("hide");
    next.classList.remove("hide");
  }
  if (counter === 21) {
    next.classList.add("hide");
    msg.style.display = "block";
  }
};
let recup = () => {
  for (let i = 0; i < QST.length; i++) {
    if (QST.length == 1) {
      QST[i].addEventListener("change", function () {
        test.splice(counter, 1, QST[0].value);
      });
    }
    if (QST.length == 2) {
      QST[i].addEventListener("change", function () {
        if (QST[0].checked == true) {
          test.splice(counter, 1, "Oui");
        } else if (QST[1].checked == true) {
          test.splice(counter, 1, "Non");
        }
      });
    }
    if (QST.length == 3) {
      QST[i].addEventListener("change", function () {
        if (QST[0].checked == true) {
          test.splice(counter, 1, "Oui");
        } else if (QST[1].checked == true) {
          test.splice(counter, 1, "Non");
        } else {
          test.splice(counter, 1, "Homme");
        }
      });
    }
    if (QST.length == 4) {
      QST[i].addEventListener("change", function () {
        if (QST[0].checked == true) {
          test.splice(counter, 1, "Bien");
        } else if (QST[1].checked == true) {
          test.splice(counter, 1, "Assez bien");
        } else if (QST[2].checked == true) {
          test.splice(counter, 1, "Fatigué");
        } else {
          test.splice(counter, 1, "Très fatigué");
        }
      });
    }
  }
};
