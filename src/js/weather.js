const todayDate = document.querySelector(".today__date--day");
const todayDayName = document.querySelector(".today__date--day-name");
const temperature = document.querySelector(".weather__temp");
const sunset = document.querySelector(".sunset__text");
const sunrise = document.querySelector(".sunrise__text");
const weatherIcon = document.querySelector(".weather__img");
const weatherPressure = document.querySelector(".weather__pressure");
const weatherHumidity = document.querySelector(".weather__humidity");
const weatherCity = document.querySelector(".weather__city");

const getWeatherData = async (lat, long) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0ac8d24292bec7ba2bf644e405cffefb`
    );
    const data = await res.json();
    temperature.textContent = `${(data.main.temp - 273.15).toFixed(1)} ℃`;
    console.log(data);
    sunrise.textContent = `Sunrise: ${new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString("default")}`;
    sunset.textContent = `Sunset: ${new Date(
      data.sys.sunset * 1000
    ).toLocaleTimeString("default")}`;
    weatherCity.innerHTML = data.name;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherPressure.textContent = `${data.main.pressure} hPa`;
    weatherHumidity.textContent = `${data.main.humidity} %`;
  } catch (err) {
    console.error(err);
  }
};

export const showWeather = () => {
  let latitude;
  let longitude;
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      function (position) {
        latitude = position.coords.latitude.toFixed(2);
        longitude = position.coords.longitude.toFixed(2);
        getWeatherData(latitude, longitude);
      },
      function () {
        alert("could not get your position");
      }
    );
};
// showWeather();
