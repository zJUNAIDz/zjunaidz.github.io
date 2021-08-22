'use strict';
// Array of songs
const songs = [
 {
  name: 'Chill Noons',
  author: 'KRONO',
  image: 'images/image0.gif',
  path: 'songs/0.mp3'
  },
 {
  name: 'Eternal Youth',
  author: 'RUDE',
  image: 'images/image1.gif',
  path: 'songs/1.mp3'
  },
 {
  name: 'Immune system',
  author: '---',
  image: 'images/image2.gif',
  path: 'songs/2.wav'
  },
 {
  name: '',
  author: '',
  image: '',
  path: ''
  }
  ];

//Getting all elements from html
let audio = document.getElementById('audio');
let playBtn = document.getElementById('play-button');
let prevBtn = document.querySelector('.fa-step-backward');
let nextBtn = document.querySelector('.fa-step-forward');
let image = document.querySelector('.img');
let trackName = document.querySelector('.track-name');
let trackAuthor = document.querySelector('.track-author');
let slider = document.querySelector('#track');
let currTime = document.querySelector('#curr_time');
let totalTime = document.querySelector('#total_time');
let isPlaying = false;
let trackIndex = 0;
// writing functions for every events when we click control buttons.
//update songs info from songs array.
function updateInfo() {
 trackName.innerHTML = songs[trackIndex].name;
 trackAuthor.innerHTML = songs[trackIndex].author;
 image.src = songs[trackIndex].image;
 audio.src = songs[trackIndex].path;
}
updateInfo();

function seekUpdate() {
 setInterval(function() {
  slider.value = Math.floor(audio.currentTime) * (100/Math.floor(audio.duration)) ;
  
 }, 1000)
}
function seeker() {
let seek = audio.duration * (slider.value / 100);
 audio.currentTime = seek;
}
function updateTime() {
 //no name in my mind for this nested function.
 function phew() {
  let curMin = Math.floor(audio.currentTime / 60);
  let curSec = Math.floor(audio.currentTime - curMin * 60);
  let totalMin = Math.floor(audio.duration / 60);
  let totalSec = Math.floor(audio.duration - totalMin * 60);
  (curMin <= 9) ? curMin = "0" + curMin: curMin;
  (curSec <= 9) ? curSec = '0' + curSec: curSec;
  (totalMin <= 9) ? totalMin = '0' + totalMin: totalMin;
  (totalSec <= 9) ? totalSec = '0' + totalSec: totalSec;

  currTime.textContent = curMin + ':' + curSec;
  totalTime.textContent = totalMin + ':' + totalSec;
 }
 setInterval(
  phew, 1000);
}
// play pause switch button
function playPause() {
 navigator.vibrate(40);
 if (!isPlaying) playTrack();
 else pauseTrack();
}

function playTrack() {
 isPlaying = true;
 audio.play();
 playBtn.className = 'fas btn fa-pause';
 updateTime();
 seekUpdate();
}

function pauseTrack() {
 isPlaying = false;
 audio.pause();
 playBtn.className = 'fas btn fa-play';
}

function forward() {
 navigator.vibrate(40);
 clearInterval(playPause);
 trackIndex < songs.length - 1 ? trackIndex++ : trackIndex = 0;
 updateInfo();
 playTrack();
 resetValues();

}

function backward() {
 navigator.vibrate(40);
 clearInterval(playPause);
 trackIndex > 0 ? trackIndex-- : trackIndex = songs.length - 1;
 updateInfo();
 playTrack();
 resetValues();
 seekUpdate();
}

function resetValues() {
 slider.value = 0;
 curr_time.innerHTML = '--:--';
 total_time.innerHTML = '--:--';
}

nextBtn.addEventListener('click', forward);
prevBtn.addEventListener('click', backward);
playBtn.addEventListener('click', playPause);