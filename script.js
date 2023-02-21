let forecast = {
    apiKey: "24dd9d9b82cecf8e85ccfa44b0e078b5",
    fetchTemp: function(name) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=imperial&appid=" + this.apiKey)
            .then(response => response.json())
            .then(data => this.displayForecast(data));
    },
    displayForecast: function(data) {
        const name = data.name;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const temp = data.main.temp;
        const speed = data.wind.speed;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".wind").innerText = "Wind speed of " + speed + " MPH";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
    nav: function() {
        const input = document.querySelector(".nav-bar").value;
        this.fetchTemp(input);
    }
};

document.querySelector(".nav button").addEventListener("click", function() {
    forecast.nav();
});
