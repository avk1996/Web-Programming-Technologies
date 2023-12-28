function displayTable() {
  var str = "Employee Table";
  str = "<table><tr><th>Id</th><th>Name</th><th>Mobile</th></tr>";
  for (var emp of empArray) {
    str += `<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.mobile}</td></tr>`;
  }
  str += "</table>";
  document.getElementById("MyDiv").innerHTML = str;
}

function dropDown(data) {
  var str = "<select>";
  for (var d of data) {
    str += `<option value=${d.id}>${d.title}</option>`;
  }
  str += "</select>";
  $("#div3").html(str);
}
$(document).ready(function () {
  $("#get").click(function () {
    //plugin function
    $.ajax({
      async: true,
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "GET",
      success: function (result) {
        displayTable(result);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
