var userInput = "";

$("#button").click(function(){
  userInput = document.getElementById('userInput').value;
  console.log(userInput);
  $("header").remove();
  $("#inputArea").remove();
  makeWordSpan(userInput);
})

makeWordSpan = function(userInput){
  $("main").append("<div id='wordSpan'>" + userInput + "</div>")
}
