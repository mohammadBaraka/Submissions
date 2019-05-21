var x =document.createElement("div");
document.body.appendChild(x);
x.querySelector('div');
var y = document.querySelector('input');
y.addEventListener("keyup",jkasda);
function jkasda(){
    x.innerHTML = y.value;
}

