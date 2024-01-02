function MathOperation() {
  let x = parseInt(document.getElementById("num1").value);
  let y = parseInt(document.getElementById("num2").value);
  ValidateNumber(x, y);
  let mathOp = document.getElementById("mathOp").value;
  if (mathOp == "add") {
    document.getElementById("getResult").innerText = x + y;
  } else if (mathOp == "diff") {
    document.getElementById("getResult").innerText = x - y;
  } else if (mathOp == "pro") {
    document.getElementById("getResult").innerText = x * y;
  } else if (mathOp == "div") {
    document.getElementById("getResult").innerText = x / y;
  }
}
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
