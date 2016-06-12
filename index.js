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
      codeLatLng(Geo.lat, Geo.lng);
}

function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {
         //formatted address
         alert(results[0].formatted_address)
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
        alert(city.short_name + " " + city.long_name)


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
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