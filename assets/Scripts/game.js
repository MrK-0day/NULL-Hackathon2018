cc.Class({
    extends: cc.Component,

    properties: {
        player_1: {
            default: null,
            type: cc.Prefab
        },
        player_2: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.connection = window.io('http://10.45.78.95:3000');
        this.side = null;
        //this.connection.emit('location', 'concac');
        this.connection.on('left_side', () => {
            var player_1 = cc.instantiate(this.player_1);
            this.node.addChild(player_1);
            this.side = 1;
        });

        this.connection.on('right_side', () => {
            var player_2 = cc.instantiate(this.player_2);
            this.node.addChild(player_2);
            this.side = 2;
            var player_1 = cc.instantiate(this.player_1);
            this.node.addChild(player_1);
        });
    },

    start () {

    },

    update (dt) {
    },
});
