function Service() {
}

Service.prototype.getWeatherByCoords = function(lat, lon, locale, onSuccess, onError) {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +  "&lang=" + locale + "&units=metric",
		type: "GET",
		dataType: "jsonp",
		success: function(result) {
			onSuccess(result);
		}	,
		error: function (xhr) {
			onError(xhr.status);           
		}
	});
};

Service.prototype.getWeatherByLocation = function(city, country, locale, onSuccess, onError) {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&lang=" + locale +"&units=metric",
		type: "GET",
		dataType: "jsonp",
		success: function(result) {
			onSuccess(result);
		}	,
		error: function (xhr) {
			onError(xhr.status);           
		}
	});
};

Service.prototype.getDailyForecastByCoords = function(lat, lon, locale, onSuccess, onError) {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon +  "&lang=" + locale + "&cnt=7&units=metric",
		type: "GET",
		dataType: "jsonp",
		success: function(result) {
			onSuccess(result);
		}	,
		error: function (xhr) {
			onError(xhr.status);           
		}
	});
};

Service.prototype.getMyLocation = function(onSuccess, onError) {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
		function(position) { 
			onSuccess(position);
		},
		function(error) {
			onError(error.message);	
		},
		{timeout:20000});
	}
	else {
		onError("Geolocation is not supported by this browser.")
	}		
};
