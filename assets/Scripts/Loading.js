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
                    background_path: 'LEVEL_SCHOOL',
                    stars_count: 0,
                    enemies: [
                        {
                            id: 0,
                            path : 'bomb_blue',
                            location : cc.p(-491,257)
                        },
                        {
                            id: 1,
                            path : 'bomb_blue',
                            location : cc.p(-23,277)
                        },
                        {
                            id: 2,
                            path : 'bomb_blue',
                            location : cc.p(434,265)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'Trường học là ngôi nhà thứ hai của em',
                            type: false,
                        }
                    ],
                },
                {
                    background_path: 'LEVEL_HOME',
                    stars_count: 0,
                    enemies: [
                        {
                            id: 0,
                            path : 'bomb_blue',
                            location : cc.p(-488,377)
                        },
                        {
                            id: 1,
                            path : 'bomb_blue',
                            location : cc.p(12,371)
                        },
                        {
                            id: 2,
                            path : 'bomb_blue',
                            location : cc.p(498,375)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'nha',
                            type: false,
                        }
                    ],
                },
                {
                    background_path: 'LEVEL_OFFICE',
                    stars_count: 0,
                    enemies: [
                        {
                            id: 0,
                            path : 'bomb_blue',
                            location : cc.p(-537,256)
                        },
                        {
                            id: 1,
                            path : 'bomb_blue',
                            location : cc.p(-34,268)
                        },
                        {
                            id: 2,
                            path : 'bomb_blue',
                            location : cc.p(434,271)
                        }
                    ],
                    sentences: [
                        {
                            id: 1,
                            content: 'van phong',
                            type: false,
                        }
                    ],
                },
            ],
            talkFrame: [
                'talk1.png',
                'talk2.png',
                'talk3.png'
            ],
            setting: {
                sound: true,
            },
            player: {
                currentLevel: 0,
            },
            time_to_read: 1,
            
        };
        cc.sys.localStorage.removeItem('DATA');
        cc.sys.localStorage.setItem('DATA', JSON.stringify(DATA));
    },

    start () {

    },

    // update (dt) {},
});
