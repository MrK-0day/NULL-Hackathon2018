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
        sentence.getComponent('sentence').setData(this.talkFrame[this.getRandom(0, this.talkFrame.length - 1)], sentenceData.type);
        sentence.getComponent('sentence').setTimetoRead(this.time_to_read);
        sentence.getComponent('sentence').setSpeed(this.speed);
        sentence.getComponent('sentence').game = this;

        var subNode = new cc.Node('Label');
        subNode.setTag(0);
        subNode.color = new cc.Color(0, 0, 0);
        subNode.width = 150;
        subNode.height = 150;
        var text = subNode.addComponent(cc.Label);
        text.string = sentenceData.content;
        text.overflow = cc.Label.Overflow.SHRINK;
        text.enableWrapText = true;
        text.horizontalAlign = true;
        text.verticalAlign = true;
        text.fontSize = 20;
        var widget = subNode.addComponent(cc.Widget);
        widget.isAlignTop = true;
        widget.top = 0;
        widget.isAlignBottom = true;
        widget.bottom = 14;
        widget.isAlignLeft = true;
        widget.left = 5;
        widget.isAlignRight = true;
        widget.right = 5;
        

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

    decreaseBlood: function() {
        this.blood--;
        console.log(this.blood);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.levelData = JSON.parse(cc.sys.localStorage.getItem('levelData'));
        this.time_to_read = JSON.parse(cc.sys.localStorage.getItem('time'));
        this.talkFrame = JSON.parse(cc.sys.localStorage.getItem('talk_frame'));
        
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
        //this.createEnemies();
        this.fire();
    },

    update (dt) {
        if (this.blood <= 0) cc.director.pause();
    },
});
