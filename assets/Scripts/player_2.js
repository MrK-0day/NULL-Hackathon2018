cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.keyUp = false;
        this.keyDown = false;
        this.keyLeft = false;
        this.keyRight = false;
        this.deltaY = 5;
        this.setInputControl();
    },

    setInputControl: function () {
        var self = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event){
            switch(event.keyCode) {
                case cc.KEY.s:
                    self.keyUp = true;
                    break;
                case cc.KEY.x:
                    self.keyDown = true;
                    break;
                case cc.KEY.z:
                    self.keyLeft = true;
                    break;
                case cc.KEY.c:
                    self.keyRight = true;
                    break;
                case cc.KEY.v:
                    self.fire = true;
                    break;
            }
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event){
            switch(event.keyCode) {
                case cc.KEY.s:
                    self.keyUp = false;
                    break;
                case cc.KEY.x:
                    self.keyDown = false;
                    break;
                case cc.KEY.z:
                    self.keyLeft = false;
                    break;
                case cc.KEY.c:
                    self.keyRight = false;
                    break;
            }
        });        
    },

    start () {
    },

    update: function (dt) {
        if (this.keyUp) {
            if (this.node.y <= 320 - this.deltaY) 
                this.node.y += this.deltaY;
        }   
        if (this.keyDown) {
            if (this.node.y >= -320 + this.deltaY)
                this.node.y -= this.deltaY;
        } 
        if (this.keyLeft) {
            //stop at middle of screen
            if (this.node.x >= 95 + this.deltaY) 
            //if (this.node.x >= -385 + this.deltaY)
                this.node.x -= this.deltaY;
        }
        if (this.keyRight) {
            if (this.node.x <= 385 + 95 - this.deltaY)
                this.node.x += this.deltaY;
        }
    },
});
