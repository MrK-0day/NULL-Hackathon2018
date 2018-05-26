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
                    background_path: 'LEVEL_HOME',
                    stars_count: 0,
                    enemies: [
                        {
                            path : 'bomb_blue',
                            location : cc.p(300,200)
                        },
                        {
                            path : 'bomb_blue',
                            location : cc.p(0,200)
                        },
                        {
                            path : 'bomb_blue',
                            location : cc.p(-150,200)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'con cho o nha',
                            type: false,
                        }
                    ],
                },
                {
                    background_path: 'LEVEL_OFFICE',
                    stars_count: 0,
                    enemies: [
                        {
                            path : 'bomb_blue',
                            location : cc.p(300,200)
                        },
                        {
                            path : 'bomb_blue',
                            location : cc.p(0,200)
                        },
                        {
                            path : 'bomb_blue',
                            location : cc.p(-150,200)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'con cho o van phong',
                            type: false,
                        }
                    ],
                },
                {
                    background_path: 'LEVEL_SCHOOL',
                    stars_count: 0,
                    enemies: [
                        {
                            path : 'bomb_blue',
                            location : cc.p(300,200)
                        },
                        {
                            path : 'bomb_blue',
                            location : cc.p(0,200)
                        },
                        {
                            path : 'bomb_blue',
                            location : cc.p(-150,200)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'con cho o truong',
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
            },
            time_to_read: 1,
        };
        cc.sys.localStorage.setItem('DATA', JSON.stringify(DATA));
    },

    start () {

    },

    // update (dt) {},
});
