import GameMode from './GameMode'

class EndMode extends GameMode {
    constructor (game) {
        super(game)
    }
    quit = () => {
        const { startMode } = this.game
        this.game.transition(startMode)
    }
    render = props => {
        return this.game.renderGameEndView(props)
    }
}

export default EndMode