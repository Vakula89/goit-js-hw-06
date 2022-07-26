function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const containerBox = document.querySelector("#boxes");
const numberElem = document.querySelector("#controls input");
const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");

const removeAll = function(containerBox ){
  while (containerBox .firstChild) {
    containerBox .removeChild(containerBox .lastChild);
  }
  return false;
}
const createBoxes = function(amount){
  const elems = [];
  let w = 30;
  let h = 30;
  if (containerBox .children.length){
    removeAll(containerBox );
  }
  for (let i = 0; i < amount; i+=1){
    const newElem = document.createElement("div");
    newElem.style.width = w + 'px';
    newElem.style.height = h + 'px';
    newElem.style.backgroundColor = getRandomHexColor();
    elems.push(newElem);
    w += 10;
    h += 10;
  }
  containerBox.append(...elems);
};

buttonCreate.addEventListener('click', (event) => {
  const amount = parseInt(numberElem.value,10);
  if (amount > 0){
    createBoxes(amount);
  }
});

buttonDestroy.addEventListener('click', (event) => {
  removeAll(containerBox);
});