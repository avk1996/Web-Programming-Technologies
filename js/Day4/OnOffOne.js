$(document).ready(function () {
  $("#assign").click(function () {
    $("input[type='text']").on("focus", function () {
      $(this).css("background-color", "pink");
    });
    $("input[type='text']").on("blur", function () {
      $(this).css("background-color", "white");
    });
  });
  $("#remove").click(function () {
    $("input[type='text']").off("focus", function () {});
    $("input[type='text']").off("blur", function () {});
  });
  $("#one").one("click", function () {
    $("body").append("<p> You chance is Gone, You can click Pink once</p>");
    $("body").css("background-color", "pink");
  });
});
