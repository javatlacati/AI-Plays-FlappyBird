var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());
Data.network = {
    NODE_BIAS: 1,
    NODE_PIPE_DIS: 2,
    NODE_PIPE_UPPER: 3,
    NODE_PIPE2_UPPER: 4,
    NODE_OUTPUT: 0,
    INPUT_SIZE: 4,
    STEP_SIZE: 0.1,
    ADD_NODE_CHANCE: 0.5
};
Data.activation = {
    SIGMOID: "sigmoid",
    ACRTAN: "arctan",
    CUSTOM_TANGENT: "custom",
    HYPERBOLIC_TANGENT: "hyperbolic",
    RELU: "relu"
};
Data.generation = {
    BIRD_NUM: 15,
    SURVIVOR_NUM: 5,
    MUTATE_CHANCE: 0.5
};
Data.animation = {
    SCREEN_WIDTH: 336,
    SCREEN_HEIGHT: 512,
    LAND_NUM: 2,
    SCORE_Y: 20,
    SCORE_WIDTH: 24,
    SCORE_SPACE: 2
};
Data.game = {
    PIPE_NUM: 3,
    PIPE_WIDTH: 52,
    PIPE_HEIGHT: 500,
    PIPE_MIN_Y: 100,
    PIPE_MAX_Y: 305,
    SPACE_HEIGHT: 85,
    BIRD_INIT_X: 100,
    BIRD_INIT_Y: 200,
    BIRD_RADIUS: 12,
    GRAVITY: 0.4,
    FLY_SPEED: 5.5,
    MOVE_SPEED: 2,
    LAND_Y: 495
};
