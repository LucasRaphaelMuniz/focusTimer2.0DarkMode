const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
const buttonFloresta = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonLareira = document.querySelector('.lareira')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const switchMode = document.querySelector('.switchMode')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudioChuva = document.getElementById('audioChuva')
const bgAudioCafeteria = document.getElementById('audioCafeteria')
const bgAudioLareira = document.getElementById('audioLareira')
const bgAudioFloresta = document.getElementById('audioFloresta')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let newMinutes
let volume = 0




buttonPlay.addEventListener('click', function(){
  play()
  countDown()
  pressButton()
})

buttonPause.addEventListener('click', function(){
  pause()
  hold()
  pressButton()
})

buttonStop.addEventListener('click', function(){
  stop()
  reset()
  pressButton()

})

buttonAddTime.addEventListener('click', function(){
  addTime()
  pressButton()
})

buttonRemoveTime.addEventListener('click', function(){
  removeTime()
  pressButton()
})

buttonFloresta.addEventListener('click', function(){
  pressButton()
  florestaOn()
  chuvaOff()
  lareiraOff()
  cafeteriaOff()
  bgAudioChuva.pause()
  bgAudioFloresta.play()
  bgAudioCafeteria.pause()
  bgAudioLareira.pause()
  bgAudioFloresta.volume = volume;
  if (volume === 1) {
    volume = 0.5;
    bgAudioFloresta.volume = volume;
    buttonFloresta.querySelector('circle').setAttribute('cx', 70);

  } else if (volume === 0.5) {
    volume = 0;
    bgAudioFloresta.volume = volume;
    buttonFloresta.querySelector('circle').setAttribute('cx', 32);
    florestaOff()    

  } else {
    volume = 1;
    bgAudioFloresta.volume = volume;
    buttonFloresta.querySelector('circle').setAttribute('cx', 120);
  }

})

buttonChuva.addEventListener('click', function(){
  pressButton()   
  florestaOff()
  chuvaOn()
  lareiraOff()
  cafeteriaOff()
  bgAudioFloresta.pause()
  bgAudioChuva.play()
  bgAudioCafeteria.pause()
  bgAudioLareira.pause()
  bgAudioChuva.volume = volume;
  if (volume === 1) {
    volume = 0.5;
    bgAudioChuva.volume = volume;
    buttonChuva.querySelector('circle').setAttribute('cx', 70);

  } else if (volume === 0.5) {
    volume = 0;
    bgAudioChuva.volume = volume;
    buttonChuva.querySelector('circle').setAttribute('cx', 32);
    chuvaOff()    

  } else {
    volume = 1;
    bgAudioChuva.volume = volume;
    buttonChuva.querySelector('circle').setAttribute('cx', 120);
  }

})

buttonCafeteria.addEventListener('click', function(){
  pressButton()
  florestaOff()
  chuvaOff()
  lareiraOff()
  cafeteriaOn()
  bgAudioFloresta.pause()
  bgAudioChuva.pause()
  bgAudioCafeteria.play()
  bgAudioLareira.pause() 
  if (volume === 1) {
    volume = 0.5;
    bgAudioCafeteria.volume = volume;
    buttonCafeteria.querySelector('circle').setAttribute('cx', 70);

  } else if (volume === 0.5) {
    volume = 0;
    bgAudioCafeteria.volume = volume;
    buttonCafeteria.querySelector('circle').setAttribute('cx', 32);
    cafeteriaOff()    

  } else {
    volume = 1;
    bgAudioCafeteria.volume = volume;
    buttonCafeteria.querySelector('circle').setAttribute('cx', 120);
  }


})

buttonLareira.addEventListener('click', function(){
  pressButton()
  florestaOff()
  chuvaOff()
  lareiraOn()
  cafeteriaOff()
  bgAudioFloresta.pause()
  bgAudioChuva.pause()
  bgAudioCafeteria.pause()
  bgAudioLareira.play()   
  if (volume === 1) {
    volume = 0.5;
    bgAudioLareira.volume = volume;
    buttonLareira.querySelector('circle').setAttribute('cx', 70);

  } else if (volume === 0.5) {
    volume = 0;
    bgAudioLareira.volume = volume;
    buttonLareira.querySelector('circle').setAttribute('cx', 32);
    lareiraOff()    

  } else {
    volume = 1;
    bgAudioLareira.volume = volume;
    buttonLareira.querySelector('circle').setAttribute('cx', 120);
  }

})

switchMode.addEventListener('click', function(){
  const html = document.documentElement
  html.classList.toggle("dark")
  chuvaOff()
  florestaOff()
  cafeteriaOff()
  lareiraOff()
})

function pauseAllSounds() {
  bgAudioFloresta.pause()
  bgAudioChuva.pause()
  bgAudioCafeteria.pause()
  bgAudioLareira.pause()
  florestaOff()
  chuvaOff()
  lareiraOff()
  cafeteriaOff()
}

function pressButton(){
  buttonPressAudio.play()
}

function kitchenTimerSound(){
  kitchenTimer.play()
}

function play() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  
}
function pause(){
  buttonPause.classList.add('hide')  
  buttonPlay.classList.remove('hide')
}

function stop(){
  buttonPause.classList.add('hide')  
  buttonPlay.classList.remove('hide')
}

