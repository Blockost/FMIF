var clickOnBlockerEventListener = function () {
    // Ask the browser to lock the pointer
    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    if (/Firefox/i.test(navigator.userAgent)) {
        var fullscreenchange = function () {
            if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
                //console.log("Fullscreen enabled");
                document.removeEventListener('fullscreenchange', fullscreenchange);
                document.removeEventListener('mozfullscreenchange', fullscreenchange);
                element.requestPointerLock();
                sight.style.visibility = "visible";
                sight.style.top = "50%";
                sight.style.left = "50%";
            }
        };
        document.addEventListener('fullscreenchange', fullscreenchange, false);
        document.addEventListener('mozfullscreenchange', fullscreenchange, false);
        element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
        element.requestFullscreen();
    } else {
        element.requestPointerLock();
    }
};
blocker.addEventListener('click', clickOnBlockerEventListener, false);


/******** LOADING JSON OBJECTS ********/

// instantiate a loader
var loader = new THREE.JSONLoader();

// load a resource
loader.load(
    // resource URL
    "/static/game_design/models/animated/animals/cow.js",
    // Function when resource is loaded
    function (geometry, materials) {
        var material = new THREE.MeshFaceMaterial(materials);
        var object = new THREE.Mesh(geometry, material);
        scene.add(object);
        //objects.push(object);
    }
);


// ??? Je ne sais pas ce que ça fait, sérieux (23/01/16) !
/*geometry = new THREE.Geometry();
 var vector3 = new THREE.Vector3();
 geometry.vertices.push(vector3.copy(controls.getObject().position));
 geometry.vertices.push(new THREE.Vector3(0,0,-100));

 material = new THREE.LineBasicMaterial({color: 0x0000ff});
 var line = new THREE.Line(geometry, material);
 scene.add(line);*/