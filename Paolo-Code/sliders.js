const homebutton = document.getElementById("homebutton");
const contactbutton = document.getElementById("contactbutton");

homebutton.classList.remove("nav-link-active");
contactbutton.classList.remove("nav-link-active");

//SLIDER
let sliderb = document.getElementById("myRangeb");
let outputb = document.getElementById("demo1");
let sliderv = document.getElementById("myRangev");
let outputv = document.getElementById("demo2");
let sliderf = document.getElementById("myRangef");
let outputf = document.getElementById("demo3");

//BRIGHTNESS
outputb.innerHTML = "Value: " + sliderb.value; // Display the default slider value

// BRIGHTNESS - Update the current slider value (each time you drag the slider handle)
sliderb.oninput = function () {
  outputb.innerHTML = "Value: " + this.value;
};

//VOLUME
outputv.innerHTML = "Value: " + sliderv.value; // Display the default slider value

// VOLUME - Update the current slider value (each time you drag the slider handle)
sliderv.oninput = function () {
  outputv.innerHTML = "Value: " + this.value;
};

//FONT
outputf.innerHTML = "Value: " + sliderf.value; // Display the default slider value

// FONT - Update the current slider value (each time you drag the slider handle)
sliderf.oninput = function () {
  outputf.innerHTML = "Value: " + this.value;
};

// sliderf.oninput = function () {
//   //   outputf.style.fontSize = sliderf.value;
//   console.log(document.querySelector("body"));
//   document
//     .querySelector("body")
//     .setAttribute("style", "font-size:" + sliderf.value / 10 + "rem");
// };

// sliderf.addEventListener("input", function () {
//  let size = sliderf.value;
// this sets the body's font size property, but you can set whatever you need to
// document.h2.style.fontSize = size + "vw";
// });
