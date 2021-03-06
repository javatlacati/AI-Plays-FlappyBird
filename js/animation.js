///<reference path="data.ts"/>
var Animation = /** @class */ (function () {
    function Animation() {
        var elementById = document.getElementById("canvas");
        this._canvas = elementById.getContext("2d");
        this._landX = [];
    }
    Animation.prototype.initAnimation = function () {
        for (var i = 0; i < Data.animation.LAND_NUM; i++) {
            this._landX[i] = Data.animation.SCREEN_WIDTH * i;
        }
    };
    Animation.prototype.updateAnimation = function () {
        this.moveLands();
        if (!dashboard.enableAnimation) {
            return;
        }
        this.drawBackground();
        this.drawPipes();
        this.drawLands();
        this.drawBirds();
        this.drawScore();
    };
    Animation.prototype.drawBackground = function () {
        this._canvas.drawImage(ImageManager.getImage(bgString), 0, 0);
    };
    Animation.prototype.drawPipes = function () {
        for (var pipeIdx = 0; pipeIdx < Data.game.PIPE_NUM; pipeIdx++) {
            if (dashboard.showPipe && pipeIdx == game.nextPipe) {
                this._canvas.drawImage(ImageManager.getImage("pipeRedUp"), game.pipeX[pipeIdx], game.pipeUpper[pipeIdx] + Data.game.SPACE_HEIGHT);
                this._canvas.drawImage(ImageManager.getImage("pipeRedDown"), game.pipeX[pipeIdx], game.pipeUpper[pipeIdx] - Data.game.PIPE_HEIGHT);
            }
            else {
                this._canvas.drawImage(ImageManager.getImage("pipeUp"), game.pipeX[pipeIdx], game.pipeUpper[pipeIdx] + Data.game.SPACE_HEIGHT);
                this._canvas.drawImage(ImageManager.getImage("pipeDown"), game.pipeX[pipeIdx], game.pipeUpper[pipeIdx] - Data.game.PIPE_HEIGHT);
            }
        }
    };
    Animation.prototype.drawLands = function () {
        for (var landIdx = 0; landIdx < Data.animation.LAND_NUM; landIdx++) {
            this._canvas.drawImage(ImageManager.getImage("land"), this._landX[landIdx], Data.game.LAND_Y);
        }
    };
    Animation.prototype.drawBirds = function () {
        for (var birdIdx = Data.generation.BIRD_NUM - 1; birdIdx >= 0; birdIdx--) {
            this._canvas.save();
            this._canvas.translate(game.generation.birds[birdIdx].x, game.generation.birds[birdIdx].y);
            this._canvas.rotate(Math.min(game.generation.birds[birdIdx].speed * 7, 90) * Math.PI / 180);
            this._canvas.drawImage(ImageManager.getImage(birdIdx ? (birdIdx >= Data.generation.SURVIVOR_NUM ? "birdBlue0" : "birdYellow0") : "birdRed0"), -24, -24);
            this._canvas.restore();
        }
    };
    Animation.prototype.drawScore = function () {
        var score = game.currentScore;
        var width = 0;
        var scoreX;
        if (score == 0) {
            this._canvas.drawImage(ImageManager.getImage("0"), (Data.animation.SCREEN_WIDTH - Data.animation.SCORE_WIDTH) / 2, Data.animation.SCORE_Y);
        }
        else {
            while (score > 0) {
                width += Data.animation.SCORE_WIDTH + Data.animation.SCORE_SPACE;
                score = Math.floor(score / 10);
            }
            width -= Data.animation.SCORE_SPACE;
            score = game.currentScore;
            scoreX = (Data.animation.SCREEN_WIDTH + width) / 2 - Data.animation.SCORE_WIDTH;
            while (score > 0) {
                this._canvas.drawImage(ImageManager.getImage(score % 10), scoreX, Data.animation.SCORE_Y);
                scoreX -= Data.animation.SCORE_WIDTH + Data.animation.SCORE_SPACE;
                score = Math.floor(score / 10);
            }
        }
    };
    Animation.prototype.moveLands = function () {
        for (var landIdx = 0; landIdx < Data.animation.LAND_NUM; landIdx++) {
            if (!game.gameover) {
                this._landX[landIdx] -= Data.game.MOVE_SPEED;
                if (this._landX[landIdx] <= -Data.animation.SCREEN_WIDTH) {
                    this._landX[landIdx] += Data.animation.SCREEN_WIDTH * 2;
                }
            }
        }
    };
    return Animation;
}());
