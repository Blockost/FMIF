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
        'ColladaLoader': {deps: ['_THREE'], exports: 'THREE'},
        'Animation': {deps: ['_THREE'], exports: 'THREE'},
        'AnimationHandler': {deps: ['_THREE'], exports: 'THREE'},
        'KeyFrameAnimation': {deps: ['_THREE'], exports: 'THREE'},
        'MorpAnimMesh': {deps: ['_THREE'], exports: 'THREE'},
        'MorphAnimation': {deps: ['_THREE'], exports: 'THREE'},
        'OBJLoader': {deps: ['_THREE'], exports: 'THREE'},
    },
    paths: {
        _THREE: '../../node_modules/three/three',
        PointerLockControls: '../../node_modules/three/examples/js/controls/PointerLockControls',
        ColladaLoader: '../../node_modules/three/examples/js/loaders/ColladaLoader',
        Animation: '../../node_modules/three/examples/js/loaders/collada/Animation',
        AnimationHandler: '../../node_modules/three/examples/js/loaders/collada/AnimationHandler',
        OBJLoader: '../../node_modules/three/examples/js/loaders/OBJLoader',
        KeyFrameAnimation: '../../node_modules/three/examples/js/loaders/collada/KeyFrameAnimation',
        MorpAnimMesh: '../../node_modules/three/examples/js/MorphAnimMesh',
        MorphAnimation: '../../node_modules/three/examples/js/MorphAnimation',
        socketIO: '../../node_modules/socket.io-client/socket.io',
        jquery: '../../node_modules/jquery/dist/jquery.min'
    }
});

// Start the app
requirejs(['pointerlockAPI', 'app'], (pointerLock, app) => {
    if (pointerLock.canLock()) {
        pointerLock.initLocker();
        app.init();
        app.animate();
    } else {
        pointerLock.printError();
    }
})
