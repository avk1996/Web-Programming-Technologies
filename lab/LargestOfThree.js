// var inputNumberText = `Entered number is ${num1}, ${num2} and ${num3}`
// document.getElementsByTagName('div').innerHtml = inputNumberText;

function largest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) return num1;
  else if (num2 >= num3 && num2 >= num1) return num2;
  else return num3;
}
// resultText = `Largest is ${num1}`

// document.getElementsByTagName('div').innerHtml = resultText

$(document).ready(() => {
  var num1 = parseInt(prompt("Enter Number1: "));
  var num2 = parseInt(prompt("Enter Number2: "));
  var num3 = parseInt(prompt("Enter Number3: "));
  $("h1").text(`You have entered ${num1}, ${num2} and ${num3}`);
  var larg = largest(num1, num2, num3);
  //   $("#div1").css("div1").text(`And Largest amoung three is ${larg}`);
  $("#div1").text(`And Largest amoung three is ${larg}`);
});
