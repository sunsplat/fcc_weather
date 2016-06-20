
var OpenWeatherKey = 'ede211c9afc45826594bb0936d9d5b9c';

var cityUrl = 'http://freegeoip.net/json/';


function getWeather(url) {
	$.ajax({
		url : url,
		dataType : "json",
		success : function(data) {		
			var temp = data['main']['temp'];
			var img = data['weather'][0]['icon'];
			var desc = data['weather'][0]['description'];
			var humidity = data['main']['humidity'];
			var rain = data['weather'][0]['main'];
      var sunset = new Date((data['sys']['sunset'])*1000);
      sunset = sunset.toString().slice(16,21);
      $('img').id(img);
			$('#temp').html(temp);
			$('#desc').html(desc);
			$('#wind').html(rain);
      $('#sunset').html(sunset + " ");
      $('#humidity').html(humidity + "%");
		}
	});
}

var tempMeasure = true;

function getLocation() {
		$.ajax({
			url : cityUrl,
			dataType : "json",
			success : function(data) {
				if (tempMeasure == true) {
					var tempUnit = "imperial";
				} else {
					tempUnit = "metric";
				}

				var country =data['country_code'];
				var region = data['region_code'];
				var city = data['city'];
				var latitude = data['latitude'];
				var longitude = data['longitude'];
				$('#location').html(city + ', ' + region);
				var Weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=" + tempUnit + "&APPID=" + OpenWeatherKey;
				getWeather(Weather);
				console.log(Weather);
			}
		});
}

function toggleTempMeasurement() {
	getLocation();
	if (tempMeasure == false) {
		current_choice.innerHTML = "&#8457;";
		tempMeasure = true;
	} else {
		current_choice.innerHTML = "&#8451;";
		tempMeasure = false;
	}
}

getLocation();