const button1 = document.querySelector(".i1");
const pin1 = document.querySelector(".firstpin");

button1.classList.toggle("iconwrapper");
button1.classList.toggle("iconwrapper");
pin1.classList.toggle("pinhidden");

button1.onclick = function () {
    button1.classList.toggle("iconwrapper");
    button1.classList.toggle("buttonpressed");
    pin1.classList.toggle("pinhidden");
}

