var text = document.getElementById('text');

var a = document.querySelector('.green');
a.addEventListener('click',function(){
    text.style.color = 'green';
});
var b = document.querySelector('.red');
b.addEventListener('click',function(){
    text.style.color = 'red';
});
var c = document.querySelector('.blue');
c.addEventListener('click',function(){
    text.style.color = 'blue';
});
