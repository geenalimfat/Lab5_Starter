// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const pressToTalkButton = document.getElementById('press-to-talk');
  const smilingFace = document.getElementById('smiling-face');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase();
      const bname = b.name.toUpperCase();
      if (aname < bname) {
        return -1;
      } else if (aname == bname) {
        return 0;
      } else {
        return 1;
      }
    });
    voiceSelect.innerHTML = '';
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  function toggleFace(speaking) {
    if (speaking) {
      smilingFace.src = 'assets/images/smiling-open.png';
    } else {
      smilingFace.src = 'assets/images/smiling.png';
    }
  }

  pressToTalkButton.addEventListener('click', () => {
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    if (textToSpeak.value !== "") {
      const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
      const selectedOption = voiceSelect.selectedOptions[0].value;

      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
          break;
        }
      }

      utterThis.onstart = function (event) {
        console.log("SpeechSynthesisUtterance.onstart");
        toggleFace(true);
      };

      utterThis.onend = function (event) {
        console.log("SpeechSynthesisUtterance.onend");
        toggleFace(false);
      };

      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
        toggleFace(false); // Ensure the face returns to normal even on error
      };

      synth.speak(utterThis);
    }
  });

}