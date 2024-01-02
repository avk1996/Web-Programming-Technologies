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

