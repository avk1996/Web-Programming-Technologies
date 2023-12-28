$(document).ready(function () {
  $("#append").click(function () {
    let count = 1;
    $("div").append(
      "<p class='appendPara'>This is " + count + "Append Para</p>"
    );
    count = parseInt(count + 1);
  });
  $("#prepend").click(function () {
    let count = 1;
    $("div").prepend(
      "<p class='prependPara'>This is " + count + " Prepend Para</p>"
    );
    count++;
  });
  $("#removeApp").click(function () {
    $("p").remove(".appendPara");
  });
  $("#removePre").click(function () {
    $("p").remove(".prependPara");
  });
});
