///<reference path="network.ts"/>
///<reference path="network/relu_network.ts"/>
///<reference path="network/arctan_network.ts"/>
class Bird {
    public network: Network;
    /** The distance the bird has flown*/
    private _fitness: number;
    /**The number of pipes the bird has passed*/
    score: number;
    x: number;
    y: number;
    speed: number;
    alive: boolean;
    private seeTwoPipe: boolean;

    constructor() {
        this.seeTwoPipe = dashboard.seeTwoPipe; // Foresee the next coming two pipes instead of one
        this.init();
    }

    public init(): void {
        this._fitness = 0;
        this.score = 0;
        this.x = Data.game.BIRD_INIT_X;
        this.y = Data.game.BIRD_INIT_Y;
        this.speed = 0;
        this.alive = true;
    }

    /**Use neural network to decide whether to fly or not*/
    public fly(PipeDistance: number, pipeUpper: number, pipe2Upper: number): void {
        if (this.alive) {
            this._fitness++;
            if (this.network.getOutput(PipeDistance / Data.animation.SCREEN_WIDTH, (this.y - pipeUpper) / Data.animation.SCREEN_HEIGHT,
                this.seeTwoPipe ? (this.y - pipe2Upper) / Data.animation.SCREEN_HEIGHT : 0)) {
                this.speed = -Data.game.FLY_SPEED;
            }
        }
        this.speed += Data.game.GRAVITY;
        this.y += this.speed;
    }


    get fitness(): number {
        return this._fitness;
    }
}
