function validateData() {
  var flagName = validateName();
  var flagGender = validateRadio("gender", "errGender");
  // var flagDegree = validateRadio("degree", "errDegree");
  var flagHobbies = validateHobbies();
  var flagCity = validateCity();
  return flagName && flagGender && flagDegree && flagHobbies && flagCity;
}
function validateName() {
  var name = document.getElementById("name").value;
  if (name.trim().length <= 3) {
    document.getElementById("errName").innerHTML = "Name is false";
    return false;
  }
  document.getElementById("errName").innerHTML = "";
  return trues;
}
function validateRadio(name, err) {
  var data = document.getElementsByName(name);

  for (var rd of data) {
    if (rd.checked) {
      document.getElementById("errGender").innerHTML = "Gender is not selected";
      return true;
    }
  }
  document.getElementById("errGender").innerHTML = "";
  return false;
}
function validateHobbies() {
  var data = document.getElementsByName("hobbies");
  var count = 0;
  for (var hb of arr) {
    if (hb.checked) {
      count++;
      if (count >= 2) {
        document.getElementById("errHobbies").innerHTML =
          "Select Minimum 2 hobbies";
        return false;
      }
    }
    //Alternate way
    // for (var i = 0; i < data.length; i++) {
    //   if (data[i].checked) {
    //     count++;
    //     if (count >= 2) {
    //       document.getElementById("errHobbies").innerHTML =
    //         "Select Minimum 2 hobbies";
    //       return false;
    //     }
    //   }
    document.getElementById("errHobbies").innerHTML = "";
    return true;
  }
}

function validateCity() {
  if (document.getElementById("city").selectedIndex !== 0) {
    document.getElementById("errCity").innerHTML = "";
    return true;
  }
  document.getElementById("errHobbies").innerHTML = "Select Minimum 2 hobbies";
  return false;
}
