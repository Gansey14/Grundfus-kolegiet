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
  let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(), // Getting first day of the month
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), // Getting last Date of this month
    lastDayofMonth = new Date(
      currentYear,
      currentMonth,
      lastDateofMonth
    ).getDay(), // Getting last day of this month
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // Getting last Date of previous month
  let liTag = "";

  //creating li of previous month's last days
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  //creating li of all days of current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    // adding active class to li of the current day - if matches
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  //creating li of first days of next month
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
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

    // If current month is less than 0 or more than 11
    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalender();
  });
});
