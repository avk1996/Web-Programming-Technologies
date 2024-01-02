$(document).ready(() => {
  $("#doMath").click(() => {
    let x = parseInt($("#num1").val());
    let y = parseInt($("#num2").val());
    let MathOperation = $("#mathOp").val();
    alert(
      `you have entered num1 ${x}, num2 ${y} and operations as ${MathOperation}`
    );
    ValidateNumber(x, y);
    switch (MathOperation) {
      case "add":
        $("#getResult").html(`${x + y}`);
        break;
      case "diff":
        $("#getResult").html(`${x - y}`);
        break;
      case "pro":
        $("#getResult").html(`${x * y}`);
        break;
      case "div":
        $("#getResult").html(`${x / y}`);
        break;
      default:
        alert("Invalid option selected");
        break;
    }
  });
});
