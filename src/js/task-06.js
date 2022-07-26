const input = document.getElementById("validation-input");
input.addEventListener("blur", (event) => {
    const dataLength = parseInt(event.target.getAttribute("data-length"), 10);
    event.target.classList.toggle("valid", (dataLength === event.target.value.length));
    event.target.classList.toggle("invalid", (dataLength !== event.target.value.length));
    
});