const player = document.querySelector('.audio-player'),
        playBtn = document.querySelector('.play-audio'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        audio = document.querySelector('.audio'),
        progressContainer = document.querySelector('.audio-progress-container'),
        progress = document.querySelector('.audio-progress'),
        author = document.querySelector('.audio-author'),
        title = document.querySelector('.audio-song'),
        playOrStop = document.querySelector('.audio-play-or-stop')


const authors = ['Gym Class Heroes, Adam Levine','Nathan Evans','Tom Odell']
const songs = ['Stereo Hearts','Wellerman (Sea Shanty)','Another Love']

let songIndex = 0

function loadSong(artist, song){
    author.innerHTML = artist
    title.innerHTML = song
    audio.src = `Audio/${artist} - ${song}.mp3`
}
loadSong(authors[songIndex] ,songs[songIndex])

function playSong(){
    player.classList.add('play')
    playOrStop.src = '/Svg/music-pause.svg'
    audio.play()
}

function pauseSong(){
    player.classList.remove('play')
    playOrStop.src = '/Svg/music-play.svg'
    audio.pause()
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying){
        pauseSong()
    } else {
        playSong()
    }
});

function nextSong(){
    songIndex++

    if (songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(authors[songIndex] ,songs[songIndex])
    playSong()
}
nextBtn.addEventListener('click', nextSong)

function prevSong(){
    songIndex--

    if (songIndex < 0){
        songIndex = songs.length -1
    }

    loadSong(authors[songIndex] ,songs[songIndex])
    playSong()
}

prevBtn.addEventListener('click', prevSong)

function updateProgress(e){
    const {duration, currentTime} = e.target
    const progressPercent = (currentTime/duration)*100
    progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)
