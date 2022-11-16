const button1 = document.querySelector(".i1");
const button2 = document.querySelector(".i2");
const button3 = document.querySelector(".i3");
const button4 = document.querySelector(".i4");
const pin1 = document.querySelector(".firstpin");
const pin2 = document.querySelector(".secondpin");
const pin3 = document.querySelector(".thirdpin");
const pin4 = document.querySelector(".fourthpin");

button1.classList.toggle("iconwrapper");
button1.classList.toggle("iconwrapper");

pin1.classList.toggle("pinhidden");
pin2.classList.toggle("pinhidden");
pin3.classList.toggle("pinhidden");
pin4.classList.toggle("pinhidden");

button1.onclick = function () {
    button1.classList.toggle("iconwrapper");
    button1.classList.toggle("buttonpressed");
    pin1.classList.toggle("pinhidden");
}
button2.onclick = function () {
    button2.classList.toggle("iconwrapper");
    button2.classList.toggle("buttonpressed");
    pin2.classList.toggle("pinhidden");
}
button3.onclick = function () {
    button3.classList.toggle("iconwrapper");
    button3.classList.toggle("buttonpressed");
    pin3.classList.toggle("pinhidden");
}
button4.onclick = function () {
    button4.classList.toggle("iconwrapper");
    button4.classList.toggle("buttonpressed");
    pin4.classList.toggle("pinhidden");
}

