var userInput = "";

$("#button").click(function(){
  userInput = document.getElementById('userInput').value;
  rand = Math.random() * 100;
  console.log(rand);
  $("header").remove();
  $("#inputArea").remove();
  makeWordSpan(userInput);
  if (rand < 33){
  earlyNight();
  }
  else if (rand > 33 && rand < 66){
  taseMeBro();
  }
  else if (rand > 66){
    beautyWords();
  }
});

makeWordSpan = function(userInput){
  $("main").append("<div id='wordDiv'><span class='slabtext'><span id='wordSpan'><h1>" + userInput + "</h1></span></span></div>")
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
    $("#wordSpan h1").addClass("earlyNight");
    $("body").css('background', "linear-gradient(to right, #1c2329 0%,#313d46 100%)");
    $("main").append("<span id='eNightDate'>" + $.now() + "</span>")
  })
}

beautyWords = function(){
  $("#wordSpan").addClass("beautyWords");
  $("#wordSpan h1").addClass("beautyWords");
  $("body").css('background', "linear-gradient(to left, #d7d5d5 0%,#ededed 100%)");
  $("#wordDiv").prepend("<img id='blockquote' src='http://typespiration.com/wp-content/themes/typespiration/images/quote.png'><br>");
  $('#wordDiv').css("margin-top","-100px");
}
