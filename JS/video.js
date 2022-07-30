const video = document.querySelector('.video'),
        prevBtnVid = document.querySelector('.video-controls_prev-video'),
        playBtnVid = document.querySelector('.video-controls_play-video'),
        nextBtnVid = document.querySelector('.video-controls_next-video'),
        playBtnSvgVid = document.querySelector('.video-play-or-stop'),
        progressVid = document.querySelector('.video-progress'),
        timeVid = document.querySelector('.video-controls_time')

function toggleVideoStatus(){
    if (video.paused){
        video.play()
    } else {
        video.pause()
    }
}

// playBtnVid.addEventListener('click', toggleVideoStatus)