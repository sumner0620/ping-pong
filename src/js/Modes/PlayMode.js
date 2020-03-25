import GameMode from './GameMode'

class PlayMode extends GameMode {
    constructor (game) {
        super(game)
    }
    end = () => {
        const { endMode } = this.game
        this.game.transition(endMode)
    }
    runLoop = () => {
        this.game.props.loop.run()
    }
    stopLoop = () => {
        this.game.props.loop.stop()
    }
    pause = () => {
        const { pauseMode } = this.game
        this.game.transition(pauseMode)
    }
}

export default PlayMode