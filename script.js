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

let tasks = [];

function addTodoHandler() {
	let inputValue = input.value;
	input.value = '';

	tasks.push(inputValue);
	
	addAndDisplayTask();
	btnStatus();
	delTask();
	localStorage.setItem('task', JSON.stringify(tasks));
}

function addAndDisplayTask() {
	let value = '';
	for (const task of tasks) {
		value = task;
	}
	res.innerHTML += `
  <li id="li" class="task">
	<span id="spn">  
    <a id="inp" class="input__link" href="#"><span class="icon-bin"></span> ${value}
	  </a>		
	</span>
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
function delTask() {
	let iconBin = document.querySelectorAll('.icon-bin');
  let input__links = document.querySelectorAll('.input__link');
for (let i = 0; i < iconBin.length; i++) {
		iconBin[i].addEventListener('click', () => {
			input__links[i].remove();
		});
	}
}
