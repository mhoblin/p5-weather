var cheney = '99004'
var spokane = '99204'
$('.ui.card, .newlocation').hide();

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
      $('.ui.card, .newlocation').show();

      $('.newlocation').show();



      
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


//click on "new location"
$('.newlocation').click(function(){

//show lightbox to select new location
  $('.basic.modal').modal('show');
});

//hide lightbox when location selected
$('.button.getweather').click(function() {
  $('.basic').modal('hide');
});

console.log()



