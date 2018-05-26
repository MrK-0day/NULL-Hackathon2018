cc.Class({
    extends: cc.Component,

    properties: {
    },

    //TODO: tao mot loat hieu ung: sau vai giay xoa child(0), thu nho, di chuyen
    setImage: function(url) {
        var self = this;
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.node.removeChildByTag(0);
    },

    start () {

    },

    // update (dt) {},
});
