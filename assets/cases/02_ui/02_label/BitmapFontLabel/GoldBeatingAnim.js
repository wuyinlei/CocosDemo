const i18n = require('i18n');

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
        
        speed: 50,
        gold_label: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        this.curGold = 0;
        this.curIndex = 0;
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
        this.curIndex += dt * this.speed;
        if(this.curIndex > 10){
            this.curIndex = 0;
            this.curGold++;
            this.gold_label.string += this.curGold;
            if(this.gold_label.string.length > 10){
                this.gold_label.string = 0;
                this.curGold = 0;
            }
        }
     },
});
