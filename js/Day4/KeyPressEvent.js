$(document).ready(function () {
  names = ["Rahul", "Avishkar", "Piyush", "Abhishek", "Sati"];
  searcharr = [...names]; //copy of names array
  displayList(searcharr);
  //   $("#search").keypress(function (eventObj) {
  $("#search").keyup(function (eventObj) {
    console.log(eventObj);
    //alphabet and assci value pair
    console.long(eventObj.key + ", " + eventObj.which + ", " + eventObj.value);
    if (eventObj.which == 13) {
      //searching data: ascii specifically
      var searchText = $("#search").val();
      //if back space is given or empty space is there.
      if (searchText == "") {
        searcharr = [...names];
      } else {
        searcharr = names.filter((nm) => nm.includes(searchText));
      }
      displayList(searcharr);
      alert("enter key pressed");
    }
  });
});

function displayList(searcharr) {
  var str = "<ul>";
  for (var a in searcharr) {
    str += `<li>${a}<li/>`;
  }
  str += "</ul>";
  $("#div1").html(str);
}
