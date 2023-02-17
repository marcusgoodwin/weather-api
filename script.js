let forecast = {
    "apiKey": "24dd9d9b82cecf8e85ccfa44b0e078b5",
    fetchTemp: function (name) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?id=" + name + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json());
    },
    displayForecast: function (data) {
        const {name} = data;
        const {description} = data.weather[0];
        const {humidity, temp} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".wind").innerText = "Wind speed of " + speed + "MPH";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
};