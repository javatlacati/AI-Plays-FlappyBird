class Data {
    /**The id of each input node and output node*/
    static network: {
        NODE_BIAS: number;
        NODE_PIPE_DIS: number;
        NODE_PIPE_UPPER: number;
        NODE_PIPE2_UPPER: number;
        NODE_OUTPUT: number;
        INPUT_SIZE: number;
        /**The largest increment(decrement) when changing the weight of an edge*/
        STEP_SIZE: number;
        ADD_NODE_CHANCE: number
    };
    static generation: {
        BIRD_NUM: number;
        SURVIVOR_NUM: number;
        MUTATE_CHANCE: number
    };
    static animation: {
        SCREEN_WIDTH: number;
        SCREEN_HEIGHT: number;
        LAND_NUM: number;
        SCORE_Y: number;
        SCORE_WIDTH: number;
        SCORE_SPACE: number
    };
    static game: {
        PIPE_NUM: number;
        PIPE_WIDTH: number;
        PIPE_HEIGHT: number;
        PIPE_MIN_Y: number;
        PIPE_MAX_Y: number;
        SPACE_HEIGHT: number;
        BIRD_INIT_X: number;
        BIRD_INIT_Y: number;
        BIRD_RADIUS: number;
        GRAVITY: number;
        /**The y-coordinate speed after the bird flap its wings*/
        FLY_SPEED: number;
        /**The x-coordinate speed of the birds*/
        MOVE_SPEED: number;
        LAND_Y: number
    };
    static activation: {
        SIGMOID: string;
        ACRTAN: string;
        CUSTOM_TANGENT: string;
        HYPERBOLIC_TANGENT: string;
        RELU: string
    };
}

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