function addTime(){
  minutes = minutes + 5
  updateDisplay(minutes, 0)
  console.log('add')
}

function removeTime(){
  minutes = minutes - 5
  updateDisplay(minutes, 0)
  console.log('remove')
}

function chuvaOff() {
  if (document.documentElement.classList.contains('dark')) {
    buttonChuva.querySelector('path:first-child').setAttribute('fill', '#29292E');
    buttonChuva.querySelector('path:nth-of-type(2)').setAttribute('fill', '#C4C4CC');
    buttonChuva.querySelector('rect').setAttribute('fill', '#C4C4CC');
    buttonChuva.querySelector('circle').setAttribute('fill', '#C4C4CC');
  } else {
    buttonChuva.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
    buttonChuva.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
    buttonChuva.querySelector('rect').setAttribute('fill', '#323238');
    buttonChuva.querySelector('circle').setAttribute('fill', '#323238');
  }
}

function florestaOff() {
  if (document.documentElement.classList.contains('dark')) {
    buttonFloresta.querySelector('path:first-child').setAttribute('fill', '#29292E');
    buttonFloresta.querySelector('path:nth-of-type(2)').setAttribute('fill', '#C4C4CC');
    buttonFloresta.querySelector('rect').setAttribute('fill', '#C4C4CC');
    buttonFloresta.querySelector('circle').setAttribute('fill', '#C4C4CC');
  } else {
    buttonFloresta.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
    buttonFloresta.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
    buttonFloresta.querySelector('rect').setAttribute('fill', '#323238');
    buttonFloresta.querySelector('circle').setAttribute('fill', '#323238');    
  }
}

function cafeteriaOff() {
  
  if (document.documentElement.classList.contains('dark')) {
    buttonCafeteria.querySelector('path:first-child').setAttribute('fill', '#29292E');
    buttonCafeteria.querySelector('path:nth-of-type(2)').setAttribute('fill', '#C4C4CC');
    buttonCafeteria.querySelector('rect').setAttribute('fill', '#C4C4CC');
    buttonCafeteria.querySelector('circle').setAttribute('fill', '#C4C4CC');
  } else {
    buttonCafeteria.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
    buttonCafeteria.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
    buttonCafeteria.querySelector('rect').setAttribute('fill', '#323238');
    buttonCafeteria.querySelector('circle').setAttribute('fill', '#323238');
  }
}

function lareiraOff() {
  if (document.documentElement.classList.contains('dark')) {
    buttonLareira.querySelector('path:first-child').setAttribute('fill', '#29292E');
    buttonLareira.querySelector('path:nth-of-type(2)').setAttribute('fill', '#C4C4CC');
    buttonLareira.querySelector('rect').setAttribute('fill', '#C4C4CC');
    buttonLareira.querySelector('circle').setAttribute('fill', '#C4C4CC');
  } else {
    buttonLareira.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
    buttonLareira.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
    buttonLareira.querySelector('rect').setAttribute('fill', '#323238');
    buttonLareira.querySelector('circle').setAttribute('fill', '#323238');
  }
}

function florestaOn() {
  buttonFloresta.querySelector('rect').setAttribute('fill', '#FFFFFF');
  buttonFloresta.querySelector('circle').setAttribute('fill', '#FFFFFF');
  if (document.documentElement.classList.contains('dark')) {
    buttonFloresta.querySelector('path:first-child').setAttribute('fill', '#0A3442');
    buttonFloresta.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
  } else {
    buttonFloresta.querySelector('path:first-child').setAttribute('fill', '#02799D');
    buttonFloresta.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
    }
}

function chuvaOn() {
  buttonChuva.querySelector('rect').setAttribute('fill', '#FFFFFF');
  buttonChuva.querySelector('circle').setAttribute('fill', '#FFFFFF');
  if (document.documentElement.classList.contains('dark')) {
    buttonChuva.querySelector('path:first-child').setAttribute('fill', '#0A3442');
    buttonChuva.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
  } else {
    buttonChuva.querySelector('path:first-child').setAttribute('fill', '#02799D');
    buttonChuva.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
    }
}

function cafeteriaOn() {
  buttonCafeteria.querySelector('rect').setAttribute('fill', '#FFFFFF');
  buttonCafeteria.querySelector('circle').setAttribute('fill', '#FFFFFF');
  if (document.documentElement.classList.contains('dark')) {
    buttonCafeteria.querySelector('path:first-child').setAttribute('fill', '#0A3442');
    buttonCafeteria.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
  } else {
    buttonCafeteria.querySelector('path:first-child').setAttribute('fill', '#02799D');
    buttonCafeteria.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
    }
}

function lareiraOn() {
  buttonLareira.querySelector('rect').setAttribute('fill', '#FFFFFF');
  buttonLareira.querySelector('circle').setAttribute('fill', '#FFFFFF');
  if (document.documentElement.classList.contains('dark')) {
    buttonLareira.querySelector('path:first-child').setAttribute('fill', '#0A3442');
    buttonLareira.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
  } else {
    buttonLareira.querySelector('path:first-child').setAttribute('fill', '#02799D');
    buttonLareira.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
    }
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if(isFinished) {
      reset()
      kitchenTimerSound()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))
    countDown()    
  }, 1000)
}

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)  
  }
