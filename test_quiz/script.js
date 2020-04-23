let div, questions, answers, counter, quiz, next, back, start;
next = document.querySelector('#form_next');
back = document.querySelector('#form_back');
div = document.querySelectorAll('.q_r');
quiz = document.querySelector('.Quiz');
start = document.getElementById('start');
msg = document.getElementById('msg');
counter = 0;
start.addEventListener('click', function () {
	quiz.innerHTML = div[counter].innerHTML;
	btnControl();
	next.classList.remove('hide');

});

let btnNext;
btnNext = () => {
	counter++;
	quiz.innerHTML = div[counter].innerHTML;
	btnControl();
}

let btnBack;
btnBack = () => {
	if (counter > 0) {
		counter--;
		quiz.innerHTML = div[counter].innerHTML;
		btnControl();
	}
}
let btnControl;
btnControl = () => {
	if (counter === 0) {
		back.classList.add('hide');
	} else {
		back.classList.remove('hide');
		next.classList.remove('hide');
	}
	if (counter === 21) {
		next.classList.add('hide');
		msg.style.display = "block";
	}
}

var QST = document.getElementsByName('QST');

function func() {
	if (QST[1].checked == true) {
		alert('hi');
	}
}