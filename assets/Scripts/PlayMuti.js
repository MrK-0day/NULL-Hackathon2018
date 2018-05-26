// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        MaskNode: cc.Node
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchend', (e)=>{
            this.MaskNode.active = true;
            this.MaskNode.runAction(
                cc.sequence(
                    cc.fadeIn(0.3),
                    cc.callFunc(()=>{
                        cc.director.loadScene('muti');
                        this.connection = window.io('http://10.45.78.95:3000');
                        //this.connection.emit('location', 'concac');
                        this.connection.on('your_room_name', (data)=>{
                            console.log(data);
                        });
                    }, this)
                )
            );
        });
    },

    start () {

    },

    // update (dt) {},
});
