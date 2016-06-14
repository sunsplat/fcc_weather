var OpenWeatherKey = 'ede211c9afc45826594bb0936d9d5b9c';

//var City = 'Decatur';
var City = 'http://freegeoip.net/json/';

function getLocation() {
		$.ajax({
			url : City,
			dataType : "json",
			success : function(data) {
				var country =data['country_code'];
				var region = data['region_code'];
				var city = data['city'];
				var latitude = data['latitude'];
				var longitude = data['longitude'];
				$('#location').html(city + ', ' + region);
				var Weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + OpenWeatherKey;
				getWeather(Weather);
			}
		});
}

function getWeather(url) {
	$.ajax({
		url : url,
		dataType : "json",
		success : function(data) {		
			var temp = data['main']['temp'];
			var img = data['weather']['icon'];
			var desc = data['weather']['description'];
			var wind = data['wind']['speed'];
			$('#temp').html(temp);
			$('#desc').html(desc);
			$('#wind').html(wind);
		}
	});
}


function toggleTempMeasurement() {
	var current_choice = document.getElementById('temp_measure')
	if (current_choice.innerHTML == "&#8451;") {
		current_choice.innerHTML = "&#8457;";
		console.log("&#8457;");
	} else {
		current_choice.innerHTML = "&#8451;";
		console.log("&#8451;");
	}
}

getLocation();


// $('#temp').html(temp);
// $('#desc').html(desc);
// $('#wind').html(wind);
// //filling the image src attribute with the image url
// $('#img').attr('src', img);