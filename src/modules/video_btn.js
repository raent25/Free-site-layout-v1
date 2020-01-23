var $video = document.getElementById('video')
var $play = document.getElementById('video-btn')
$play.addEventListener('click', function() {
    if ($video.paused == true) {
        console.log('test')
        $video.play()
    } else {
        $video.pause()
        console.log('test2')
    }
})