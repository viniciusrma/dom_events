let ball = document.getElementById('float-circle');

let up = function() {
  ball.style.bottom = '250px';
};

let down = function() {
  ball.style.bottom = '50px';  
};

document.onkeydown = up;
document.onkeyup = down;