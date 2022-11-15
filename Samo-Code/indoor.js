const button1 = document.getElementById("i1");

button1.onclick = function () {
    button1.classList.toggle("buttonpressed");
}

button1.addEventListener("click", function () {
    button1.classList.toggle("buttonpressed")
})