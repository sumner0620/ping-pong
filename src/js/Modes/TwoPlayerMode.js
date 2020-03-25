import PlayMode from './PlayMode'

class TwoPlayerMode extends PlayMode {
    constructor(game) {
        super(game)
    }
    handleKeydown = e => {
        if (e.keyCode === 32) this.pause()
        if (e.keyCode === 38) this.game.pong.rightPaddle.moveUp()
        if (e.keyCode === 40) this.game.pong.rightPaddle.moveDown()
        if (e.keyCode === 87) this.game.pong.leftPaddle.moveUp()
        if (e.keyCode === 83) this.game.pong.leftPaddle.moveDown()
    }
    handleKeyup = e => {
        if (e.keyCode === 38) this.game.pong.rightPaddle.stop()
        if (e.keyCode === 40) this.game.pong.rightPaddle.stop()
        if (e.keyCode === 87) this.game.pong.leftPaddle.stop()
        if (e.keyCode === 83) this.game.pong.leftPaddle.stop()
    }
    render(props) {
        return this.game.renderGamePlayView(props)
    }
}

export default TwoPlayerMode