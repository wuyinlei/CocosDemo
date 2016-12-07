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
        
        button_1: cc.Button,
        button_2: cc.Button,
        display: cc.Label
    },

    
    onClikcedButton_1: function(){
        console.log('button_1 clikced');
        this.display.string = "button_1";
    },
    
    onClikcedButton_2: function(){
        console.log('button_2 clikced');
        this.display.string = "button_2";
    },
});
