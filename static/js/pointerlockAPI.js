// From http://www.html5rocks.com/en/tutorials/pointerlock/intro/

var blocker = document.getElementById("blocker");
var container = document.getElementById("container");
var sight = document.getElementById("sight");

define(['mouseEvents', 'controls'], (mouseEvents, controls) => {
    // Create an object which will hold the logic of the pointerLock API

    var pointerLock = {
        canLock: () => {
            return ('pointerLockElement' in document ||
            'mozPointerLockElement' in document ||
            'webkitPointerLockElement' in document);
        },

        initLocker: () => {

            var element = document.body;
            var pointerlockchange = () => {
                if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
                    //console.log("PointerLock enabled");
                    controls.enabled = true;
                    blocker.style.visibility = "hidden";
                    container.style.visibility = "hidden";
                    sight.style.visibility = "visible";
                    window.addEventListener("mousedown", mouseEvents.onMouseDown, false);
                    window.addEventListener("mouseup", mouseEvents.onMouseUp, false);
                } else {
                    //console.log("PointerLock disabled");
                    blocker.style.visibility = "visible";
                    container.style.visibility = "visible";
                    sight.style.visibility = "hidden";
                    controls.enabled = false;
                    window.removeEventListener("mousedown", mouseEvents.onMouseDown);
                    window.removeEventListener("mouseup", mouseEvents.onMouseUp);
                }
            };

            var pointerlockerror = () => {
                container.style.display = '/!\\ PointerLock API ERROR /!\\';
            };

            // Hook pointer lock state change events
            document.addEventListener('pointerlockchange', pointerlockchange, false);
            document.addEventListener('mozpointerlockchange', pointerlockchange, false);
            document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

            document.addEventListener('pointerlockerror', pointerlockerror, false);
            document.addEventListener('mozpointerlockerror', pointerlockerror, false);
            document.addEventListener(`webkitpointerlockerror`, pointerlockerror, false);

            element.requestPointerLock =
                element.requestPointerLock ||
                element.mozRequestPointerLock ||
                element.webkitRequestPointerLock;


            blocker.addEventListener('click', () => {
                element.requestPointerLock()
            }, false);
        },

        printError: () => {
            alert('Your browser doesn\'t seem to support Pointer Lock API');
        }
    };

    return pointerLock;
});