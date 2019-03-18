$(document).ready(function(){
  getQuote();
  $("#newQuote").on("click",function(){
       getQuote();   
  });
  
  
  
  function getQuote(){
    
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
    $(".quote").html('" ' + data.quoteText + ' "');
    $(".author").html("- " + data.quoteAuthor);
    
  });
  
  }
});

  
  $("#tweet").on("click",function(){
    var tweetQuote= $(".quote").text() + " by -" + $(".author").text();
    window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
});