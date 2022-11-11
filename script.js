const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
btn.setAttribute('disabled', true);
const res = document.querySelector('#res');

let btnStatus = input.oninput = function(){
  if (input.value == ''){
    btn.setAttribute('disabled', true);
  }else{
    btn.removeAttribute('disabled');
  }
}

btn.addEventListener('click', addTodoHandler);

const tasks = [];
function addTodoHandler() {
	let inputValue = input.value;
	input.value = '';

	tasks.push(inputValue);
	
	addTask();
	btnStatus();
	
}

function addTask() {
	let value = '';
	for (const task of tasks) {
		value = task;
	}
	res.innerHTML += `
  <li id="li">
    <span class="icon-bin"></span>
    <a class="input__link" href="#" id="inp">${value}
	  </a>
  </li>
`;
taskStatus();
}

function taskStatus(){
	let input__links = document.querySelectorAll('.input__link');
	for (let i = 0; i < input__links.length; i++) {
		input__links[i].addEventListener('click', () => {
			input__links[i].classList.toggle('active');
		});
	}
}
