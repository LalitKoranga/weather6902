// let weather = {
//     "apikey": "9d8c80368ca06b3a5df1e6a170b18653",
//     fetchWeather : function (city) {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q="
//             + city
//             + "&units=metric&appid="
//             + this.apikey)
//             .then((Response) => Response.json())
//             .then((data) => this.displayWeather(data));
//     },
//
//     displayWeather: function(data) {
//         const { name } = data;
//         const { icon, description } = data.weather[0];
//         const { temp, humidity } = data.main;
//         const { speed } = data.wind;
//         document.querySelector(".city").innerText = "Weather in " + name;
//         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerText = description;
//         document.querySelector(".temp").innerText = temp + "°C";
//         document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//         document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
//         document.querySelector(".weather").classList.remove("loading");
//         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
//     },
//
//     search : function() {
//         this.fetchWeather(document.querySelector(".searchbar").value);
//     }
// };
//
// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
// });
//
// document.querySelector(".searchbar").addEventListener("keyup", function(event){
//     if(event.key == "Enter"){
//         weather.search();
//     }
// });
//
// weather.fetchWeather("durgapur");





// let weather = {
//     "apikey": "9d8c80368ca06b3a5df1e6a170b18653",
//     convertMpsToKmh: function(speedMps) {
//         return (speedMps * 3.6).toFixed(2); // Convert and round to 2 decimal places
//     },
//     fetchWeather: function(city) {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q="
//             + city
//             + "&units=metric&appid="
//             + this.apikey)
//             .then((Response) => Response.json())
//             .then((data) => this.displayWeather(data));
//
//         // Fetch forecast data for the next few days
//         this.fetchForecast(city);
//     },
//
//     fetchForecast: function(city) {
//         // Fetch forecast data for the next few days
//         // You can modify the URL and handle the response similarly to weather data
//         // Example:
//         fetch("https://api.openweathermap.org/data/2.5/forecast?q="
//             + city
//             + "&units=metric&appid="
//             + this.apikey)
//             .then((Response) => Response.json())
//             .then((data) => this.displayForecast(data));
//     },
//
//     displayWeather: function(data) {
//         const { name } = data;
//         const { icon, description } = data.weather[0];
//         const { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level } = data.main;
//         const { speed, deg, gust } = data.wind;
//         const { sunrise, sunset } = data.sys; // Extract sunrise and sunset
//         const windSpeedKmh = this.convertMpsToKmh(speed);
//         document.querySelector(".city").innerText = "Weather in " + name;
//         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerText = description;
//         document.querySelector(".temp").innerText = temp + "°C";
//         document.querySelector(".feels-like").innerText = "Feels like: " + feels_like + "°C";
//         document.querySelector(".temp-min").innerText = "Min Temp: " + temp_min + "°C";
//         document.querySelector(".temp-max").innerText = "Max Temp: " + temp_max + "°C";
//         document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
//         document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//         document.querySelector(".sea-level").innerText = "Sea Level: " + sea_level + " hPa";
//         document.querySelector(".grnd-level").innerText = "Ground Level: " + grnd_level + " hPa";
//         document.querySelector(".visibility").innerText = "Visibility: " + data.visibility + " meters";
//         document.querySelector(".wind").innerText = "Wind speed: " + windSpeedKmh + " km/h";
//         document.querySelector(".wind-degree").innerText = "Wind Degree: " + deg + "°";
//         document.querySelector(".wind-gust").innerText = "Wind Gust: " + gust + " m/s";
//         document.querySelector(".sunrise").innerText = "Sunrise: " + new Date(sunrise * 1000).toLocaleTimeString();
//         document.querySelector(".sunset").innerText = "Sunset: " + new Date(sunset * 1000).toLocaleTimeString();
//         document.querySelector(".weather").classList.remove("loading");
//         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
//     },
//
//     displayForecast: function(data) {
//         // Display forecast data for the next few days
//         // You can extract and display relevant information similar to displayWeather
//         // Example:
//         console.log("Forecast Data:", data);
//     },
//
//     search: function() {
//         this.fetchWeather(document.querySelector(".searchbar").value);
//     }
// };
//
// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
// });
//
// document.querySelector(".searchbar").addEventListener("keyup", function(event){
//     if(event.key == "Enter"){
//         weather.search();
//     }
// });
//
// weather.fetchWeather("durgapur");





