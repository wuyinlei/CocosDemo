cc.Class({
    extends: cc.Component,

    properties: {
        buttonLeft: cc.Button,
        buttonRight: cc.Button,
        display: cc.Label
    },

    onBtnLeftClicked: function(){
        console.log('Left button clicked');
        this.display.string = 'Left button clicked';
    },
    
     onBtnRightClicked: function(){
        console.log('Right button clicked');
        this.display.string = 'Right button clicked';
    },
    
});
