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
  lightRand = Math.round(Math.random()*(8-1)+1);
  $("body").css("background-image", "url(images/texture/light" + lightRand + ".png)")
}


function darkTexture(){
  console.log("texture applied")
  darkRand = Math.round(Math.random()*(5-1)+1);
  $("body").css("background-image", "url(images/texture/dark" + darkRand + ".png)")
  $("body").css("background-blend-mode", "screen")
}
