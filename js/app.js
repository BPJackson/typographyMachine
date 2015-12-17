var userInput = "";


$(document).on("click", "#button", function wordMagic(){
  userInput = document.getElementById('userInput').value;
  style();

})

function style(){
  $("header").remove();
  $("#inputArea").remove();
  makeWordSpan(userInput);
    rand = Math.random() * 100;
    selectStyle();
  if (userInput.length < 10){
    jQuery(".fit").fitText(.6);
  }
  else{
    jQuery(".fit").fitText();
  }
  rust();
}

function selectStyle(){
  if (rand < 12.5){
    earlyNight();
  }
  else if (rand > 12.5 && rand < 25){
    taseMeBro();
  }
  else if (rand > 25 && rand < 37.5){
    heavy();
  }
  else if (rand > 37.5 && rand < 50){
    flowers();
  }
  else if (rand > 50 && rand < 62.5){
    tomKendry();
  }
  else if (rand > 62.5 && rand < 75){
    hang();
  }
  else if (rand > 75 && rand < 87.5){
    flyer();
  }
  else if (rand > 87.5){
    walt();
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

$("#randoBlock").mouseover(function(){
  $(this).attr('src', 'images/randoBlock-neg.png');
});

$("#randoBlock").mouseout(function(){
  $(this).attr('src', 'images/randoBlock.png');
});

$("#shuffleButton").click(function(){
  $("#wordDiv").remove();
  $("main .background").remove();
  $("body").css("background", "none")
  $("#lightBlend").remove();
  if (rando == "yes"){
    $("#definitionDiv").remove();
    restyleUrban();
  }
  style();
  if (rando == "yes" && rand < 87.5){
    $("#wordDiv").css("top", "40%");
  }
  else{
    $("#definitionDiv").css("bottom", "5vw")
    $("#definitionDiv").css("width", "70vw")
  }
})


function taseMeBro(){
  $(document).ready(function(){
  $("#wordSpan").addClass("taseBro");
  $("#definitionDiv").addClass("taseBro");
  $("body").css('background', "linear-gradient(to right, #126bbf 0%,#167cdd 100%)");
  $("body").css('color', "white");
  })
}

function earlyNight(){
  $(document).ready(function(){
    $("#wordSpan").addClass("earlyNight");
    $("#definitionDiv").addClass("earlyNight");
    $("body").css('background', "linear-gradient(to right, #1c2329 0%,#313d46 100%)");
    $("main").append("<span class=background id='eNightDate'>" + $.now() + "</span>")
  })
}

function beautyWords(){
  $(document).ready(function(){
  $("#wordSpan").addClass("beautyWords");
  $("#definitionDiv").addClass("beautyWords");
  $("body").css('background', "linear-gradient(to left, #d7d5d5 0%,#ededed 100%)");
  $("#wordDiv").prepend("<img id='blockquote' src='http://typespiration.com/wp-content/themes/typespiration/images/quote.png'><br>");
  // $('#wordDiv').css("margin-top","-100px");
})
}

function flowers(){
  $("#wordSpan").addClass("flowers");
  $("#definitionDiv").addClass("flowers");
  $("main").prepend("<img id=flowers class=background src='images/flowers.jpg'>");
  $("#wordDiv").css("width", "80vw");
  $("#wordDiv").css("padding-left", "10vw");
  if (rando == "yes"){
    $("#definitionDiv").css("background-color", "rgba(255,255,255,.8)")
    $("#definitionDiv").css("padding-left", "20px")
    $("#definitionDiv").css("padding-right", "20px")
    $("#definitionDiv").css("border", "5px solid white")
  }
}

function walt(){
  $("#wordSpan").addClass("walt");
  $("#definitionDiv").addClass("walt");
  $("body").css("background-color", "#153896");
  $("main").prepend("<img id=castle class=background src='images/disneyCastle.png'>");

}

function tomKendry(){
  wordArr = [];
  $("#wordSpan").addClass("tomKendry");
  $("#definitionDiv").addClass("tomKendry");
  $("body").css("background-color", "skyblue");
  for (var i = 0; i < userInput.length; i++) {
    wordArr.push(userInput[i]);
  }
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

function heavy(){
  $("#wordSpan").addClass("heavy");
  $("#definitionDiv").addClass("heavy");
  $("body").css('background', "linear-gradient(to bottom, #ffffff 0%, #f4f4f4 70%, #e7e6e6 100%)");
  $("body").css('background-repeat', "no-repeat");

}

function hang(){
  $("#wordSpan").addClass("hang");
  $("#definitionDiv").addClass("hang");
  $("body").css('background-image', "radial-gradient(ellipse farthest-corner at 50% 65% , rgba(255,238,132,.5) 20%, #6e6e6e 60%, #222222 85%)");
  $("body").append("<div id=lightBlend></div>");
  $("#lightBlend").css('background-image', "radial-gradient(ellipse farthest-corner at 50% 65% , rgba(255,238,132,.2) 20%,  rgba(0,0,0,.0) 55%)");
}

function flyer(){
  $("#wordSpan").addClass("flyer");
  $("#definitionDiv").addClass("flyer");
  $("body").css("background-color", "purple");

}

var word = "";
var definition = "";
var example = "";
var author = "";
var rando = "no";

$(document).ready(function getWord(){
var getter = $.ajax({
url: "http://randomword.setgetgo.com/get.php",
method: "GET",
dataType: "jsonp"
});

getter.done(function(response){
  word = response["Word"];
  if (response.length > 10){
    getWord;
  }
  else{
    console.log(response);
    userInput = response["Word"];
    var getIt = $.ajax({
      url: "http://api.urbandictionary.com/v0/define?term=" + word,
      method: "GET",
      dataType: "jsonp"
    });
  }

  getIt.done(function(response){
    console.log("word is " + word);
    if (rando == "yes")
    {

    }
    else if (response["result_type"] == "no_results" || response["list"][0]["definition"].length > 110)
    {
      getWord();
    }
    else{
      userInput = word;
      definition = response["list"][0].definition;
      example = response["list"][0].example;
      author = response["list"][0].author;
      console.log("urban response is " + definition);
      console.log("urban example is " + example);
      console.log("by User: " + author);
    }
  });
});
});

function styleUrban(){
  rando = "yes";
  $("main").append("<div id=definitionDiv><p id=definitionP>"+definition+"</p><p id=exampleP>"+example+"</p><p id=authorP>"+author+"</p></div>");
    style();
    if (definition !== ""){
      if (rand < 87.5){
        $("#wordDiv").css("top", "40%");
        $("#castle").css("width", "30vw")
      }
    }
}

function restyleUrban(){
$("main").append("<div id=definitionDiv><p id=definitionP>"+definition+"</p><p id=exampleP>"+example+"</p><p id=authorP>"+author+"</p></div>");
}

$(document).on("click", "#randoBlock", function styleIt(){
  styleUrban();
});
