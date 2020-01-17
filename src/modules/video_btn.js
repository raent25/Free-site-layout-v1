var $video = document.getElementsByTagName("video")[0]
var $play = document.getElementById('video-btn')
$play.addEventListener('click', function() {
    if ($video.paused == true) {
        $video.play();
    } else {
        $video.pause();
    }
});