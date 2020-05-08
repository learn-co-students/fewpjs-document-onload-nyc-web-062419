// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  let text = document.getElementById("text");
  text.textContent = "This is really cool!";
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
