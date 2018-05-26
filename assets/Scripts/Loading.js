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
                            content: 'Chúc mừng cậu được 10 điểm',
                            type: true,
                        },
                        {
                            id: 2,
                            content: 'Đi học chứ không phải đi diễn',
                            type: false,
                        },
                        {
                            id: 3,
                            content: 'Học ngu như con bò',
                            type: false,
                        },
                        {
                            id: 4,
                            content: 'Nhìn mặt thấy ghét',
                            type: false,
                        },
                        {
                            id: 5,
                            content: 'Cậu thật xinh đẹp',
                            type: true,
                        },
                        {
                            id: 6,
                            content: 'Đóng 100.000đ, cút',
                            type: false,
                        },
                        {
                            id: 7,
                            content: 'Thầy rất thất vọng về con',
                            type: false,
                        },
                        {
                            id: 8,
                            content: 'Em nghĩ em là ai',
                            type: false,
                        },
                        {
                            id: 9,
                            content: 'Cô rất tự hào về con',
                            type: true,
                        },
                        {
                            id: 10,
                            content: 'Cho con phiếu bé ngoan',
                            type: true,
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
                            content: 'Cho mày ra đường bây giờ',
                            type: false,
                        },
                        {
                            id: 2,
                            content: 'Đồ ăn hại',
                            type: false,
                        },
                        {
                            id: 3,
                            content: 'Mày không phải con tao',
                            type: false,
                        },
                        {
                            id: 4,
                            content: 'Mày coi con nhà người ta kìa',
                            type: false,
                        },
                        {
                            id: 5,
                            content: 'Làm tốt lắm con trai',
                            type: true,
                        },
                        {
                            id: 6,
                            content: 'Con là niềm tự hào',
                            type: true,
                        },
                        {
                            id: 7,
                            content: 'Cho con 50k ăn bánh nè',
                            type: true,
                        },
                        {
                            id: 8,
                            content: 'Biến đi',
                            type: false,
                        },
                        {
                            id: 9,
                            content: 'Đồ thất bại',
                            type: false,
                        },
                        {
                            id: 10,
                            content: 'Thương con lắm ý',
                            type: true,
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
                            content: 'Anh bị điên à',
                            type: false,
                        },
                        {
                            id: 2,
                            content: 'Anh làm tốt lắm',
                            type: true,
                        },
                        {
                            id: 3,
                            content: 'Cậu là đồ ăn hại',
                            type: false,
                        },
                        {
                            id: 4,
                            content: 'Đồ ngu',
                            type: false,
                        },
                        {
                            id: 5,
                            content: 'Mày không có quyền lên tiếng',
                            type: false,
                        },
                        {
                            id: 6,
                            content: 'Anh được tăng lương',
                            type: true,
                        },
                        {
                            id: 7,
                            content: 'Cô mập như heo',
                            type: false,
                        },
                        {
                            id: 8,
                            content: 'Người gì xấu dữ',
                            type: false,
                        },
                        {
                            id: 9,
                            content: 'Dạo này trông bảnh thế',
                            type: true,
                        },
                        {
                            id: 10,
                            content: 'Đi nhậu không',
                            type: true,
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
            time_to_read: 2.5,
            
        };
        cc.sys.localStorage.removeItem('DATA');
        cc.sys.localStorage.setItem('DATA', JSON.stringify(DATA));
    },

    start () {

    },

    // update (dt) {},
});
