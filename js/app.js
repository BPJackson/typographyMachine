var userInput = "";

$("#button").click(function(){
  userInput = document.getElementById('userInput').value;
  rand = Math.random() * 100;
  console.log(rand);
  $("header").remove();
  $("#inputArea").remove();
  makeWordSpan(userInput);
  if (rand < 50){
  earlyNight();
  }
  else if (rand > 50){
  taseMeBro();
  }
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

earlyNight = function(){
  $(document).ready(function(){
    $("#wordSpan").addClass("earlyNight");
    $("#wordSpan h1").addClass("taseBro");
    $("body").css('background', "linear-gradient(to right, #1c2329 0%,#313d46 100%)");
    $("main").append("<span id='eNightDate'>" + $.now() + "</span>")
  })
}
