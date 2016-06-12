var Geo={};
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success,error);
} else {
	alert('Geolocation is not supported');
}

function error() {
	alert("That's weird! We couldn't find you!");
}

function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
}

var output = document.getElementById("out");
output.innerHTML = '<p>Latitude is ' + Geo.lat + '° <br>Longitude is ' + Geo.lng + '°</p>';

var key = 'ede211c9afc45826594bb0936d9d5b9c';

var City = 'Decatur';
var Weather = "http://api.openweathermap.org/data/2.5/weather?q=" + City + "&APPID=" + key;

$.ajax({
	url : Weather,
	dataType : "jsonp",
	success : function(data) {
		var location =data['sys']['city'];
		var temp = data['main']['temp'];
		var img = data['weather']['icon'];
		var desc = data['weather']['description'];
		var wind = data['wind']['speed'];
	}
});


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





// //setting the spans to the correct parameters
// $('#location').html(location);
// $('#temp').html(temp);
// $('#desc').html(desc);
// $('#wind').html(wind);
// //filling the image src attribute with the image url
// $('#img').attr('src', img);