$(document).ready(function () {
  $("#show").click(function () {
    $("#MyDiv1").show(2000, function () {
      $("#MyDiv3").html("Show Complete!");
    });
    $("#MyDiv2").show(2000, function () {
      $("#MyDiv3").html("Hide Complete!");
    });
  });
  $("#hide").click(function () {
    $("#MyDiv2").hide(2000, function () {
      $("#MyDiv3").html("Show Complete!");
    });
    $("#MyDiv1").show(2000, function () {
      $("#MyDiv3").html("Hide Complete!");
    });
  });
  $("#toggle").click(function () {
    $("#MyDiv2").toggle(2000, function () {
      $("#MyDiv3").html("Show Complete!");
    });
    $("#MyDiv1").toggle(2000, function () {
      $("#MyDiv3").html("Hide Complete!");
    });
  });
});
