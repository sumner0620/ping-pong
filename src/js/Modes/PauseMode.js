import GameMode from './GameMode'

class PauseMode extends GameMode {
    constructor(game) {
        super(game)
    }
    play = () => {
        const { playMode } = this.game
        this.game.transition(playMode)
    }
    quit = () => {
        const { startMode } = this.game
        this.game.transition(startMode)
    }
    render(props) {
        return this.game.renderPauseMenu(props)
    }
}
 
export default PauseMode