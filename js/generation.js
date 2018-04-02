///<reference path="bird.ts"/>
///<reference path="data.ts"/>
///<reference path="network/sigmoid_network.ts"/>
///<reference path="network/hyperbolic_tangent_network.ts"/>
///<reference path="network/custom_tangent_network.ts"/>
var Generation = /** @class */ (function () {
    function Generation() {
        this.generationNum = 1;
        this._birds = [];
        for (var i = 0; i < Data.generation.BIRD_NUM; i++) {
            this._birds[i] = new Bird();
            this._birds[i].network = new CustomTangentActivationNetwork();
            this._birds[i].network.mutate(); // Make the birds different from each other
        }
    }
    Object.defineProperty(Generation.prototype, "birds", {
        get: function () {
            return this._birds;
        },
        enumerable: true,
        configurable: true
    });
    Generation.prototype._breed = function (birdA, birdB) {
        var baby = new Bird();
        switch (dashboard.getActivationFunction()) {
            case Data.activation.SIGMOID:
                baby.network = new SigmoidalActivationNetwork();
                break;
            case Data.activation.ACRTAN:
                baby.network = new ArcTanActivationNetwork();
                break;
            case Data.activation.HYPERBOLIC_TANGENT:
                baby.network = new HyperbolicTangentActivationNetwork();
                break;
            case Data.activation.RELU:
                baby.network = new ReLuActivationNetwork();
                break;
            default:
                baby.network = new CustomTangentActivationNetwork();
        }
        // baby.network._activationFunction=Activation.get(dashboard.getActivationFunction());
        var parentA;
        var parentB;
        if (this._birds[birdA].fitness < this._birds[birdB].fitness) {
            parentA = birdB;
            parentB = birdA;
        }
        else {
            parentA = birdA;
            parentB = birdB;
        }
        baby.network.nodeSize = this._birds[parentA].network.nodeSize;
        for (var nodeIdx = 1; nodeIdx <= baby.network.nodeSize; nodeIdx++) {
            baby.network.edges[nodeIdx] = [];
            for (var edgeIdx in this._birds[parentA].network.edges[nodeIdx]) {
                // Check if the parent with less fitness has the same edge
                if (this._birds[parentB].network.edges.hasOwnProperty("" + nodeIdx) && this._birds[parentB].network.edges[nodeIdx].hasOwnProperty(edgeIdx)) {
                    baby.network.edges[nodeIdx][edgeIdx] = Math.random() < 0.5 ? this._birds[parentA].network.edges[nodeIdx][edgeIdx] : this._birds[parentB].network.edges[nodeIdx][edgeIdx];
                }
                else {
                    baby.network.edges[nodeIdx][edgeIdx] = this._birds[parentA].network.edges[nodeIdx][edgeIdx];
                }
            }
        }
        if (Math.random() <= Data.generation.MUTATE_CHANCE) {
            baby.network.mutate();
        }
        return baby;
    };
    Generation.prototype.nextGeneration = function () {
        this._birds.sort(function (a, b) { return b.fitness - a.fitness; });
        Data.generation.SURVIVOR_NUM = dashboard.getSurvivorNum();
        for (var i = Data.generation.SURVIVOR_NUM; i < Data.generation.BIRD_NUM; i++) {
            this._birds[i] = null;
            delete this._birds[i];
        }
        Data.generation.BIRD_NUM = dashboard.getBirdNum();
        Data.generation.MUTATE_CHANCE = dashboard.getMutateChance();
        for (var i = Data.generation.SURVIVOR_NUM - 1; i >= Data.generation.BIRD_NUM; i--) {
            this._birds[i] = null;
            delete this._birds[i];
        }
        Data.generation.SURVIVOR_NUM = Math.min(Data.generation.SURVIVOR_NUM, Data.generation.BIRD_NUM);
        for (var birdToBeKilledIdx = Data.generation.SURVIVOR_NUM; birdToBeKilledIdx < Data.generation.BIRD_NUM; birdToBeKilledIdx++) {
            this._birds[birdToBeKilledIdx] = this._breed(Math.floor(Math.random() * Data.generation.SURVIVOR_NUM), Math.floor(Math.random() * Data.generation.SURVIVOR_NUM));
        }
        for (var survivorIdx = 0; survivorIdx < Data.generation.SURVIVOR_NUM; survivorIdx++) {
            this._birds[survivorIdx].init();
        }
        this.generationNum++;
    };
    return Generation;
}());
