cc.Class({
    extends: cc.Component,

    //定义的属性
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
        
        speed: 0.1,
        
        horizontal: {
            default: null,
            type: cc.Sprite
        },
        
        vertical: {
            default: null,
            type: cc.Sprite
        },
        
        radial_round: {
            default: null,
            type: cc.Sprite
        },
        
        radial_semicircle: {
            default: null,
            type: cc.Sprite
        },
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
        //update fill start
        this._updateFillStart(this.horizontal, dt);
        this._updateFillStart(this.vertical, dt);
        
        //update fill range
        this._updateFillRange(this.radial_round, 1, dt);
        this._updateFillRange(this.radial_semicircle, 0.5, dt);
     },
     
     //填充柱状
     _updateFillStart: function(sprite,dt){
         var fillStart = sprite.fillStart;
         fillStart = fillStart > 0 ? fillStart -= (dt * this.speed) : 1;
         sprite.fillStart = fillStart;
     },
     
     //填充圆形
     _updateFillRange: function(sprite,range,dt){
         var fillRange = sprite.fillRange;
         fillRange = fillRange < range ? fillRange += (dt * this.speed) : 0;
         sprite.fillRange = fillRange;
     }
});
