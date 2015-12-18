function chooseTexture(){
  rand = Math.round(Math.random()*(2-1)+1);
  console.log("Texture rand is " +rand)
  if (rand == 1){
    lightTexture();
  }
  if (rand == 2){
    darkTexture();

  }


}

function lightTexture(){
  console.log("texture applied")
  lightRand = Math.round(Math.random()*(7-1)+1);
  $("body").css("background-image", "url(images/texture/light" + lightRand + ".jpg)")
}


function darkTexture(){
  console.log("texture applied")
  darkRand = Math.round(Math.random()*(4-1)+1);
  $("body").css("background-image", "url(images/texture/dark" + darkRand + ".jpg)")
  // $("body").css("background-blend-mode", "screen")
}
