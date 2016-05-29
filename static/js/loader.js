/**
 * Created by blockost on 17/05/16.
 */

// Configure requirejs path
requirejs.config({
    baseUrl: 'static/js/',
    shim: {
        // Use shim to make non-requirejs libraries  exportable
        '_THREE': {exports: 'THREE'},
        'PointerLockControls': {deps: ['_THREE'], exports: 'THREE'},
    },
    paths: {
        _THREE: '../../node_modules/three/three.min',
        PointerLockControls: '../../node_modules/three/examples/js/controls/PointerLockControls',
        socketIO: '../../node_modules/socket.io/node_modules/socket.io-client/socket.io'
    }
});

// Start the app
requirejs(['lib/pointerlockAPI', 'app'], (pointerLock, app) => {
    if (pointerLock.canLock()) {
        pointerLock.initLocker();
        app.init();
        app.animate();
    } else {
        pointerLock.printError();
    }
});
