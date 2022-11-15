const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

//GET NEW DATE - MONTH AND YEAR
let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalender = () => {
  let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Getting last Date of the month
  let liTag = "";

  for (let i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
};
renderCalender();

//adding click event on arrows
prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Ternary operator - If clicked icon is prev icon then decrement else increment
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
    renderCalender();
  });
});
