const startStopBtn = document.getElementById('startStpBtn') ;
const resetBtn = document.getElementById('resetBtn') ;

let seconds = 0 ;
let mins = 0 ;
let hours = 0 ;

let leadingSeconds = 0 ;
let leadingMins = 0 ;
let leadingHours = 0 ;

let timerInterval = null ;
let running = false ;

let stopWatch = () => {

  seconds++ ;

  if (seconds == 60 ) {
    mins ++ ;
    seconds = 0 ;
    if (mins == 60 ) {
      hours ++ ;
      mins = 0 ;
    }
  }  

  if (seconds<10) {
    leadingSeconds = "0" + seconds ;
  }  else {
    leadingSeconds = seconds ;
  }

  if (mins<10) {
    leadingMins = "0" + mins ;
  } else {
    leadingMins = mins ;
  }

  if (hours<10) {
    leadingHours = "0" + hours ;
  } else {
    leadingHours = hours ;
  }

  let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMins +":" + leadingSeconds ;

}

//window.setInterval(stopWatch, 1000) ;

startStopBtn.addEventListener('click', () => {
  if (running==false) { 
  timerInterval = setInterval(stopWatch, 1000) ;
  running = true ;

  document.getElementById('play').className = "fa-solid fa-pause" 
  document.getElementById('play').style.backgroundColor = "orange" ;

  }else {
    clearInterval(timerInterval) ;
    running = false ;

    document.getElementById('play').className = "fa-solid fa-play" 
    document.getElementById('play').style.backgroundColor = "green" ;

  }
} )


resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval) ;
  seconds = 0 ;
  mins = 0 ;
  hours = 0 ;
  leadingSeconds = 0 ;
  leadingMins = 0;
  leadingHours = 0 ;
  document.getElementById('timer').innerText = ("00:00:00") ;

  document.getElementById('play').className = "fa-solid fa-play" 
  document.getElementById('play').style.backgroundColor = "green" ;
  running = false ;
} )

//git test