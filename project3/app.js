var main = function() {
    var state;
    var volume = 1;
    var muted = false;

    $('#play').click(function(){
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });

    $('#pause').click(function(){
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

    $('#mute').click(function(){
        $('#message').text("Track muted");
        $('#player').prop('muted', true);
        muted = true;
    });

    $('#unmute').click(function(){
        $('#message').text("Track unmuted");
        $('#player').prop('muted', false);
        muted = false;
    });

    $('#stop').click(function(){
        $('#message').text("Track stopped");
        $('#player').trigger("pause");
        $('#player').prop('currentTime', 0);
    });

    $('#volUp').click(function(){
        if (volume < 1) {
            volume += 0.1;
            if (volume > 1) {
                volume = 1;
            }
            $('#player').prop('volume', volume);
            $('#message').text("Volume increased");
        }
    });

    $('#volDown').click(function(){
        if (volume > 0) {
            volume -= 0.1;
            if (volume < 0) {
                volume = 0;
            }
            $('#player').prop('volume', volume);
            $('#message').text("Volume decreased");
        }
    });

    $('#toggleMute').click(function(){
        muted = !muted;
        $('#player').prop('muted', muted);
        if (muted) {
            $('#message').text("Track muted");
        } else {
            $('#message').text("Track unmuted");
        }
    });

}

$(document).ready(main);
