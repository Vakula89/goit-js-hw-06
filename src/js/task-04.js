const counterEl = document.querySelector("#counter");
const counterValueEl = document.getElementById("value");
let counterValue = 0;

function updateValueEl(value = counterValue) {
	counterValueEl.textContent = value;
}

function incrementValue() {
	counterValue += 1;
	updateValueEl();
}

function decrementValue() {
	counterValue -= 1;
	updateValueEl();
}

function resetValue() {
	counterValue = 0;
	updateValueEl();
}

counterEl.querySelectorAll("button").forEach(btnAction => {
	switch (btnAction.dataset.action) {
		case "increment":
			btnAction.addEventListener("click", incrementValue);
			break;
		case "decrement":
			btnAction.addEventListener("click", decrementValue);
			break;
		case "reset":
			btnAction.addEventListener("click", resetValue);
			break;
	}
});