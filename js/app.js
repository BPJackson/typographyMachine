var userInput = "";

// $("#button").click(function(){
//   userInput = document.getElementById('userInput').value;
//   rand = Math.random() * 100;
//   console.log(rand);
//   $("header").remove();
//   $("#inputArea").remove();
//   makeWordSpan(userInput);
// });

$(document).on("click", "#button", function(){
  userInput = document.getElementById('userInput').value;
  $("header").remove();
  $("#inputArea").remove();
  style();
})

function style(){
  makeWordSpan(userInput);
  tomKendry();
  //   rand = Math.random() * 100;
  // if (rand < 25){
  //   earlyNight();
  // }
  // else if (rand > 25 && rand < 50){
  //   taseMeBro();
  // }
  // else if (rand > 50 && rand < 75){
  //   flowers();
  // }
  // else if (rand > 75){
  //   walt();
  // }
  if (userInput.length < 10){
    jQuery(".fit").fitText(.6);
  }
  else{
    jQuery(".fit").fitText();
  }
}

makeWordSpan = function(userInput){
  $("main").append("<div id='wordDiv'><span id='wordSpan'><h1 class=fit>" + userInput + "</h1></span></div>")
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

$("#shuffleButton").mouseover(function(){
  $(this).attr('src', 'images/shuffleIcon-neg.png');
});

$("#shuffleButton").mouseout(function(){
  $(this).attr('src', 'images/shuffleIcon.png');
});

$("#shuffleButton").click(function(){
  $("#wordDiv").remove();
  $("main .background").remove();
  $("body").css("background", "none")
  style();
})


taseMeBro = function(){
  $(document).ready(function(){
  $("#wordSpan").addClass("taseBro");
  $("body").css('background', "linear-gradient(to right, #126bbf 0%,#167cdd 100%)");
  $("body").css('color', "white");
  })
}

earlyNight = function(){
  $(document).ready(function(){
    $("#wordSpan").addClass("earlyNight");
    $("body").css('background', "linear-gradient(to right, #1c2329 0%,#313d46 100%)");
    $("main").append("<span class=background id='eNightDate'>" + $.now() + "</span>")
  })
}

beautyWords = function(){
  $(document).ready(function(){
  $("#wordSpan").addClass("beautyWords");
  $("body").css('background', "linear-gradient(to left, #d7d5d5 0%,#ededed 100%)");
  $("#wordDiv").prepend("<img id='blockquote' src='http://typespiration.com/wp-content/themes/typespiration/images/quote.png'><br>");
  // $('#wordDiv').css("margin-top","-100px");
})
}

flowers = function(){
  $("#wordSpan").addClass("flowers");
  $("main").prepend("<img id=flowers class=background src='images/flowers.jpg'>");
  $("#wordDiv").css("width", "80vw");
  $("#wordDiv").css("padding-left", "10vw");

}

walt = function(){
  $("#wordSpan").addClass("walt");
  $("body").css("background-color", "#153896");
  $("main").prepend("<img id=castle class=background src='images/disneyCastle.png'>");

}

tomKendry = function(){
  wordArr = [];
  $("#wordSpan").addClass("tomKendry");
  $("body").css("background-color", "skyblue");
  for (var i = 0; i < userInput.length; i++) {
    wordArr.push(userInput[i]);
  }
  console.log(wordArr)
  $("#wordSpan").remove();
  $("#wordDiv").append("<span id=wordSpan><h1 id=headline class=fit>");
  for (var i = 0; i < wordArr.length; i++) {
    if (wordArr[i] == " "){
      $("#headline").append("<span class=space>" + wordArr[i] + "</span>")
    }
    else{
      $("#headline").append("<span class=tomKendry>" + wordArr[i] + "</span>")
    }
  }
  $("#wordDiv").append("</span></h1>");
}
