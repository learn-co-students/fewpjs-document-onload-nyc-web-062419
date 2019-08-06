let para = document.querySelector('p#text')

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    para.textContent = "This is really cool!"
  });

console.log("Foo")

