var empArray = [
  { id: 1, name: "Abhishek", mobile: 98334455 },
  { id: 2, name: "Piyush", mobile: 98434455 },
  { id: 3, name: "Avishkar", mobile: 98430505 },
];

const displayTable = () => {
  var str = "Employee Table";
  str = "<table><tr><th>Id</th><th>Name</th><th>Mobile</th></tr>";
  for (var emp of empArray) {
    str += `<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.mobile}</td></tr>`;
  }
  str += "</table>";
  document.getElementById("MyDiv").innerHTML = str;
};

const addEmployee = () => {
  var id = parseInt(document.getElementById("id").value);
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  //var emp = { id: id, name: name, mobile: mobile };
  var emp = { id, name, mobile };
  empArray.push(emp);
};

const clearForm = function () {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("id").focus();
};

function deleteEmployee() {
  var id = parseInt(document.getElementById("id").value);
  var pos = empArray.findIndex((ob) => ob.id == id);
  if (pos != -1) {
    empArray.splice(pos, 1);
    displayTable();
  } else {
    alert(`Employee with id ${id} is not found`);
  }
}
//update employee baded on id
const updateEmployee = () => {};
