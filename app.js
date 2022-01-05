const elements = {
  workIt: document.querySelector('#work-it'),
  harder: document.querySelector('#harder'),
  makeIt: document.querySelector('#make-it'),
  better: document.querySelector('#better'),
  doIt: document.querySelector('#do-it'),
  faster: document.querySelector('#faster'),
  makesUs: document.querySelector('#makes-us'),
  stronger: document.querySelector('#stronger'),
  moreThan: document.querySelector('#more-than'),
  ever: document.querySelector('#ever'),
  hour: document.querySelector('#hour'),
  after: document.querySelector('#after'),
  our: document.querySelector('#our'),
  workIs: document.querySelector('#work-is'),
  never: document.querySelector('#never'),
  over: document.querySelector('#over'),
  allSounds: document.querySelector('#allsounds'),
  randomSound: document.querySelector('#randomsound'),
  audioPlayer: document.querySelector('audio'),
  body: document.querySelector('body'),
  logo: document.querySelector('.logo')
}

// SOUNDBOARD BUTTONS
elements.workIt.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/work_it.wav'
  elements.audioPlayer.play()
})
elements.harder.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/harder.wav'
  elements.audioPlayer.play()
})
elements.makeIt.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/make_it.wav'
  elements.audioPlayer.play()
})
elements.better.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/better.wav'
  elements.audioPlayer.play()
})
elements.doIt.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/do_it.wav'
  elements.audioPlayer.play()
})
elements.faster.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/faster.wav'
  elements.audioPlayer.play()
})
elements.makesUs.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/makes_us.wav'
  elements.audioPlayer.play()
})
elements.stronger.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/stronger.wav'
  elements.audioPlayer.play()
})
elements.moreThan.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/more_than.wav'
  elements.audioPlayer.play()
})
elements.ever.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/ever.wav'
  elements.audioPlayer.play()
})
elements.hour.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/hour.wav'
  elements.audioPlayer.play()
})
elements.after.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/after.wav'
  elements.audioPlayer.play()
})
elements.our.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/our.wav'
  elements.audioPlayer.play()
})
elements.workIs.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/work_is.wav'
  elements.audioPlayer.play()
})
elements.never.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/never.wav'
  elements.audioPlayer.play()
})
elements.over.addEventListener('click', () => {
  elements.audioPlayer.src = './sounds/over.wav'
  elements.audioPlayer.play()
})



//PLAY ALL BUTTON
let counter = 0
let intervalId = 0

