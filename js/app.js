var userInput = "";

$("#button").click(function(){
  userInput = document.getElementById('userInput').value;
  console.log(userInput);
  $("header").remove();
  $("#inputArea").remove();
  makeWordSpan(userInput);
  taseMeBro();
});

makeWordSpan = function(userInput){
  $("main").append("<div id='wordDiv'><span id='wordSpan'>" + userInput + "</span></div>")
}

$("#resetButton").click(function(){
  location.reload();
});


$("#resetButton").mouseover(function(){
  $(this).attr('src', 'images/reset-icon-neg.png');
});

$("#resetButton").mouseout(function(){
  $(this).attr('src', 'images/reset-icon.png');
  });

taseMeBro = function(){
  var fontvar = 'arial';
  $(document).ready(function(){
  $("#wordSpan").addClass("raleway");
  $("body").css('background', "linear-gradient(to right, #1e5799 0%,#2989d8 100%)");
  $("body").css('color', "white");

  })
}
