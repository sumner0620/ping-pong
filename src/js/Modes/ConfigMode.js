import GameMode from './GameMode'

class ConfigMode extends GameMode {
    constructor(game) {
        super(game)
    }
    quit = () => {
        const { startMode } = this.game
        this.game.transition(startMode)
    }
    render = props => {
        return this.game.renderConfigView(props)
    }
}

export default ConfigMode