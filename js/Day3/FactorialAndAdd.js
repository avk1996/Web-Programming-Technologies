function factorial(num) {
  var r = 1;
  alert(`you have given ${num}`);
  for (var i = 1; i <= num; i++) {
    r = r * i;
  }
  return r;
}

$(document).ready(function () {
  alert("In JQuery funtion");
  $("#add").click(function () {
    //retrive the data in the value property
    var x1 = parseInt($("#num1").val());
    var x2 = parseInt($("#num2").val());
    //assign value to value property
    $("#result").val(x1 + x2);
    $("#MyDiv").html(x1 + x2);
  });
  $("#fact").click(function () {
    var x = parseInt($("#num1").val());
    var ans = factorial(x);
    $("#result").val(ans);
    $("#MyDiv").html(ans);
  });
});
