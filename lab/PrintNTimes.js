$(document).ready(function () {
  var num = parseInt(prompt("Enter a number: "));
  var myText = prompt("Enter a sentence: ");
  var NText = NPrinter(num, myText);
  $("h1").html(NText);
});
function NPrinter(num, str) {
  var s = "";
  for (var i = 0; i < num; i++) {
    s += str + "<br/>";
  }
  return s;
}
