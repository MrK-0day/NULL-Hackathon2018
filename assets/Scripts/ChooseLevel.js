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
        level: 0
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
        this.node.on('touchend', (e) => {
            var DATA = JSON.parse(cc.sys.localStorage.getItem('DATA'));
            var currentLevel = DATA.alllevel[this.level];
            cc.sys.localStorage.removeItem('levalData');
            cc.sys.localStorage.removeItem('time');
            cc.sys.localStorage.setItem('levelData', JSON.stringify(currentLevel));
            cc.sys.localStorage.setItem('time', JSON.stringify(DATA.time_to_read));
            cc.sys.localStorage.setItem('talk_frame', JSON.stringify(DATA.talkFrame));
            cc.director.loadScene('main');
        });
    },

    start () {

    },

    // update (dt) {},
});
