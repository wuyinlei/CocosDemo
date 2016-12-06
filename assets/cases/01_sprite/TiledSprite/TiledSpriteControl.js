cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        
        speed: 100,
        
        progressBar: {
            default: null,
            type: cc.Node
        },
        
        ground: {
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
        this._updateWidth(this.progressBar, 500, dt);
        this._updateWidth(this.ground, 1000, dt);
     },
     
     _updateWidth: function(node,range,dt){
        var width = node.width;
        width = width < range ? width += dt * this.speed : 0;
        node.width = width;
     }
     
});
