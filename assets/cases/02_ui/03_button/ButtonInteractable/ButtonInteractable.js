cc.Class({
    extends: cc.Component,

    properties: {
       buttonLeft: {
           default: null,
           type: cc.Button
       },
       
       buttonRight: {
           default: null,
           type: cc.Button
       },
       
       labelLeft: {
           default: null,
           type: cc.Label
       },
       
       labelRigth: {
           default: null,
           type: cc.Label
       }
       
    },

    onBtnLeftClicked: function(){
        console.log('Left button clicked');
        this.buttonLeft.interactable = false;
        this.buttonRight.interactable = true;
        this.updateInfo();
    },
    
     onBtnRightClicked: function(){
        console.log('Right button clicked');
        this.buttonLeft.interactable = true;
        this.buttonRight.interactable = false;
        this.updateInfo();
    },
    

    
    updateInfo: function(){
        this.labelLeft.string = "交互(interactable):" + this.buttonLeft.interactable;
        this.labelRigth.string = "交互(interactable):" + this.buttonRight.interactable;
    }
  
});
