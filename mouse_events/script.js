let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};

resetButton.onclick = reset;

itemOne.onmouseover = function(){
  itemOne.style.width = '430px';
};

itemTwo.onmouseup = function(){
  itemTwo.style.backgroundColor = 'green'
};

itemThree.onmouseout = function(){
  itemThree.innerHTML = 'The mouse has left the element.'
};

itemFour.onmousedown = function(){
  itemFive.style.display = 'block';
};