cc.Class({
    extends: cc.Component,

    properties: {

    },

    onHomeClick: function () {
        cc.log('Home click');
        //cc.director.pushScene('buy');
        cc.director.loadScene('buy');
    },

    onAchievementClick: function () {
        cc.log('Achievement click');
    },

    onStoreClick: function () {
        cc.log('Store click');
    },

    onSettingClick: function () {
        cc.log('Setting click');
    },

    onCreditClick: function () {
        cc.log('Credit click');
    },

    onLoad () {
        this.node.getChildByName('btn_home').on('touchstart', this.onHomeClick);
        this.node.getChildByName('btn_achievement').on('touchstart', this.onAchievementClick);
        this.node.getChildByName('btn_store').on('touchstart', this.onStoreClick);
        this.node.getChildByName('btn_setting').on('touchstart', this.onSettingClick);
        this.node.getChildByName('btn_credit').on('touchstart', this.onCreditClick);
    },

    start () {
    },

    // update (dt) {},
});
