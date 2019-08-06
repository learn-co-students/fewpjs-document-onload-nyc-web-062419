// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    document.querySelector("p#text").textContent = "This is really cool!"
  });

console.log(
"This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);