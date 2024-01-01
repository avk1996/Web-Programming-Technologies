$(document).ready(() => {
  let number = parseInt(prompt("Enter digits"));
  let quo = number;
  let rem = number;
  let sum = 0;
  while (rem > 0) {
    // for (var i = 0; i < 5; i++) {
    rem = parseInt(quo % 10);
    quo = parseInt(quo / 10);
    console.log(`reminder = ${rem}`);
    console.log(`quotient = ${quo}`);
    sum += parseInt(rem);
  }
  // }
  $("#head").html(`sum of number ${number} is ${sum}`);
});
