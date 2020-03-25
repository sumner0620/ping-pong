import React from 'react'

//WithObservableLoop 
import withLoop from './Loop/withLoop'

//Game
import Pong from './Game/Pong'
import Vector from './Game/Vector'

//Modes
import EndMode from './Modes/EndMode'
import OnePlayerMode from './Modes/OnePlayerMode'
import TwoPlayerMode from './Modes/TwoPlayerMode'
import StartMode from './Modes/StartMode'
import PauseMode from './Modes/PauseMode'
import ConfigMode from './Modes/ConfigMode'

//Views
import PauseMenuView from './Views/PauseMenuView'
import StartMenuView from './Views/StartMenuView'
import GamePlayView from './Views/GamePlayView'
import GameEndView from './Views/GameEndView'
import ConfigView from './Views/ConfigView'

class PongMachine extends React.Component {
    constructor() {
        super()

        this.pong = new Pong(new Vector(600, 400))

        this.onePlayerMode = new OnePlayerMode(this)
        this.twoPlayerMode = new TwoPlayerMode(this)
        this.startMode = new StartMode(this)
        this.pauseMode = new PauseMode(this)
        this.endMode = new EndMode(this)
        this.configMode = new ConfigMode(this)
        this.playMode = this.onePlayerMode
        
        this.state = { mode: this.startMode }
    }
    componentDidMount() {
       this.pong.init()
    }
    renderConfigView(props) {
        return (
            <ConfigView {...props} />
        )
    }
    renderGameEndView(props) {
        return (
            <GameEndView {...props} />
        )
    }
    renderPauseMenu(props) {
        return (
            <PauseMenuView {...props} />
        )
    }
    renderStartMenu(props) {
        return (
            <StartMenuView {...props} />
        )
    }
    renderGamePlayView(props) {
        return (
            <GamePlayView {...props} />
        )
    }
    handleClick = e => {
        this.state.mode.handleClick(e)
    }
    handleKeydown = e => {
        this.state.mode.handleKeydown(e)
    }
    handleKeyup = e => {
        this.state.mode.handleKeyup(e)
    }
    end = () => {
        this.state.mode.end()
    }
    quit = () => {
        this.pong.reset()
        this.state.mode.quit()
    }
    play = () => {
        this.state.mode.play()
    }
    pause = () => {
        this.state.mode.pause()
    }
    config = () => {
        this.state.mode.config()
    }
    update = step => {
        const maxStep = 0.05
        while (step > 0) {
            let thisStep = Math.min(step, maxStep)
            this.pong.update(thisStep)
            this.forceUpdate()
            step -= thisStep
        }
    }
    runLoop = () => {
        this.props.loop.subscribe(this.update)
        this.pong.score.subscribe(this.end)
        this.state.mode.runLoop()
    }
    stopLoop = () => {
        this.state.mode.stopLoop()
        this.props.loop.unsubscribe(this.update)
        this.pong.score.unsubscribe(this.end)
    }
    transition = mode => {
        this.setState({ mode })
    }
    render() {
        return this.state.mode.render({ ...this })
    }
}

export default withLoop(PongMachine)


