var cheney = '99004'
var spokane = '99204'
$('.ui.stuff, .newlocation').hide();

$('.basic').modal('show');



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
  		$('.high').text(weather.high);
      $('.low').text(weather.low);
  		$('.header').text(weather.city);
  		$('.currently').text(weather.currently)


    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

  // REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

//If input is empty, the button will be disabled
$('input').keyup(function(){
  if ( $('input').val().length >= 1   ) {
  // if less than 1 character
    $('.button.getweather').removeClass('disabled')}

    else {$('.button.getweather').addClass('disabled')}
  
});

// On click button, get zip, then run Simple Weather
$('.button.getweather').on('click', function() {

  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {

      //hide button
      $('.basic.modal').hide();

      //show weather and "new location" button
      $('.ui.stuff, .newlocation').show();

      $('.newlocation').show();



      
      // Get & store temperature
      var high = weather.high;
      var low = weather.low;

      // Get & store city
      var city = weather.city;

      var currently = weather.currently;
      
      // Output to hooks in HTML
      $('.high').text(high);
      $('.low').text(low);
      $('.city').text(city);
      $('.currently').text(weather.currently);

      //change background dependng on weather
      if(weather.currently == 'Light Rain' || weather.currently == 'Rain' || weather.currently == 'Light Rain Shower' || weather.currently == 'Scattered Showers' || weather.currently == 'Drizzle') {
        $('body').removeClass().addClass('rain dimmable');
      };

      if(weather.currently == 'Freezing Drizzle' || weather.currently == 'Freezing Rain') {
        $('body').removeClass().addClass('freezing dimmable');
      };


      if(weather.currently == 'Clear' || weather.currently == 'Fair' || weather.currently == 'Sunny') {
        $('body').removeClass().addClass('fair dimmable');
      };

      if(weather.currently == 'Partly Cloudy') {
        $('body').removeClass().addClass('partly dimmable');
      };

      if(weather.currently == 'Cloudy' || weather.currently == 'Mostly Cloudy') {
        $('body').removeClass().addClass('cloudy dimmable');
      };


      if(weather.currently == 'Fog' || weather.currently == 'Foggy' || weather.currently == '') {
        $('body').removeClass().addClass('fog dimmable');
      };

      if(weather.currently == 'Blowing Snow' || weather.currently == 'Light Snow Showers' || weather.currently == 'Snow Flurries' || weather.currently == 'Snow' || weather.currently == 'Light Snow' || weather.currently == 'Heavy Snow' || weather.currently == 'Scattered Snow Showers' || weather.currently == 'Snow Showers') {
        $('body').removeClass().addClass('snow dimmable');
      };

      if(weather.currently == 'Tropical Storm' || weather.currently == 'Hurricane' || weather.currently == 'Storm') {
        $('body').removeClass().addClass('storm dimmable');
      };

      if(weather.currently == 'Isolated Thundershowers' || weather.currently == 'Scattered Thunderstorms' || weather.currently == 'Isolated Thunderstorms' || weather.currently == 'Thunderstorms' || weather.currently == 'Thundershowers' || weather.currently == 'Severe Thunderstorms') {
        $('body').removeClass().addClass('lightning dimmable');
      };

      if(weather.currently == 'Tornado') {
        $('body').removeClass().addClass('tornado dimmable');
      };

      if(weather.currently == 'Mixed Rain and Hail' || weather.currently == 'Sleet' || weather.currently == 'Hail' || weather.currently == 'Mixed Snow and Sleet' || weather.currently == 'Mixed Raind and Sleet' || weather.currently == 'Mixed Rain and Snow') {
        $('body').removeClass().addClass('mix dimmable');
      };

      if(weather.currently == 'Dust') {
        $('body').removeClass().addClass('dust dimmable');
      };

      if(weather.currently == 'Smoky') {
        $('body').removeClass().addClass('smoky dimmable');
      };

      if(weather.currently == 'Wintry Mix' ||weather.currently == 'Cold') {
        $('body').removeClass().addClass('cold dimmable');
      };

       if(weather.currently == 'Hot') {
        $('body').removeClass().addClass('hot dimmable');
      };

      if(weather.currently == 'Blustery' || weather.currently == 'Windy') {
        $('body').removeClass().addClass('windy dimmable');
      };



  

      console.log(currently)






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


//click on "new location"
$('.newlocation').click(function(){

//show lightbox to select new location
  $('.basic.modal').modal('show');
});

//hide lightbox when location selected
$('.button.getweather').click(function() {
  $('.basic').modal('hide');
});




