var searchButton = document.getElementById("search-button");

var cityInput = document.getElementById("input");

var recentSearch = document.getElementById("recent-searches");

//var weatherSection = document.getElementsByClassName("hidden");

var cityName = document.getElementById("city-name");
var cityTemp = document.getElementById("city-temp");
var cityWind = document.getElementById("city-wind");
var cityHumidity = document.getElementById("city-humidity");

var fiveDayPull = document.getElementById("5-day-pull");

//var cityLattitude = value;

//var cityLongitude = value1;

var cityCoordinatesURL = ('http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput.value + '&limit=5&appid=aa5a9bd886dab3a65130eaa89476e34e')

function testFunction() {


    fetch(cityCoordinatesURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            var cityLattitude = data[0].lat;
            var cityLongitude = data[0].lon;
            var searchCityName = data[0].name + ", " + data[0].country;
            cityName.innerHTML = searchCityName;
           
            
            function cityWeather() {
                var cityWeatherURL = ('https://api.openweathermap.org/data/2.5/weather?lat=' + cityLattitude + '&lon=' + cityLongitude + '&appid=aa5a9bd886dab3a65130eaa89476e34e')
                fetch(cityWeatherURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var weatherSection = document.getElementById("weather-section");
                        weatherSection.classList.remove("hidden");
                        cityTemp.innerHTML = "Temp: " + (((data.main.temp) - 273.15) * 9/5 + 32).toFixed(1) + "°F";
                        cityWind.innerHTML = "Wind: " + data.wind.speed + "MPH";
                        cityHumidity.innerHTML = "Humidity: " + data.main.humidity + "%";
                    })
            }

            function fiveDay() {
                var fiveDayPullURL = ('https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLattitude + '&lon=' + cityLongitude + '&appid=aa5a9bd886dab3a65130eaa89476e34e')
                fetch(fiveDayPullURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var dayOneDate = document.getElementById("day-one-date");
                    dayOneDate.innerHTML = data.list[2].dt_txt;
                    var dayOneTemp = document.getElementById("day-one-temp");
                    dayOneTemp.innerHTML = "Temp: " + (((data.list[2].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayOneWind = document.getElementById("day-one-wind");
                    dayOneWind.innerHTML = "Wind: " + data.list[2].wind.speed + "MPH";
                    var dayOneHumidity = document.getElementById("day-one-humidity");
                    dayOneHumidity.innerHTML = "Humidity: " + data.list[2].main.humidity + "%";

                    var dayTwoDate = document.getElementById("day-two-date");
                    dayTwoDate.innerHTML = data.list[10].dt_txt;
                    var dayTwoTemp = document.getElementById("day-two-temp");
                    dayTwoTemp.innerHTML = "Temp: " + (((data.list[10].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayTwoWind = document.getElementById("day-two-wind");
                    dayTwoWind.innerHTML = "Wind: " + data.list[10].wind.speed + "MPH";
                    var dayTwoHumidity = document.getElementById("day-two-humidity");
                    dayTwoHumidity.innerHTML = "Humidity: " + data.list[10].main.humidity + "%";

                    var dayThreeDate = document.getElementById("day-three-date");
                    dayThreeDate.innerHTML = data.list[18].dt_txt;
                    var dayThreeTemp = document.getElementById("day-three-temp");
                    dayThreeTemp.innerHTML = "Temp: " + (((data.list[18].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayThreeWind = document.getElementById("day-three-wind");
                    dayThreeWind.innerHTML = "Wind: " + data.list[18].wind.speed + "MPH";
                    var dayThreeHumidity = document.getElementById("day-three-humidity");
                    dayThreeHumidity.innerHTML = "Humidity: " + data.list[18].main.humidity + "%";

                    var dayFourDate = document.getElementById("day-four-date");
                    dayFourDate.innerHTML = data.list[26].dt_txt;
                    var dayFourTemp = document.getElementById("day-four-temp");
                    dayFourTemp.innerHTML = "Temp: " + (((data.list[26].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayFourWind = document.getElementById("day-four-wind");
                    dayFourWind.innerHTML = "Wind: " + data.list[26].wind.speed + "MPH";
                    var dayFourHumidity = document.getElementById("day-four-humidity");
                    dayFourHumidity.innerHTML = "Humidity: " + data.list[26].main.humidity + "%";

                    var dayFiveDate = document.getElementById("day-five-date");
                    dayFiveDate.innerHTML = data.list[34].dt_txt;
                    var dayFiveTemp = document.getElementById("day-five-temp");
                    dayFiveTemp.innerHTML = "Temp: " + (((data.list[34].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayFiveWind = document.getElementById("day-five-wind");
                    dayFiveWind.innerHTML = "Wind: " + data.list[34].wind.speed + "MPH";
                    var dayFiveHumidity = document.getElementById("day-five-humidity");
                    dayFiveHumidity.innerHTML = "Humidity: " + data.list[34].main.humidity + "%";
                })
                }

            cityWeather();
            fiveDay();
        })
    
}