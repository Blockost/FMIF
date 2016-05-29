/**
 * Created by blockost on 28/05/16.
 */

var snd_gunShot_WAV = new Audio("/static/game_design/sounds/Gun_Shot.wav");
var snd_gunShot_MP3 = new Audio("/static/game_design/sounds/Gun_Shot.mp3");

define(['camera', 'intersects', 'world'], (camera, intersects, world) => {

    var mouseActions = {
        fire: () => {
            try {
                if (!snd_gunShot_MP3.paused) {
                    mouseActions.resetAudioFile(snd_gunShot_MP3);
                }
                snd_gunShot_MP3.play();
            } catch (errMP3) {
                try {
                    if (!snd_gunShot_WAV.paused) {
                        mouseActions.resetAudioFile(snd_gunShot_WAV);
                    }
                    snd_gunShot_WAV.play();
                } catch (errWAV) {
                    console.log("Audio files MP3 and WAV not supported !");
                }
            }

            var arr_intersects = intersects.getBulletIntersections(world.objects);

            if (arr_intersects.length > 0) {
                for (var i = 0; i < arr_intersects.length; i++)
                    arr_intersects[i].object.material.color.setHex(0x000000);
            }

        },

        resetAudioFile: (audioFile) => {
            audioFile.pause();
            audioFile.currentTime = 0;
        },

        zoom: () => {
            camera.fov /= 2.0;
            camera.updateProjectionMatrix();
        },

        unzoom: () => {
            camera.fov *= 2.0;
            camera.updateProjectionMatrix();
        }
    };

    return mouseActions;

});