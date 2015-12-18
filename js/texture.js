function chooseTexture(){
  rand = Math.round(Math.random()*(6-1)+1);
  console.log("Texture rand is " +rand)
  if (rand == 1){
    rust1();
  }
  if (rand == 2){
    rust2();
  }
  if (rand == 3){
    chalkStars();
  }
  if (rand == 4){
    starry();
  }
  if (rand == 5){
    embrace();
  }
  if (rand == 6){
    rolledInk();
  }

}

function rust1(){
  console.log("texture applied")
  $("body").css("background-image", "url(images/texture/rust1.png)")
}
function rust2(){
  console.log("texture applied")
  $("body").css("background-image", "url(images/texture/rust2.png)")
}

function chalkStars(){
  console.log("texture applied")
  $("body").css("background-image", "url(images/texture/chalkStars.png)")
  $("body").css("background-blend-mode", "screen")
}

function starry(){
  console.log("texture applied")
  $("body").css("background-image", "url(images/texture/starry.png)")
  $("body").css("background-blend-mode", "screen")
}


function embrace(){
  console.log("texture applied")
  $("body").css("background-image", "url(images/texture/embrace1.png)")
}

function rolledInk(){
  console.log("texture applied")
  $("body").css("background-image", "url(images/texture/rolledInk.png)")
}
