$(document).ready(function(){
  // Our first step will involve taking the button presses from the user and storing them
  
  // Priliminary variables before we start our project
  var inputs = [""];
  
  var outputString;
  
  var operators1 = ["+","-","/","*"];
  
  var operators2 = ["."];
  
  var nums  = [0,1,2,3,4,5,6,7,8,9];
  
  
  
function getValue(input){
  // Do not do anything if decimal has been placed two times
  if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
       
  }
  
  else if(operators1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
  
  else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
  else if(nums.includes(Number(input))){
      inputs.push(input);
    }
  
  update();
}

  // This update function will be used to ensure that the screen of the calculator remains updated
function update(){
  outputString = inputs.join("");
  $("#instruct").html(outputString);
}

  // The getTotal function evaluates the current operations that we have on hold
function getTotal(){
  outputString = inputs.join("");
  $("#instruct").html(eval(outputString));
}

// If the button is clicked, find out which button was clicked and then make steps accordingly 
$("btn").on("click", function(){
      if(this.id === "AC"){
      inputs = [""];
      update();
    }

  else if(this.id === "CE"){
    inputs.pop();
    update();
  }

else if(this.id === "equal"){
  getTotal();
}

  // This else statement is used to confirm input has been placed correctly
else{
  if(inputs[inputs.length-1].indexOf("+", "-", "/","*",".") === -1){
    getValue(this.id); 
  }
  else{
    getValue(this.id);
  }
}
            
 });
});