var a = 23;
var x = "Abhishek";
// it is a object
var emp = { empid: 12, ename: "Avi", dept: "gaming" };
console.log(emp.empid, emp["empid"]);
alert(emp.empid + " " + emp.ename + " " + emp.dept);
emp.mobile = 8383844;
emp1 = {
  id: 1,
  name: "Abhishek",
  dept: "IT",
  display: function () {
    console.log("Id: " + this.id + " name: " + this.dept);
  },
};
const Employee = function (empId, empName, empDept) {
  this.empId = empId;
  this.empName = empName;
  this.empDept = empDept;
  this.display = function () {
    console.log(
      "Id: " + this.empId + " name: " + empName + " dept: " + this.empDept
    );
  };
};

e1 = new Employee(1, "Abhi", "HR");
e1.empEmail = "abhi@gmail.com";
//another way of adding objects
e1["mobile"] = 989898989;
e2 = new Employee(2, "Vai", "Finance");
e3 = new Employee(3, "Ram", "IT");

//How to see all the objects using a object loop as shown below
for (var emp in e1) {
  //emp is the object name and for object e1 within [] will give us corrosponding property
  console.log(emp + " = " + e1[emp]);
}
//above code will iterate over all the properties added to e1 object
