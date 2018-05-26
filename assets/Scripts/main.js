cc.Class({
    extends: cc.Component,

    properties: {
        background: {
            default: null,
            type: cc.Sprite
        },
        
        player: {
            default: null,
            type: cc.Sprite
        },
        
        sentence: {
            default: null,
            type: cc.Prefab
        },

        enemy: {
            default: null,
            type: cc.Prefab
        },
    },

    getRandom: function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },

    setBackground: function(url) {
        var self = this;
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
            self.background.spriteFrame = spriteFrame;
        });
    },

    setEnemies: function(url) {
        var self = this;
        cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
            self.background.spriteFrame = spriteFrame;
        });
    },

    getSentenceData: function() {
        var index = this.getRandom(0, this.sentences.length - 1);
        return this.sentences[index];
    },

    getEnemy: function () {
        var index = this.getRandom(0, this.enemies.length - 1);
        return this.enemies[index];
    },

    createSentence: function() {
        var sentenceData = this.getSentenceData();
        var enemy = this.getEnemy();

        var sentence = cc.instantiate(this.sentence);
        sentence.getComponent('sentence').setImage(sentenceData.path);
        sentence.getComponent('sentence').setTimetoRead(this.levelData.time_to_read);
        sentence.getComponent('sentence').setSpeed(this.speed);

        var subNode = new cc.Node('Label');
        subNode.setTag(0);
        var text = subNode.addComponent(cc.Label);
        text.string = sentenceData.content;

        sentence.addChild(subNode);
        sentence.setPosition(enemy.location.x + 100, enemy.location.y - 100);

        this.node.addChild(sentence);
    },

    createEnemies: function() {
        var enemyData;

        for (var i = 0; i < this.enemies.length; i++) {
            enemyData = this.enemies[i];

            var enemy = cc.instantiate(this.enemy);
            enemy.getComponent('enemy').setImage(enemyData.path);
            enemy.setPosition(enemyData.location);

            this.node.addChild(enemy);
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.levelData = JSON.parse(cc.sys.localStorage.getItem('levelData'));
        
        this.setBackground(this.levelData.background_path);

        this.enemies = this.levelData.enemies;
        this.sentences = this.levelData.sentences;

        this.speed = 1;
        this.blood = 10;
        this.fire_speed = 2;
    },

    fire() {
        var delay = new cc.DelayTime(this.fire_speed);

        var fire = new cc.CallFunc(() => {
            this.createSentence();
            this.createSentence();
        });

        var increaseSpeed = new cc.CallFunc(() => {
            this.fire_speed -= 0.01;
        });

        var sequenceAction = new cc.Sequence(delay, fire, increaseSpeed);

        var repeatForeverAction = new cc.RepeatForever(sequenceAction);
        
        this.node.runAction(repeatForeverAction);
    },

    start () {
        //this.createSentence();
        this.createEnemies();
        this.fire();
    },

    update (dt) {
        
    },
});
