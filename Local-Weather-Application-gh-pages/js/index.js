var temp;
var tempF;
var tempRecord = 1;
$(document).ready(function()
{                  
  getLocation();  
});


function getLocation() {
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
 }
} 
  


function showPosition(position) {
   
  var x = position.coords.longitude;
  var y = position.coords.latitude;
 url = "https://fcc-weather-api.glitch.me/api/current?lat=" + y.toFixed(2) + "&lon=" + x.toFixed(2); 
  $.getJSON(url, function(data){
   console.log(data); document.getElementById("weatherIcon").src=data.weather[0].icon;
   $("#myLocation").html("Location: " + data.name + "," + data.sys.country); 
   $("#temperature").html(Math.round(data.main.temp) + " °C");
    
    temp = Math.floor(data.main.temp);
   
    $("#descrip").html("Weather Condition: " + capitalizeFirstLetter(data.weather[0].description));
    
    $("#humidity").html("Humidity: " + data.main.humidity + "%");
    
    getBackgroundImage();
  });
  
  
    
  

}



function getBackgroundImage(){

  if(temp >= 20){
   document.body.style.backgroundImage = "url('http://www.annemckinnell.com/blog/wp-content/uploads/2011/07/montana_20110622__MG_5863.jpg')";
 }
  
  else if(temp >= 0){
    document.body.style.backgroundImage = "url('https://s3.amazonaws.com/aphs.worldnomads.com/homeless_harry/32504/IMAG0373.jpg')";
  }
  
  else if(temp < 0){
    document.body.style.backgroundImage = "url('http://www.lehnhoffslandscaping.com/wp-content/uploads/2015/09/snow-covered-trees-in-a-winter-landscape.jpg')";
  }
}




 

   function conTemp(){
     if(tempRecord === 1){
       tempRecord = 0;
       tempF = (9/5) * temp + 32;
       $("#temperature").html(Math.round(tempF) + " °F");
       $("#convert").html("Celsius");
     }
     else{
       tempRecord = 1; 
       $("#temperature").html(Math.round(temp) + " °C");
       $("#convert").html("Fahrenheit");
     }
   }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}