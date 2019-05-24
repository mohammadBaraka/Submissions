var y = document.querySelector("p");
var x = document.querySelectorAll("a");
x[0] = document.getElementById("show").addEventListener("click",function(){myfunction(false)});
x[1] = document.getElementById("hide").addEventListener("click",function(){myfunction(true)});

function myfunction(isHidden){
    if (!isHidden){
        y.style.display = "block";
    }
    else if (isHidden){
        y.style.display = "none";
}
}   