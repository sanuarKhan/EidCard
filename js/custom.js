var coverBG = document.getElementById("cover");
var cardBody = document.getElementById("imgCard");
var video = document.getElementById("bgVideo");

function clickMe() {
    cardBody.style.display = "block";
    coverBG.style.display = "none";
    
    if (video.paused) {
    video.play();

  } else {
    video.pause();
  }


    
}

