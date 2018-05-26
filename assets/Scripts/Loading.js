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
        var DATA = {
            alllevel: [
                {
                    background_path: 'background',
                    stars_count: 0,
                    enemies: [
                        {
                            path : '',
                            location : cc.p(0,0)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'con cho',
                            type: false,
                        }
                    ],
                },
                {
                    background_path: 'background',
                    stars_count: 0,
                    enemies: [
                        {
                            path : '',
                            location : cc.p(0,0)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'con cho',
                            type: false,
                        }
                    ],
                },
                {
                    background_path: 'background',
                    stars_count: 0,
                    enemies: [
                        {
                            path : '',
                            location : cc.p(0,0)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'con cho',
                            type: false,
                        }
                    ],
                },
            ],
            setting: {
                sound: true,
            },
            player: {
                currentLevel: 0,
            }
        };
        cc.sys.localStorage.setItem('DATA', JSON.stringify(DATA));
    },

    start () {

    },

    // update (dt) {},
});
