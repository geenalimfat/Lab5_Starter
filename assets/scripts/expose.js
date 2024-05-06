// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //getting horn type to change to appropriate picture and sound
  const hornType= document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img"); 
  const audio = document.getElementsByClassName("hidden")[0]; 

  //adjusting the volume level
  const volumeControl = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");

  //add functionality to play button
  const playButton = document.querySelector("button");

  //Event Listeners
  hornType.addEventListener("change", updateHorn);
  volumeControl.addEventListener("input", updateVolume);
  playButton.addEventListener("click", playSound)

  function updateHorn(){
    let selectedHorn = hornType.value;
    if (selectedHorn === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (selectedHorn === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (selectedHorn === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  }

  function updateVolume(){
    let volume = volumeControl.value;
    if (volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volume / 100; //value between 0-1
  }

  function playSound(){
    audio.play();
    if (hornType.value === "party-horn"){ //shoots confetti on screen if party-horn
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }

  }
}