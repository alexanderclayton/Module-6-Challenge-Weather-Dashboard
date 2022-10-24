var searchButton = document.getElementById("search-button");

var cityInput = document.getElementById("input");

var recentSearch = document.getElementById("recent-searches");

var cityName = document.getElementById("city-name");
var cityTemp = document.getElementById("city-temp");
var cityWind = document.getElementById("city-wind");
var cityHumidity = document.getElementById("city-humidity");

var fiveDayPull = document.getElementById("5-day-pull");

//var cityLattitude = value;

//var cityLongitude = value1;

var cityCoordinatesURL = ('http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput.value + '&limit=5&appid=aa5a9bd886dab3a65130eaa89476e34e')

var cityWeatherURL = ('https://api.openweathermap.org/data/2.5/weather?lat=cityLattitude&lon=cityLongitude&appid=aa5a9bd886dab3a65130eaa89476e34e')

var fiveDayPullURL = ('https://api.openweathermap.org/data/2.5/forecast?lat=cityLattitude&lon=cityLongitude&appid=aa5a9bd886dab3a65130eaa89476e34e')


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
                        var temp = data.main.temp;
                        var wind = data.wind.speed;
                        var humidity = data.main.humidity;

                        cityTemp.innerHTML = temp;
                        cityWind.innerHTML = wind;
                        cityHumidity.innerHTML = humidity
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
                    dayOneTemp.innerHTML = data.list[2].main.temp;
                    var dayOneWind = document.getElementById("day-one-wind");
                    dayOneWind.innerHTML = data.list[2].wind.speed;
                    var dayOneHumidity = document.getElementById("day-one-humidity");
                    dayOneHumidity.innerHTML = data.list[2].main.humidity

                    var dayTwoDate = document.getElementById("day-two-date");
                    dayTwoDate.innerHTML = data.list[10].dt_txt;
                    var dayTwoTemp = document.getElementById("day-two-temp");
                    dayTwoTemp.innerHTML = data.list[10].main.temp;
                    var dayTwoWind = document.getElementById("day-two-wind");
                    dayTwoWind.innerHTML = data.list[10].wind.speed;
                    var dayTwoHumidity = document.getElementById("day-two-humidity");
                    dayTwoHumidity.innerHTML = data.list[10].main.humidity

                    var dayThreeDate = document.getElementById("day-three-date");
                    dayThreeDate.innerHTML = data.list[18].dt_txt;
                    var dayThreeTemp = document.getElementById("day-three-temp");
                    dayThreeTemp.innerHTML = data.list[18].main.temp;
                    var dayThreeWind = document.getElementById("day-three-wind");
                    dayThreeWind.innerHTML = data.list[18].wind.speed;
                    var dayThreeHumidity = document.getElementById("day-three-humidity");
                    dayThreeHumidity.innerHTML = data.list[18].main.humidity

                    var dayFourDate = document.getElementById("day-four-date");
                    dayFourDate.innerHTML = data.list[26].dt_txt;
                    var dayFourTemp = document.getElementById("day-four-temp");
                    dayFourTemp.innerHTML = data.list[26].main.temp;
                    var dayFourWind = document.getElementById("day-four-wind");
                    dayFourWind.innerHTML = data.list[26].wind.speed;
                    var dayFourHumidity = document.getElementById("day-four-humidity");
                    dayFourHumidity.innerHTML = data.list[26].main.humidity
                })
                })
            }

            cityWeather();
            fiveDay();
        })
    
}