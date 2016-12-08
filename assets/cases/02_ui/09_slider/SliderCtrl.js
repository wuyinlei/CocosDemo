cc.Class({
    extends: cc.Component,

    properties: {
       image: cc.Node,
       slider_h: cc.Slider,
       slider_v: cc.Slider
    },

    // use this for initialization
    onLoad () {
        this.slider_v.progress = 0.5;
        this._updateImageOpacity(this.slider_v.progress);
    },

    _updateImageOpacity(progress){
        this.image.opacity = progress * 255;  
    },
    
    onSliderVEvent(sender,eventType){
        this._updateImageOpacity(sender.progress);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
