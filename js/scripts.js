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

  // REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('.button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});

//When "enter zipcode is selected "