elements.allSounds.addEventListener('click', () => {
  // if (intervalId !==0)  {
  //   return
  // }
  counter++
  intervalId = setInterval(() => {
  if (counter === 1) {
    elements.audioPlayer.src = './sounds/work_it.wav'
    elements.audioPlayer.play()
      counter++
      elements.workIt.classList.add('button-playing')
      elements.body.classList.add('lavender')
      elements.logo.classList.add('pulsate')
      elements.allSounds.innerHTML = elements.workIt.innerHTML
      console.log('🎶')
  } 
  else if (counter === 2) {
    elements.audioPlayer.src = './sounds/harder.wav'
    elements.audioPlayer.play()
      counter++
      elements.harder.classList.add('button-playing')
      elements.workIt.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.harder.innerHTML
      console.log('🎵')
  } 
  else if (counter === 3) {
    elements.audioPlayer.src = './sounds/make_it.wav'
    elements.audioPlayer.play()
      counter++
      elements.makeIt.classList.add('button-playing')
      elements.harder.classList.remove('button-playing')
      elements.body.classList.remove('coral')
      elements.body.classList.add('lavender')
      elements.allSounds.innerHTML = elements.makeIt.innerHTML
      console.log('🎹')
  }
  else if (counter === 4) {
    elements.audioPlayer.src = './sounds/better.wav'
    elements.audioPlayer.play()
      counter++
      elements.better.classList.add('button-playing')
      elements.makeIt.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.better.innerHTML
      console.log('🎧')
  }
  else if (counter === 5) {
    elements.audioPlayer.src = './sounds/do_it.wav'
    elements.audioPlayer.play()
      counter++
      elements.doIt.classList.add('button-playing')
      elements.better.classList.remove('button-playing')
      elements.body.classList.remove('coral')
      elements.body.classList.add('lavender')
      elements.allSounds.innerHTML = elements.doIt.innerHTML
      console.log('🤘')
  }
  else if (counter === 6) {
    elements.audioPlayer.src = './sounds/faster.wav'
    elements.audioPlayer.play()
      counter++
      elements.faster.classList.add('button-playing')
      elements.doIt.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.faster.innerHTML
      console.log('🎵')
  }
  else if (counter === 7) {
    elements.audioPlayer.src = './sounds/makes_us.wav'
    elements.audioPlayer.play()
      counter++
      elements.makesUs.classList.add('button-playing')
      elements.faster.classList.remove('button-playing')
      elements.body.classList.remove('coral')
      elements.body.classList.add('lavender')
      elements.allSounds.innerHTML = elements.makesUs.innerHTML
      console.log('💃')
  }
  else if (counter === 8) {
    elements.audioPlayer.src = './sounds/stronger.wav'
    elements.audioPlayer.play()
      counter++
      elements.stronger.classList.add('button-playing')
      elements.makesUs.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.stronger.innerHTML
      console.log('🕺')
  }
  else if (counter === 9) {
    elements.audioPlayer.src = './sounds/more_than.wav'
    elements.audioPlayer.play()
      counter++
      elements.moreThan.classList.add('button-playing')
      elements.stronger.classList.remove('button-playing')
      elements.body.classList.remove('coral')
      elements.body.classList.add('lavender')
      elements.allSounds.innerHTML = elements.moreThan.innerHTML
      console.log('🎹')
  }
  else if (counter === 10) {
    elements.audioPlayer.src = './sounds/ever.wav'
    elements.audioPlayer.play()
      counter++
      elements.ever.classList.add('button-playing')
      elements.moreThan.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.ever.innerHTML
      console.log('🔊')
  }
  else if (counter === 11) {
    elements.audioPlayer.src = './sounds/hour.wav'
    elements.audioPlayer.play()
      counter++
      elements.hour.classList.add('button-playing')
      elements.ever.classList.remove('button-playing')
      elements.body.classList.remove('coral')
      elements.body.classList.add('lavender')
      elements.allSounds.innerHTML = elements.hour.innerHTML
      console.log('🎛')
  }
  else if (counter === 12) {
    elements.audioPlayer.src = './sounds/after.wav'
    elements.audioPlayer.play()
      counter++
      elements.after.classList.add('button-playing')
      elements.hour.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.after.innerHTML
      console.log('🌈')
  }
  else if (counter === 13) {
    elements.audioPlayer.src = './sounds/our.wav'
    elements.audioPlayer.play()
      counter++
      elements.our.classList.add('button-playing')
      elements.after.classList.remove('button-playing')
      elements.body.classList.remove('coral')
      elements.body.classList.add('lavender')
      elements.allSounds.innerHTML = elements.our.innerHTML
      console.log('🎶')
  }
  else if (counter === 14) {
    elements.audioPlayer.src = './sounds/work_is.wav'
    elements.audioPlayer.play()
      counter++
      elements.workIs.classList.add('button-playing')
      elements.our.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.workIs.innerHTML
      console.log('🤖')
  }
  else if (counter === 15) {
    elements.audioPlayer.src = './sounds/never.wav'
    elements.audioPlayer.play()
      counter++
      elements.never.classList.add('button-playing')
      elements.workIs.classList.remove('button-playing')
      elements.body.classList.remove('coral')
      elements.body.classList.add('lavender')
      elements.allSounds.innerHTML = elements.never.innerHTML
      console.log('🙌')
  }
  else if (counter === 16) {
    elements.audioPlayer.src = './sounds/over.wav'
    elements.audioPlayer.play()
      counter++
      elements.over.classList.add('button-playing')
      elements.never.classList.remove('button-playing')
      elements.body.classList.remove('lavender')
      elements.body.classList.add('coral')
      elements.allSounds.innerHTML = elements.over.innerHTML
      console.log('👾')
  }
  else if (counter === 17) {
    clearInterval(intervalId)
    elements.body.classList.remove('coral')
    elements.body.classList.add('body')
    elements.over.classList.remove('button-playing')
    elements.logo.classList.remove('pulsate')
    elements.allSounds.innerHTML = 'Around The World'
    counter = 0

}
  }, 500)
})

// RANDOM SOUND BUTTON
const randomSoundArray = [
  'work_it.wav', 'harder.wav', 'make_it.wav', 'better.wav',
  'do_it.wav', 'faster.wav', 'makes_us.wav', 'stronger.wav',
  'more_than.wav', 'ever.wav', 'hour.wav', 'after.wav',
  'our.wav', 'work_is.wav', 'never.wav', 'over.wav'
]
elements.randomSound.addEventListener('click', () => {
  randomIndex = Math.floor(Math.random() * randomSoundArray.length )
  elements.audioPlayer.src = './sounds/' + randomSoundArray[randomIndex]
  elements.audioPlayer.play()
  console.log("We're up all night to get lucky")
  return
})