const playerButton = document.getElementById('play');
const audio = document.getElementById('audio')
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const trackName = document.getElementById('trackName');
let playSongFlag = false;
let progressLine = document.getElementById('progressNow');
let trackIndex = 0;
let randomPlay = false;
const trackMassive = [
    {
        name: 'Moby - Extreme Ways.mp3'
    },
    {
        name: 'ATL - Ящик.mp3'
    },
    {
        name: 'Billie Eilish - bad guy.mp3'
    },
    {
        name: 'The Rolling Stones - Paint It, Black.mp3'
    }

];

playerButton.addEventListener('click', ()=> {
    
    if (!playSongFlag) {
        playSong ()
        playSongFlag = !playSongFlag;
        playerButton.querySelector('img').src = 'img/pause.png';
    }
    else {
        audio.pause();
        playSongFlag = !playSongFlag;
        playerButton.querySelector('img').src = 'img/play.png';
    }
})

nextButton.addEventListener('click', ()=>{
    console.dir(audio)
    playNextSong ();
})
prevButton.addEventListener('click', ()=>{
    platPrevSong ();
})

audio.addEventListener('timeupdate', changeProgress)
function changeProgress () {
    
    let songDiration = audio.duration;
    let currentTimeSong = audio.currentTime;
    let persentPlaySong = 100*currentTimeSong/songDiration;
    if (currentTimeSong == songDiration) {
        playNextSong ()
        progressLine.style.width = 0;
    }
    progressLine.style.width = persentPlaySong + '%';
}
function playSong () {
    audio.src = 'audio/' + trackMassive[trackIndex].name;
    trackName.querySelector('p').innerHTML = trackMassive[trackIndex].name;
    audio.play();
}

function playNextSong () {
    trackIndex++;
    if (!randomPlay && trackIndex == trackMassive.length) {
        trackIndex = 0;
    }
    playSong ();
}

function platPrevSong () {
    trackIndex--;
    if (!randomPlay && trackIndex < 0) {
        trackIndex = trackMassive.length-1;
    }
    playSong ();
}