//VISIBILITY FROM METER TO KILOMETER CHANGED
// let weather = {
//     "apikey": "9d8c80368ca06b3a5df1e6a170b18653",
//     convertMpsToKmh: function(speedMps) {
//         return (speedMps * 3.6).toFixed(2); // Convert and round to 2 decimal places
//     },
//     fetchWeather: function(city) {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q="
//             + city
//             + "&units=metric&appid="
//             + this.apikey)
//             .then((Response) => Response.json())
//             .then((data) => this.displayWeather(data));
//
//         // Fetch forecast data for the next few days
//         this.fetchForecast(city);
//     },
//
//     fetchForecast: function(city) {
//         // Fetch forecast data for the next few days
//         // You can modify the URL and handle the response similarly to weather data
//         // Example:
//         fetch("https://api.openweathermap.org/data/2.5/forecast?q="
//             + city
//             + "&units=metric&appid="
//             + this.apikey)
//             .then((Response) => Response.json())
//             .then((data) => this.displayForecast(data));
//     },
//
//     displayWeather: function(data) {
//         const { name } = data;
//         const { icon, description } = data.weather[0];
//         const { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level } = data.main;
//         const { speed, deg, gust } = data.wind;
//         const { sunrise, sunset } = data.sys; // Extract sunrise and sunset
//         const windSpeedKmh = this.convertMpsToKmh(speed);
//         document.querySelector(".city").innerText = "Weather in " + name;
//         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerText = description;
//         document.querySelector(".temp").innerText = temp + "°C";
//         document.querySelector(".feels-like").innerText = "Feels like: " + feels_like + "°C";
//         document.querySelector(".temp-min").innerText = "Min Temp: " + temp_min + "°C";
//         document.querySelector(".temp-max").innerText = "Max Temp: " + temp_max + "°C";
//         document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
//         document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//         document.querySelector(".sea-level").innerText = "Sea Level: " + sea_level + " hPa";
//         document.querySelector(".grnd-level").innerText = "Ground Level: " + grnd_level + " hPa";
//         document.querySelector(".visibility").innerText = "Visibility: " + data.visibility + " meters";
//         document.querySelector(".wind").innerText = "Wind speed: " + windSpeedKmh + " km/h";
//         document.querySelector(".wind-degree").innerText = "Wind Degree: " + deg + "°";
//         document.querySelector(".wind-gust").innerText = "Wind Gust: " + gust + " m/s";
//         document.querySelector(".sunrise").innerText = "Sunrise: " + new Date(sunrise * 1000).toLocaleTimeString();
//         document.querySelector(".sunset").innerText = "Sunset: " + new Date(sunset * 1000).toLocaleTimeString();
//         document.querySelector(".weather").classList.remove("loading");
//         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
//     },
//
//     displayForecast: function(data) {
//         // Display forecast data for the next few days
//         // You can extract and display relevant information similar to displayWeather
//         // Example:
//         console.log("Forecast Data:", data);
//     },
//
//     search: function() {
//         this.fetchWeather(document.querySelector(".searchbar").value);
//     }
// };
//
// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
// });
//
// document.querySelector(".searchbar").addEventListener("keyup", function(event){
//     if(event.key == "Enter"){
//         weather.search();
//     }
// });
//
// weather.fetchWeather("Nainital");








// let weather = {
//     "apikey": "9d8c80368ca06b3a5df1e6a170b18653",
//     convertMpsToKmh: function(speedMps) {
//         return (speedMps * 3.6).toFixed(2); // Convert and round to 2 decimal places
//     },
//     fetchWeather: function(city) {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q="
//             + city
//             + "&units=metric&appid="
//             + this.apikey)
//             .then((Response) => Response.json())
//             .then((data) => this.displayWeather(data));
//
//         // Fetch forecast data for the next few days
//         this.fetchForecast(city);
//     },
//
//     fetchForecast: function(city) {
//         // Fetch forecast data for the next few days
//         // You can modify the URL and handle the response similarly to weather data
//         // Example:
//         fetch("https://api.openweathermap.org/data/2.5/forecast?q="
//             + city
//             + "&units=metric&appid="
//             + this.apikey)
//             .then((Response) => Response.json())
//             .then((data) => this.displayForecast(data));
//     },
//
//     displayWeather: function(data) {
//         const { name } = data;
//         const { icon, description } = data.weather[0];
//         const { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level } = data.main;
//         const { speed, deg, gust } = data.wind;
//         const { sunrise, sunset } = data.sys; // Extract sunrise and sunset
//         const windSpeedKmh = this.convertMpsToKmh(speed);
//         const visibilityKm = (data.visibility / 1000).toFixed(2); // Convert visibility to kilometers and round to 2 decimal places
//         document.querySelector(".city").innerText = "Weather in " + name;
//         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerText = description;
//         document.querySelector(".temp").innerText = temp + "°C";
//         document.querySelector(".feels-like").innerText = "Feels like: " + feels_like + "°C";
//         document.querySelector(".temp-min").innerText = "Min Temp: " + temp_min + "°C";
//         document.querySelector(".temp-max").innerText = "Max Temp: " + temp_max + "°C";
//         document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
//         document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//         document.querySelector(".sea-level").innerText = "Sea Level: " + sea_level + " hPa";
//         document.querySelector(".grnd-level").innerText = "Ground Level: " + grnd_level + " hPa";
//         document.querySelector(".visibility").innerText = "Visibility: " + visibilityKm + " km";
//         document.querySelector(".wind").innerText = "Wind speed: " + windSpeedKmh + " km/h";
//         document.querySelector(".wind-degree").innerText = "Wind Degree: " + deg + "°";
//         document.querySelector(".wind-gust").innerText = "Wind Gust: " + gust + " m/s";
//         document.querySelector(".sunrise").innerText = "Sunrise: " + new Date(sunrise * 1000).toLocaleTimeString();
//         document.querySelector(".sunset").innerText = "Sunset: " + new Date(sunset * 1000).toLocaleTimeString();
//         document.querySelector(".weather").classList.remove("loading");
//         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
//     },
//
//     displayForecast: function(data) {
//         // Display forecast data for the next few days
//         // You can extract and display relevant information similar to displayWeather
//         // Example:
//         console.log("Forecast Data:", data);
//     },
//
//     search: function() {
//         this.fetchWeather(document.querySelector(".searchbar").value);
//     }
// };
//
// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
// });
//
// document.querySelector(".searchbar").addEventListener("keyup", function(event){
//     if(event.key == "Enter"){
//         weather.search();
//     }
// });
//
// weather.fetchWeather("Nainital");



