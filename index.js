document.addEventListener("DOMContentLoaded", function () {
    updateDOM()
});


function updateDOM() {
    document.getElementById("text")
        .innerHTML = "This is really cool!";
}

function addingEventListener() {
    const input = document.getElementById('text');
    input.addEventListener('click', function (event) {
        alert('I was clicked!');
    });
}

addingEventListener();