function ValidateNumber(x, y) {
  if (isNaN(x)) {
    // alert("Enter Number!!");
    document.getElementById("error1").innerHTML = "Please Enter Number";
    document.getElementById("getResult").innerHTML = "";
  }
  if (isNaN(y)) {
    // alert("Enter Number!!");
    document.getElementById("error2").innerHTML = "Please Enter Number";
    document.getElementById("getResult").innerHTML = "";
  } else {
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
  }
}
