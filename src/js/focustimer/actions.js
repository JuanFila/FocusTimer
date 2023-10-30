import state from "./state.js";
import * as Timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning(){
   state.insRunning = document.documentElement.classList.toggle("running")
   Timer.countDown()
   sounds.buttonPressAudio.play()
}

export function reset(){
  state.insRunning = false
  document.documentElement.classList.remove("running")
  Timer.updateDisplay();

  sounds.buttonPressAudio.play()
}

export function set(){
   el.minutes.setAttribute('contenteditable', 'true')
   el.minutes.focus();
}

export function toggleMusic(){
   state.isMute = document.documentElement.classList.toggle("music-on")

   if(state.isMute) {
      sounds.bgAudio.play()
      return
   }

   sounds.bgAudio.pause()
}