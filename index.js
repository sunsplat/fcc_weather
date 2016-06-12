var geocoder;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
// Get the latitude and the longitude;
function successFunction(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  codeLatLng(lat, lng);
}

function errorFunction() {
  alert("Geocoder failed");
}

function initialize() {
  geocoder = new google.maps.Geocoder();

}

function codeLatLng(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({latLng: latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        var arrAddress = results;
        console.log(results);
        $.each(arrAddress, function(i, address_component) {
          if (address_component.types[0] == "locality") {
            console.log("City: " + address_component.address_components[0].long_name);
            itemLocality = address_component.address_components[0].long_name;
          }
        });
      } else {
        alert("No results found");
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}
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