let weather = {
    "apikey": "9d8c80368ca06b3a5df1e6a170b18653",
    convertMpsToKmh: function (speedMps) {
        return (speedMps * 3.6).toFixed(2); // Convert and round to 2 decimal places
    },
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey)
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));

        // Fetch forecast data for the next few days
        this.fetchForecast(city);
    },

    fetchForecast: function (city) {



        // Fetch forecast data for the next few days
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric&appid="
            + this.apikey)
            .then((Response) => Response.json())
            .then((data) => this.displayForecast(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level } = data.main;
        const { speed, deg, gust } = data.wind;
        const { sunrise, sunset } = data.sys; // Extract sunrise and sunset
        const windSpeedKmh = this.convertMpsToKmh(speed);
        const visibilityKm = (data.visibility / 1000).toFixed(2); // Convert visibility to kilometers and round to 2 decimal places
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feels-like").innerText = "Feels like: " + feels_like + "°C";
        document.querySelector(".temp-min").innerText = "Min Temp: " + temp_min + "°C";
        document.querySelector(".temp-max").innerText = "Max Temp: " + temp_max + "°C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".sea-level").innerText = "Sea Level: " + sea_level + " hPa";
        document.querySelector(".grnd-level").innerText = "Ground Level: " + grnd_level + " hPa";
        document.querySelector(".visibility").innerText = "Visibility: " + visibilityKm + " km";
        document.querySelector(".wind").innerText = "Wind speed: " + windSpeedKmh + " km/h";
        document.querySelector(".wind-degree").innerText = "Wind Degree: " + deg + "°";
        document.querySelector(".wind-gust").innerText = "Wind Gust: " + gust + " m/s";
        document.querySelector(".sunrise").innerText = "Sunrise: " + new Date(sunrise * 1000).toLocaleTimeString();
        document.querySelector(".sunset").innerText = "Sunset: " + new Date(sunset * 1000).toLocaleTimeString();
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2880x1864/?" + name + "')"
        //2880 × 1864      1600x900
    },

    displayForecast: function (data) {
        const forecastContainer = document.querySelector(".forecast");
        forecastContainer.innerHTML = "";
        for (let i = 0; i < data.list.length; i += 8) {
            const dayForecast = data.list.slice(i, i + 8);

            const forecastDayElement = document.createElement("div");
            forecastDayElement.classList.add("forecast-day");

            let dayOfWeek;

            dayForecast.forEach((forecastItem, index) => {
                const forecastDate = new Date(forecastItem.dt * 1000);
                dayOfWeek = forecastDate.toLocaleDateString("en-US", { weekday: "short" });

                const forecastElement = document.createElement("div");
                forecastElement.classList.add("forecast-item");

                const weatherIcon = forecastItem.weather[0].icon;
                const temperature = forecastItem.main.temp;
                const description = forecastItem.weather[0].description;

                const iconElement = document.createElement("img");
                iconElement.classList.add("forecast-icon");
                iconElement.src = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";

                const tempElement = document.createElement("div");
                tempElement.classList.add("forecast-temp");
                tempElement.textContent = temperature + "°C";

                const descElement = document.createElement("div");
                descElement.classList.add("forecast-description");
                descElement.textContent = description;


                const specificForecastContent = ` ${iconElement.outerHTML} ${tempElement.textContent} <br/> - ${descElement.textContent}`;


                if (index === 0) {
                    const dayOfWeekElement = document.createElement("span");
                    dayOfWeekElement.classList.add("day-of-week");
                    dayOfWeekElement.textContent = dayOfWeek;
                    forecastDayElement.appendChild(dayOfWeekElement);
                }

                forecastElement.innerHTML = specificForecastContent;

                forecastDayElement.appendChild(forecastElement);
            });

            forecastDayElement.style.marginBottom = "1em";

            forecastContainer.appendChild(forecastDayElement);
        }
    },

    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Nainital");
