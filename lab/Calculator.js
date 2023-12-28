$(document).ready((ch) => {
  let v1 = parseFloat(prompt("Enter value 1: "));
  let v2 = parseFloat(prompt("Enter value 2: "));
  $("#head1").html(`You have given me ${v1} and ${v2}`);
  var sum = v1 + v2;
  var diff = v1 - v2;
  var pro = v1 * v2;
  var div = v1 / v2;
  $("input").hover(
    function () {
      $(this).addClass("adda");
      $(this).addClass("diffa");
      $(this).addClass("proa");
      $(this).addClass("diva");
      $(this).removeClass("addr");
      $(this).removeClass("diff");
      $(this).removeClass("pro");
      $(this).removeClass("div");
    },
    function () {
      $(this).addClass("addr");
      $(this).addClass("diffa");
      $(this).addClass("proa");
      $(this).addClass("diva");
      $(this).removeClass("adda");
      $(this).removeClass("diffr");
      $(this).removeClass("pror");
      $(this).removeClass("divr");
    }
  );
  $("#add").click(() => {
    $("h2").html(`And their sum is ${sum}`);
  });
  $("#diff").click(() => {
    $("h2").html(`And their difference is ${diff}`);
  });
  $("#pro").click(() => {
    $("h2").html(`And their product is ${pro}`);
  });
  $("#div").click(() => {
    $("h2").html(`And their division is ${div}`);
  });
});
