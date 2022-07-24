const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const names = ["email", "password"];
    const obj = {};
    for (const key in elements){
        if (!names.includes(key)){
            continue;
        }
        if (elements[key].value === ''){
            alert("Всі поля мають бути заповнені!");
            return false;
        }
        obj[key] = elements[key].value;
    }
    console.log(obj);
    event.currentTarget.reset();
})
