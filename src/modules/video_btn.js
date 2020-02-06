var $video = document.getElementById('video')
var $play = document.getElementById('video-btn')
$play.addEventListener('click', function() {
    if ($video.paused == true) {
        $video.play()
        $play.innerHTML = '<img src="img/pause.svg" class="video-controler__img" alt="">'
    } else {
        $video.pause()
        $play.innerHTML = '<img src="img/play.svg" class="video-controler__img" alt="">'
    }
})