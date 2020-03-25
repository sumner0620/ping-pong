import GameMode from './GameMode'

class StartMode extends GameMode {
    constructor(game) {
        super(game)
    }
    play = () => {
        const { playMode } = this.game
        this.game.transition(playMode)
    }
    config = () => {
        const { configMode } = this.game
        this.game.transition(configMode)
    }
    handleClick = e => {
        if (e.target.value === 'one-player') {
            this.game.playMode = this.game.onePlayerMode
            this.game.pong.setOnePlayerMode()
        }
        if (e.target.value === 'two-players') {
            this.game.playMode = this.game.twoPlayerMode
            this.game.pong.setTwoPlayerMode()
        }
        if (e.target.value === 'easy') {
            this.game.pong.setEasyMode()
        }
        if (e.target.value === 'medium') {
            this.game.pong.setMediumMode()
        }
        if (e.target.value === 'hard') {
            this.game.pong.setHardMode()
        }
    }
    render(props) {
        return this.game.renderStartMenu(props)
    }
}

export default StartMode