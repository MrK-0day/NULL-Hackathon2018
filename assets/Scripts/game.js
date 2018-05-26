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
        console.log('ahihi');
        this.connection = window.io('http://172.20.10.2:3000/');
        this.side = null;
        this.padding = 20;
        var self = this;
        //this.connection.emit('location', 'concac');
        this.connection.on('you_are_player1', () => {
            var player_1 = cc.instantiate(this.player_1);
            this.node.addChild(player_1);
            var width = cc.director.getWinSize().width / 2;
            var height = cc.director.getWinSize().height / 2;
            player_1.setPosition(-width + this.padding, -height + this.padding);

            var coord = this.node.getChildByName("player_1").getPosition();
            this.connection.emit('coord_player1', { coord: coord });
            this.connection.on('render_player2', data => {
                var player_2 = cc.instantiate(this.player_2);
                self.node.addChild(player_2);
                player_2.setPosition(data.x, data.y);
            });
        });

        this.connection.on('you_are_player2', () => {
            var player_2 = cc.instantiate(this.player_2);
            this.node.addChild(player_2);
            var width = cc.director.getWinSize().width / 2;
            var height = cc.director.getWinSize().height / 2;
            player_2.setPosition(width - this.padding, height - this.padding);

            var coord = this.node.getChildByName("player_2").getPosition();
            this.connection.emit('coord_player2', { coord: coord });
            this.connection.on('render_player1', data => {
                var player_1 = cc.instantiate(this.player_1);
                self.node.addChild(player_1);
                player_1.setPosition(data.x, data.y);
            });
        });

        this.connection.on('change_coord_player1', data => {
            this.node.getChildByName('player_1').setPosition(data.x, data.y);
        });

        this.connection.on('change_coord_player2', data => {
            this.node.getChildByName('player_2').setPosition(data.x, data.y);
        });
    },

    start () {

    },

    update (dt) {
    },
});
