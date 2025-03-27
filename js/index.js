$(document).ready(function () {
  $("body").css("display", "none");
  $("body").fadeIn(2000);
});

$("#switch").click(function () {
  if (this.checked) {
    $("html").css("background-color", "#FADADD");//Fondo antes verde:#94B49F
    $("html").css("transition", "3s");
    window.location.href = "index-1.html";
  } else {
    $("html").css("background-color", "#B9AEDC");//Fondo antes morado oscuro:#4c3a51
  }
});
