// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  let element = document.querySelector("p#text");
  if (element.textContent === "This is really cool!") {
    element.textContent =
      "JavaScript is so cool. It lets me add text to my page programmatically.";
  } else if (
    element.textContent ===
    "JavaScript is so cool. It lets me add text to my page programmatically."
  ) {
    element.textContent = "This is really cool!";
  }
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
