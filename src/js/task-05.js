const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", updateOutputEl);

function updateOutputEl() {
	outputEl.textContent = inputEl.value == null ? "Anonymous" : inputEl.value;
}
// const input = document.getElementById("name-input");
// const output = document.getElementById("name-output");
// input.addEventListener("keyup", (ev) => {
//     output.innerText = ev.target.value;
//     if(ev.target.value === ''){
//         output.innerText = 'Anonymous';
//     }
// })