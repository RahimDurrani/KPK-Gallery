const body = document.querySelector("body");
const form = document.querySelector(".form-data");
const cards = document.querySelectorAll(".btn1");
var bt1 = document.querySelector("#fo-bt1");
var bt2 = document.querySelector("#fo-bt2");
var mForm = document.querySelector(".main-form")

cards.forEach((card) => {
  card.addEventListener("click", function() {
    form.style.display = "block"
    body.style.overflow = "hidden"
  })
})

bt1.addEventListener("click",function(){
  form.style.display = "none";
   body.style.overflow = "auto";
})
bt2.addEventListener("click",function(){
  form.style.display = "none";
   body.style.overflow = "auto";
})
