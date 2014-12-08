var cheney = '99004'
var spokane = '99204'



// Docs at http://simpleweatherjs.com
  $.simpleWeather({
    location: cheney,
    woeid: '',
    unit: 'f',
    success: function(weather) {
     // html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
     // html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
     // html += '<li class="currently">'+weather.currently+'</li>';
     // html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  		$('.temp').text(weather.temp);
  		$('.header').text(weather.city);
  		$('.current').text(weather.currently)

  		console.log(weather)	

    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
