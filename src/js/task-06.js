const inputEl = document.getElementById('validation-input');
const minLength = inputEl.dataset.length;
  console.log("minLength", minLength);
  inputEl.addEventListener("blur", validateInputLength);

  function validateInputLength() {
	console.log("inputEl.value.length", inputEl.value.length);
	if (inputEl.value.length >= minLength) {
		if (inputEl.classList.contains("invalid")) inputEl.classList.remove("invalid");
		if (!inputEl.classList.contains("valid")) inputEl.classList.add("valid");
		return;
	}
    if (inputEl.classList.contains("valid")) inputEl.classList.remove("valid");
	if (!inputEl.classList.contains("invalid")) inputEl.classList.add("invalid");
}