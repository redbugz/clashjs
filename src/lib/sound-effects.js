module.exports.lasers = {
  laser0: new Audio('static/sounds/lasers/laser0.mp3'),
  laser1:  new Audio('static/sounds/lasers/laser1.mp3'),
  laser2: new Audio('static/sounds/lasers/laser2.mp3'),
  laser3: new Audio('static/sounds/lasers/laser3.mp3'),
  laser4: new Audio('static/sounds/lasers/laser4.mp3'),
  laser5:  new Audio('static/sounds/lasers/laser5.mp3'),
  laser6:  new Audio('static/sounds/lasers/laser6.mp3'),
  laser7:  new Audio('static/sounds/lasers/laser7.mp3'),
  laser8:  new Audio('static/sounds/lasers/laser8.mp3')
};

module.exports.explosions = {
  explode0:  new Audio('static/sounds/explosions/explode0.wav'),
  explode1:  new Audio('static/sounds/explosions/explode1.wav'),
  explode2:  new Audio('static/sounds/explosions/explode2.wav')
};
this.explosions.explode0.volume = 0.4
this.explosions.explode1.volume = 0.4
this.explosions.explode2.volume = 1

module.exports.streak = {
  firstBlood:  new Audio('static/sounds/streak/first-blood.mp3'),
  doubleKill: new Audio('static/sounds/streak/double-kill.mp3'),
  tripleKill:  new Audio('static/sounds/streak/triple-kill.mp3'),
  monsterKill:  new Audio('static/sounds/streak/monster-kill.mp3'),
  killingSpree: new Audio('static/sounds/streak/killing-spree.mp3'),
  dominating:  new Audio('static/sounds/streak/dominating.mp3'),
  rampage: new Audio('static/sounds/streak/rampage.mp3'),
  ownage:  new Audio('static/sounds/streak/ownage.mp3')
};

module.exports.music = {
  theme0:  new Audio('static/sounds/music/flight.ogg'),
  theme1:  new Audio('static/sounds/music/action.ogg'),
};

module.exports.soundsOn = false

module.exports.enableSounds = () => this.soundsOn = true
module.exports.disableSounds = () => this.soundsOn = false

module.exports.playSound = async sound => {
  if (!this.soundsOn) {
    console.log('sounds off, skipping', sound.src)
    return
  }
  try {
    await sound.play()
    console.log('played sound', sound.src)
  } catch(err) {
    console.error('error playing sound', err, sound.src)
  }
}

module.exports.musicOn = false
module.exports.musicVolume = 0.4

const themeLoop = [
  this.music.theme0,
  this.music.theme0,
  this.music.theme1,
  this.music.theme1,
  this.music.theme0,
  this.music.theme1,
]
let themeIndex = 0
module.exports.currentMusic = themeLoop[themeIndex]

module.exports.playMusic = async () => {
  try {
    // console.log('playMusic', themeIndex, this.currentMusic.src)
    this.musicOn = true
    this.currentMusic.volume = this.musicVolume
    await this.currentMusic.play()
    console.log('playing music', themeIndex, this.currentMusic.src)
    this.currentMusic.addEventListener('ended', (evt) => {
      // console.log('ended', this.currentMusic, evt)
      // this.currentMusic.currentTime = 0
      // console.log('reset', this.currentMusic.currentTime, this.currentMusic.ended)
      themeIndex++
      if (themeIndex >= themeLoop.length) themeIndex = 0
      // console.log('new music', themeIndex)
      this.currentMusic = themeLoop[themeIndex]
      setImmediate(this.playMusic)
    }, {once: true})
  } catch(err) {
    console.error('error playing music', err)
  }
  
}

module.exports.stopMusic = () => {
  this.currentMusic.pause()
  this.musicOn = false
  console.log('pausing music', this.currentMusic.src, themeIndex)
}