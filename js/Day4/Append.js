$(document).ready(function () {
  // $("#btn").click(function () {

  //body is the parent
  let count = 2;
  //delegate will assign the event to a selector and the event will be assigned to all elements
  //whose selector matches, hence all clone also get the click event
  $("body").delegate("#btn", "click", function () {
    let element = $("div:first-child").clone();
    //change the id
    $(element + " input").attr("id", "div" + count);
    count++;
    $("body").append(element);
  });
});
