var a = document.querySelectorAll("input");
a[0] = document.getElementById("password");
a[1] = document.getElementById("confirmation");

var b = document.querySelector("button").addEventListener("click", myfunction);
function myfunction(){
    if(a[0].value!=a[1].value){
        a[0].style.borderColor = "red";
        a[1].style.borderColor = "red";
        }
        else {
            console.log ("text");
        }
}

