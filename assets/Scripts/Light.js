cc.Class({
    extends: cc.Component,

    properties: {
        Background: cc.Sprite,
        NextLight: cc.SpriteFrame
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this;
        self.node.on('touchend', (e)=>{
            var bg = self.Background.getComponent(cc.Sprite);
            console.log(bg);
            bg.SpriteFrame = self.NextLight;
            console.log(1);
        });
    },

    start () {

    },

    // update (dt) {},
});
