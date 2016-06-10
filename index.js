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

var key = 'ede211c9afc45826594bb0936d9d5b9c';
var City = 'Decatur';
var Weather = "http://api.openweathermap.org/data/2.5/weather?q=" + City + "&APPID=" + key;

$.ajax({
	url : Weather,
	dataType : "jsonp",
	success : function(data) {
	// get all the information
	}
});

var location =data['location']['city'];
var temp = data['current_observation']['temp_f'];
var img = data['current_observation']['icon_url'];
var desc = data['current_observation']['weather'];
var wind = data['current_observation']['wind_string'];

//setting the spans to the correct parameters
$('#location').html(location);
$('#temp').html(temp);
$('#desc').html(desc);
$('#wind').html(wind);
//filling the image src attribute with the image url
$('#img').attr('src', img);