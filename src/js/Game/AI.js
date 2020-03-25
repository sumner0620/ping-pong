class AI {
    constructor (paddle, ball) {
        this.paddle = paddle
        this.ball = ball
        this.errorFactor = 0.3
    }
    movePaddle = () => {
        if (this.ball.getTop() > this.paddle.getMidY()) {
            this.paddle.moveDown()
        } else if (this.ball.getBottom() < this.paddle.getMidY()) {
            this.paddle.moveUp()
        } else {
            this.paddle.stop()
        } 
        
    }
    calculate = () => {
        Math.random() > this.errorFactor ? this.movePaddle() : this.paddle.stop()
    }
    reset () {
        this.errorFactor = 0.3
    }
}

export default AI




