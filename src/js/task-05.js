const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", updateOutputEl);

function updateOutputEl() {
	outputEl.textContent = inputEl.value == null ? "Anonymous" : inputEl.value;
}