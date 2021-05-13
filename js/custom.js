var coverBG = document.getElementById("cover");
var cardBody = document.getElementById("imgCard");
var audio = document.getElementById("audio");

function clickMe() {
    cardBody.style.display = "block";

    coverBG.style.display = "none";
    if (clickMe() == true) {
        audio.attributes.autoplay = true;
    }

    
}

