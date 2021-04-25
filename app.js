let now = new Date();
let formatHour = now.getHours();
let formatMinutes = now.getMinutes();
let formatDate = now.getDate();
let formatDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let formatDay = formatDays[now.getDay];
console.log(`${formatDay}`);
let formatMonths = [
  "January",
  "Febuary",
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
let formatMonth = formatMonths[now.getDay];
let dateTimeNow = `${formatDay}, ${formatMonth} ${formatDate}, ${formatHour}:${formatMinutes}`;

let timeNow = document.querySelector("#dateTime");
timeNow.innerHTML = dateTimeNow;
function changeCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=447e114afd01a723e3d2abd1e6baf566&units=metric`;
  console.log("Working 1");
  axios.get(`${apiUrl}`).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let minTemp = Math.round(response.data.main.temp_min);
  let maxTemp = Math.round(response.data.main.temp_max);
  let windSpeed = Math.round(response.data.wind.speed);
  let humid = Math.round(response.data.main.humidity);
  let newCityName = response.data.name;
  let newCountry = response.data.sys.country;

  let userCity = document.querySelector("#city");
  userCity.innerHTML = `${newCityName}, ${newCountry}`;
  let userTemp = document.querySelector("#temprature");
  userTemp.innerHTML = `${temperature}°`;
  let userHigh = document.querySelector("#high");
  userHigh.innerHTML = `${maxTemp}°`;
  let userLow = document.querySelector("#low");
  userLow.innerHTML = `${minTemp}°`;
  let userWind = document.querySelector("#wind");
  userWind.innerHTML = `${windSpeed}km/h`;
  let userHumid = document.querySelector("#humid");
  userHumid.innerHTML = `${humid}%`;
  let newIcon = response.data.weather[0].id;
  displayIcon(newIcon);
}
function displayIcon(iconId) {
  let newerIcon = document.querySelector("#iconNow");
  if (iconId < 300) {
    newerIcon.innerHTML = `Icons/08dn.svg`;

    console.log("200's");
  } else if (iconId < 400) {
    console.log("300's");
  } else if (iconId < 500) {
    console.log("400's");
  } else if (iconId < 600) {
    console.log("500's");
  } else if (iconId < 700) {
    console.log("600's");
  } else if (iconId < 800) {
    console.log("700's");
  } else {
    console.log("800's");
  }
}

let newCity = document.querySelector("form");
newCity.addEventListener("submit", changeCity);