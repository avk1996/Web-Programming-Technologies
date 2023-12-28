function calculate(str) {
  var v1 = parseInt(document.getElementById("num1").value);
  var v2 = parseInt(document.getElementById("num2").value);
  var r = 1;
  if (str == "a") {
    r = v1 + v2;
  } else if (str == "f") {
    for (var i = 1; i <= v1; i++) {
      r = r * i;
    }
  } else {
    document.getElementById("errNum").innerHTML = "ERROR: WRONG OPTION";
  }
  document.getElementById("result").innerHTML = "Result: " + r;
  document.getElementById("result").value = r;
}
