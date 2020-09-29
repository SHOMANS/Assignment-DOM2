// Here you can access the colors variable
// have fun

const btn = document.querySelector("body > div > div > div.control > button");
const pallete = document.getElementById("pallete");
const input = document.getElementById("color");
let color = ""

btn.addEventListener("click", function () {
  color = colors[Math.floor(Math.random() * colors.length - 1)];
  pallete.style.backgroundColor = color
  input.value = color;
});

input.addEventListener("input", function () {
  pallete.style.backgroundColor = input.value;
});
