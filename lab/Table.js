$(document).ready(() => {
  // var s = giveTable(tNum);
  var tNum = parseInt(prompt("Enter table number: "));
  console.log(tNum);

  $("#Mtable").click(() => {
    var s = "";
    // alert(tNum);
    console.log(tNum);
    for (var i = 1; i <= 10; i++) {
      s += `${i} x ${tNum} = ` + parseInt(i * tNum) + "<br/>";
    }
    $("#head").html(s);
  });
});

function giveTable(tNum) {
  var s = "";
  for (var i = 1; i <= 10; i++) {
    s += parseInt(i * tNum) + "\n";
  }
  return s;
}
