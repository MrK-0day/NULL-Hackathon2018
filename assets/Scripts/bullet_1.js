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
        // When the distance between the star and main character is less than this value, collection of the point will be completed
        hitRadius: 0,

        game: {
            default: null,
            serializable: false
        }
    },

    updatePosition: function(){
        this.node.x += 10;
    },

    isPlayer2Dead: function () {
        var playerPos = this.game.player_2.getPosition();
        if (this.node.x >= playerPos.x - 45 && this.node.x <= playerPos.x + 95)
            if (this.node.y >= playerPos.y - 46 && this.node.y <= playerPos.y + 46)
                return true;
        return false;
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
       
    },

    update (dt) {
        this.updatePosition();
        if (this.isPlayer2Dead()) {
            this.node.destroy();
            this.game.dead(2);
        }
    },
});
