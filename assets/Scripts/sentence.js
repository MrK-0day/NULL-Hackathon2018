cc.Class({
    extends: cc.Component,

    properties: {
        timeToRead: cc.Integer,
        speed: cc.Integer,
    },

    //TODO: tao mot loat hieu ung: sau vai giay xoa child(0), thu nho, di chuyen
    setImage: function(url) {
        var self = this;
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    },

    setTimetoRead: function(time) {
        this.timeToRead = time;
    },

    setSpeed: function(speed) {
        this.speed = speed;
    },

    // LIFE-CYCLE CALLBACKS:

    move () {
        var delay = new cc.DelayTime(this.timeToRead);

        var removeText = new cc.CallFunc(() => {
            this.node.removeChildByTag(0);
            this.draggable = true;
        });

        var resize = new cc.ScaleTo(this.speed, 0.5, 0.5);
        
        var move = new cc.MoveTo(this.speed, this.playerPosition);

        var moveAndResize = new cc.Spawn(move, resize);

        var destroy = new cc.CallFunc(() => {
            this.node.destroy();
        });

        var sequenceAction = new cc.Sequence(delay, removeText, moveAndResize, destroy);
        sequenceAction.setTag(0);
        this.node.runAction(sequenceAction);
    },

    moveBack(delta) {
        var move = new cc.MoveBy(1, delta);
        var repeatForeverAction = new cc.RepeatForever(move);
        this.node.runAction(repeatForeverAction);
    },

    onLoad () {
        this.playerPosition = cc.p(0, -320);
        this.move();
        this.draggable = false;
   
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (data) => {
            if (this.draggable) {
                this.node.stopActionByTag(0);
                var delta = data.getDelta();
                this.moveBack(delta);
            }
        });
    },

    start () {
        
    },

    update (dt) {
        
    },
});
