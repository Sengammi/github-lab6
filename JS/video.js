const video = document.querySelector('.video'),
        prevBtnVid = document.querySelector('.video-controls_prev-video'),
        playBtnVid = document.querySelector('.video-controls_play-video'),
        nextBtnVid = document.querySelector('.video-controls_next-video'),
        playBtnSvgVid = document.querySelector('.video-play-or-stop'),
        progressVid = document.querySelector('.video-progress'),
        timeVid = document.querySelector('.video-controls_time')

const vid = ['Sakuga','Yoshitoshi Shinomiya Sakuga','Yutaka Nakamura']

let vidIndex = 1

function loadVid(vid){
    video.src = `./Video/${vid}.mp4`
}
loadVid(vid[vidIndex])

function playVid(){
    video.classList.add('play')
    playBtnSvgVid.src = './Svg/pause-circle.svg'
    video.play()
}

function pauseVid(){
    video.classList.remove('play')
    playBtnSvgVid.src = './Svg/play-circle.svg'
    video.pause()
}

playBtnVid.addEventListener('click', () => {
    const isPlaying = video.classList.contains('play')
    if (isPlaying){
        pauseVid()
    } else {
        playVid()
    }
})

video.addEventListener('click', () => {
    const isPlaying = video.classList.contains('play')
    if (isPlaying){
        pauseVid()
    } else {
        playVid()
    }
})

function nextVideo(){
    vidIndex++

    if (vidIndex > vid.length - 1){
        vidIndex = 0
    }

    loadVid(vid[vidIndex])
    playVid()
}
nextBtnVid.addEventListener('click', nextVideo)

function prevVideo(){
    vidIndex--

    if (vidIndex < 0){
        vidIndex = songs.length -1
    }

    loadVid(vid[vidIndex])
    playVid()
}

prevBtnVid.addEventListener('click', prevVideo)

function updateProgress(){
    if (video.currentTime===0){
        progressVid.value = 0
    } else {
        progressVid.value = (video.currentTime/video.duration) * 100
    }

    let minutes = Math.floor(video.currentTime/ 60)
    if (minutes<10){
        minutes = '0' + String(minutes)
    }
    let seconds= Math.floor(video.currentTime % 60)
    if (seconds<10) {
        seconds = '0' + String(seconds)
    }

    timeVid.innerHTML = `${minutes}:${seconds}`
}
video.addEventListener('timeupdate', updateProgress)

function setProgress(){
    video.currentTime = (progressVid.value * video.duration) / 100
}
progressVid.addEventListener('click', setProgress)

function endVideo(){
    video.currentTime = 0
    pauseVid()
}
video.addEventListener('ended', endVideo)