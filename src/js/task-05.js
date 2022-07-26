const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("keyup", (event) => {
    output.innerText = event.target.value;
    if(event.target.value === ''){
        output.innerText = 'Anonymous';
    }
})