var userInput = "";

$("#button").click(function(){
  userInput = document.getElementById('userInput').value;
  $("header").remove();
  $("#inputArea").remove();
  makeWordSpan(userInput);
  taseMeBro();
});

makeWordSpan = function(userInput){
  $("main").append("<div id='wordDiv'><span id='wordSpan'><h1>" + userInput + "</h1></span></div>")
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
  $(document).ready(function(){
  $("#wordSpan").addClass("taseBro");
  $("#wordSpan h1").addClass("taseBro");
  $("body").css('background', "linear-gradient(to right, #126bbf 0%,#167cdd 100%)");
  $("body").css('color', "white");

  })
}
