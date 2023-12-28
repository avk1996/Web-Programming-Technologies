$(document).ready(function () {
  var tickets = [];
  displayTickets(20);
  $("input[name='ticket']").change(function () {
    if ($(this).is(":checked")) {
      tickets.push($(this).value);
    } else {
      var pos = tickets.findIndex((i) => i == $(this.val()));
      if (pos != -1) tickets.splice(pos, 1);
    }
    console.log(tickets);
  });
  $("#show").click(function () {
    $("#");
  });
});
