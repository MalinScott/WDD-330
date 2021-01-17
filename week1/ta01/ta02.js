// ta02.js
function sendAlert() {
   alert("Clicked!")
}
function updateDiv() {
   var textValue = document.getElementById("user_text").value;
   var section1 = document.getElementById("div1");
   var color = textValue;
   section1.style.backgroundColor = color;
}
function hideDiv() {
   $(document).ready(function () {
      $("#hide").click(function () {
         $("#div3").hide(1000);
      });
      $("#show").click(function () {
         $("#div3").show(1000);
      });
   });
}