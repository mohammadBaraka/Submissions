var shoesize = parseInt(prompt("Enter Your Shoe Size"));
var birthyear = parseInt(prompt("Enter Your Birth Year"));


function Mohammad (multiply1,multiply2){
  multiply1 = multiply1*2;
  multiply1 = multiply1+5;
  multiply1 = multiply1*50;
   multiply1= multiply1-multiply2;
    multiply1 =multiply1+1766;  
    return  multiply1;
}

alert(Mohammad(shoesize,birthyear));