$(document).ready(() => {
  var evenRange = parseInt(prompt("Enter the even range: "));
  $("h1").text(`You have given me ${evenRange} range for even numbers`);
  var s = printNEven(evenRange);
  $("h1").html(s);
});

function printNEven(evenRange) {
  var s = "";
  for (var i = 0; i <= evenRange; i++) {
    if (i % 2 == 0) {
      s += i + "<br/>";
    }
  }
  return s;
}
