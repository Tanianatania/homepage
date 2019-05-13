      function switchToColor(color) {
    try {
      document.querySelectorAll(".page").forEach(function (page) {
        page.style.borderColor = color;
      });
      document.querySelectorAll(".statham-img").forEach(function (page) {
        page.style.borderColor = color;
      });
    } catch (error) { }
  }
  document.getElementById("midnightblue").addEventListener("click", switchToColor.bind(this, "midnightblue"));
  document.getElementById("chartreuse").addEventListener("click", switchToColor.bind(this, "chartreuse"));
  document.getElementById("red").addEventListener("click", switchToColor.bind(this, "red"));