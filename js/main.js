/**
 * Created by aghassaei on 7/9/15.
 */

require.config({

    baseUrl: 'js',

    paths: {
        text: '../dependencies/require/text',
        bin: '../dependencies/require/bin',

        jquery: '../dependencies/jquery-2.1.3.min',
        underscore: '../dependencies/underscore',
        backbone: '../dependencies/backbone',
        flatUI: '../dependencies/flatUI/js/flat-ui',
        bootstrapSlider: '../dependencies/bootstrap-slider/bootstrap-slider',
        fileSaverLib: '../dependencies/loaders/FileSaver.min',
        codeMirror: '../dependencies/codemirror/codemirror',
        codeMirrorJS: '../dependencies/codemirror/javascript',

        //three
        three: '../dependencies/three',
        orbitControls: '../dependencies/OrbitControls',
        threeModel: 'three/ThreeModel',
        threeView: 'three/ThreeView',

        //plists
        plist: 'plists/PList',

        //models
        appState: 'models/AppState',
        fileSaver: 'models/FileSaver',

        //UI
        navbar: 'menus/Navbar',
        navViewMenu: 'menus/NavViewMenu',//view dropdown
        ribbon: 'menus/Ribbon',
        modalView: 'menus/ModalView',
        menuWrapper: 'menus/MenuWrapperView',
        menuParent: 'menus/MenuParentView',
        scriptView: 'menus/ScriptView',

        //hinge
        hinge: 'hinge/Hinge',
        hingeRender: 'hinge/HingeRender',

        //link
        link: 'link/Link',

        //linkage
        linkage: 'linkage/Linkage',
        globalLinkage: 'linkage/GlobalLinkage'

    },

    shim: {
        three: {
            exports: 'THREE'
        },
        orbitControls: {
            deps: ['three'],
            exports: 'THREE'
        },
        fileSaverLib: {
            exports: 'saveAs'
        },
        flatUI: {
            deps: ['jquery']
        },
        bootstrapSlider:{
            deps: ['jquery'],
            exports: '$'
        }
    }

});

//require.onError = function (err) {
//    console.log(err.requireType);
//    console.log(err.requireModules);
//    throw err;
//};

//init stuff
require(['appState', 'threeModel', 'threeView', 'flatUI', 'bootstrapSlider', 'menuWrapper', 'ribbon', 'navbar'],
    function(appState, three, ThreeView){

    new ThreeView({model:three});
});

