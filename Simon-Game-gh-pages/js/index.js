$(document).ready(function(){
  

  
  // Sound Variables
  var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  
  // Game Variables
  var optionArray = ["red", "green", "yellow", "blue"];
  var count = 0;
  var series = [];
  var recording = [];
  var strictOn = false;

  
  
  
  // Start and Reset Function
  $("#start").click(function(){
    setTimeout(function(){
      $("#start").html("Reset");
    document.getElementById("red").style.opacity = "0.4";
    document.getElementById("green").style.opacity = "0.4";
    document.getElementById("yellow").style.opacity = "0.4";
    document.getElementById("blue").style.opacity = "0.4";
    series = [];
    recording = [];
    count = 0;
    countUpdate();
    computerTurn();
    },300);
    
  });
  
   
  // Count update and display function
  function countUpdate(){
    count++;
    if(count === 21){
      $("#count").html("00");
      alert("Good Job, you have completed the game. Please press reset to start over.");
      document.click();
    }
    if(count < 10){
      $("#count").html("0" + count)
    }
    else{
      $("#count").html(count);
    }
  }
  
  
  // Random Colour Selector for the game
  function computerTurn(){
   var randIndex =  Math.floor((Math.random() * 4));
    series.push(optionArray[randIndex]);
    displayCompTurn();
  }
  
  // Go through the random button array and pass data on to the function that will display the results
  function displayCompTurn(){
    $(".myBtns").prop('disabled', true);
    setTimeout(function(){
      for(var i = 0; i < series.length;i++){
       playButtons(series[i], i);
     }
    },600); 
    $(".myBtns").prop('disabled', false);
  }
  
  // This function highlights the corresponding element in the array, play the sound, and then set the button back to normal
  
 // Code Help given by znicholasbrown from the freeCodeCamp forum. Thanks goes to znicholasbrown for finding the
 // mistake in my code and teaching me more about the setTimeout() function in javascript.
  
 function playButtons(element, i){
    
  setTimeout( function () {
      if(element == "red"){
      redSound.play();
    }
    else if(element == "green"){
      greenSound.play();
    }
    else if(element == "yellow"){
      yellowSound.play();
    }
    else if(element == "blue"){
      blueSound.play();
    }
      console.log("Working");
      document.getElementById(element).style.opacity = "1";
      
    // Delay the change back in colour of the user buttons
    setTimeout(function(){
      document.getElementById(element).style.opacity = "0.4";
    },600);
    }, i * 650);
  
 }
  
   
 // This function checks all of the users button presses and starts the game over when the user makes a mistake 
   
  function userInput(){
    // Have a variable to check whether the user has made a mistake
    var checker = true;
    
    for(var x = 0;x < recording.length;x++){
      // When the user does make a mistake, check whether the user is in strict mode or not and take actions accordingly
      if(recording[x] !== series[x]){
        // Display wrong on the keyboard and make sure that events occur in a timely manner
        // Case when strict mode is on
        if(strictOn){
         $("#displayCorner").html("Wrong");
         setTimeout(function(){
           $("#displayCorner").html("");
         },800); 
         
         
         checker = false;
         setTimeout(function(){
           start.click();
         },1100); 
         
         
         
          
        }
        // Case when strict mode is off
        else{
           $("#displayCorner").html("Wrong");
         setTimeout(function(){
           $("#displayCorner").html("");
         },800); 
          
          checker = false;
          recording = [];
          setTimeout(function(){
          displayCompTurn();
          },1100); 
        }
      }
    }
    // If the user enters the correct pattern, move on to the next level
    if(checker && recording.length === series.length){
      // Have a wait period before you show the next pattern
      setTimeout(function(){
        recording = [];
      countUpdate();
      computerTurn();
      },1000);
      
      
    }
  }
  // records red button clicks and is an interactive button that changes opacity when user presses the button
  $("#red").click(function(){
    redSound.play();
    document.getElementById("red").style.opacity = "1.0";
    setTimeout(function(){
      document.getElementById("red").style.opacity = "0.4";
    },300);
    recording.push("red");
    userInput();
  });
  // records green button clicks and is an interactive button that changes opacity when user presses the button
  $("#green").click(function(){
    greenSound.play();
    document.getElementById("green").style.opacity = "1.0";
    setTimeout(function(){
      document.getElementById("green").style.opacity = "0.4";
    },300);
    recording.push("green");
    userInput();
  });
  
  // records yellow button clicks and is an interactive button that changes opacity when user presses the button
  $("#yellow").click(function(){
    yellowSound.play();
    document.getElementById("yellow").style.opacity = "1.0";
    setTimeout(function(){
      document.getElementById("yellow").style.opacity = "0.4";
    },300);
    recording.push("yellow");
    userInput();
  });
  
  // records blue button clicks and is an interactive button that changes opacity when user presses the button
  $("#blue").click(function(){
    blueSound.play();
    document.getElementById("blue").style.opacity = "1.0";
    setTimeout(function(){
      document.getElementById("blue").style.opacity = "0.4";
    },300);
    recording.push("blue");
    userInput();
  });
  
  // Strict function, changes mode to strict
  $("#strict").click(function(){
    if(strictOn === false){
      $("#strict").html("Strict OFF");
      strictOn = true;
    }
    else{
      $("#strict").html("Strict ON");
      strictOn = false;
    }
    
    start.click();
  });
  

});
