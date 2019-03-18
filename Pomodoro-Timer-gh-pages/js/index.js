

$("document").ready(function(){

  // Know which one you are currently dealing with
  var tomato = true;
  var sBreak = false;
  var lBreak = false;
  
  // Store custom times for each to individual liking
  
  var tomatoTime = 25;
  var sBreakTime = 5;
  var lBreakTime = 15;
  
  // Have a variable for stopping the time and have a variable for resetting the time
  
  var stopTime = false;
  var resetTime = false;
  
  // Check if someone is double pressing the start
  var startCheck = false;
  
  
  // Check which button is clicked and perform operations accordingly
  $("btn").on("click",function(){
    
     if(this.id === "start" && startCheck == false){
       startCheck = true;
       stopTime = false;
       startTimer();
     }
    
    // Change the mode to pomodoro break and display the pomodoro time
    else if(this.id === "pomodoro"){
      startCheck = false;
      tomato = true;
      sBreak = false;
      lBreak = false;
      $("#timer").html(tomatoTime + ":00");
    }
    
    
    // Change the mode to short break and display the short break time
    else if(this.id === "shortBreak"){
      startCheck = false;
      tomato = false;
      sBreak = true;
      lBreak = false;
      $("#timer").html(sBreakTime + ":00");
    }
    
    // Change the mode to longBreak and display the longBreak time
    else if(this.id === "longBreak"){
      startCheck = false;
      tomato = false;
      sBreak = false;
      lBreak = true;
      $("#timer").html(lBreakTime + ":00");
    }
    //Add minutes to the seisson time based on the mode
    
    else if(this.id === "addTime"){
      if(tomato){
        tomatoTime++;
         $("#timer").html(tomatoTime + ":00");
      }
      else if(sBreak){
        sBreakTime++;
        $("#timer").html(sBreakTime + ":00");
      }
      else if(lBreak){
        lBreakTime++;
        $("#timer").html(lBreakTime + ":00");
      }
    }
    
    // Check the seisson time that is being subtracted and make sure that the time does not go lower than 1 minute
    else if(this.id === "minusTime"){
      if(tomato && tomatoTime > 1){
         tomatoTime--;
         $("#timer").html(tomatoTime + ":00");
      }
      else if(sBreak && sBreakTime > 1){
        sBreakTime--;
        $("#timer").html(sBreakTime + ":00");
      }
      else if(lBreak && lBreakTime > 1){
        lBreakTime--;
        $("#timer").html(lBreakTime + ":00");
      }
    }
    
    // Stop the timer once the stop button has been pressed and display the time at which it was stopped
    else if(this.id === "stop"){
      startCheck = false;
      var currentTime = document.getElementById('timer').innerHTML;
       stopTime = true; 
      $("#timer").html(currentTime);
    }
    
    // If the reset button is pressed and stop the timer and go back to the original time based on whether the user is in pomodoro mode, short break mode, or long break mode
    else if(this.id === "reset"){
      startCheck = false;
      
      if(tomato){
         $("#timer").html(tomatoTime + ":00");
      }
      else if(sBreak){
        $("#timer").html(sBreakTime + ":00");
      }
      else if(lBreak){
        $("#timer").html(lBreakTime + ":00");
      }
      stopTime = true;
    }
    
    
    
    
  });
  
  
 
  // This function is used to start the timer
  
function startTimer() {
  //Decrement time
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var min = timeArray[0];
  var sec = checkSecond((timeArray[1] - 1));
  // Stop the timer when it reaches, alert the user and run the alarm sound
  if(min == 0 && sec == 0){
    stopTime = true;
    $("#timer").html("0:00");
    setTimeout(function(){
      var alarmSound = new Audio("http://knanthony.com/showcase/pomodorotimer/bell.wav");
    alarmSound.play();
    setTimeout(function(){
      alert("Your seisson has been completed. Please begin another seisson");
    },300);
      
    },300)
    
  }
  
  if(sec==59){min=min-1}
  if(stopTime === false){
  document.getElementById('timer').innerHTML =
    min + ":" + sec;
   
    setTimeout(startTimer, 1000);
  }
  
}

  // Ensure that the second count is working correctly
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
  } 
  if (sec < 0) 
  {
    sec = "59"
  
  }
  return sec;
}
  
});
