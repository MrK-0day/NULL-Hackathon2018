cc.Class({
    extends: cc.Component,

    properties: {
        heart: {
            default: null,
            type: cc.Sprite
        },
        hear0: {
            default: null,
            type: cc.SpriteFrame
        },
        hear1: {
            default: null,
            type: cc.SpriteFrame
        },
        hear2: {
            default: null,
            type: cc.SpriteFrame
        },
        hear3: {
            default: null,
            type: cc.SpriteFrame
        },
        hear4: {
            default: null,
            type: cc.SpriteFrame
        },
        hear5: {
            default: null,
            type: cc.SpriteFrame
        },
        hear6: {
            default: null,
            type: cc.SpriteFrame
        },
        hear7: {
            default: null,
            type: cc.SpriteFrame
        },
        hear8: {
            default: null,
            type: cc.SpriteFrame
        },
        hear9: {
            default: null,
            type: cc.SpriteFrame
        },
        hear10: {
            default: null,
            type: cc.SpriteFrame
        },   
    },

    setHeart: function(typeId) {
        var self = this;
        var sprite = self.heart.getComponent(cc.Sprite);
        switch (typeId)
        {
            case 0: sprite.spriteFrame = self.hear0; break;
            case 1: sprite.spriteFrame = self.hear1; break;
            case 2: sprite.spriteFrame = self.hear2; break;
            case 3: sprite.spriteFrame = self.hear3; break;
            case 4: sprite.spriteFrame = self.hear4; break;
            case 5: sprite.spriteFrame = self.hear5; break;
            case 6: sprite.spriteFrame = self.hear6; break;
            case 7: sprite.spriteFrame = self.hear7; break;
            case 8: sprite.spriteFrame = self.hear7; break;
            case 9: sprite.spriteFrame = self.hear9; break;
            case 10: sprite.spriteFrame = self.hear10; break;
        }
    },

    

    onLoad () {
    },

    start () {
        
    },

    update (dt) {

    },
});
