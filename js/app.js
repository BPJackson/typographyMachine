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
  makeWordSpan(userInput);
  flowers();
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
  //   beautyWords();
  // }
  jQuery(".fit").fitText();
})

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
    $("main").append("<span id='eNightDate'>" + $.now() + "</span>")
  })
}

beautyWords = function(){
  $("#wordSpan").addClass("beautyWords");
  $("body").css('background', "linear-gradient(to left, #d7d5d5 0%,#ededed 100%)");
  $("#wordDiv").prepend("<img id='blockquote' src='http://typespiration.com/wp-content/themes/typespiration/images/quote.png'><br>");
  $('#wordDiv').css("margin-top","-100px");
}

flowers = function(){
  $("#wordSpan").addClass("flowers");
  $("main").prepend("<img id=flowers src='images/flowers.jpg'>");
  $("#wordDiv").css("width", "80vw");
  $("#wordDiv").css("padding-left", "10vw");

}
