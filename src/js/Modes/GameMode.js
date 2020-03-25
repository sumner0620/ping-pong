class GameMode {
    constructor (game) {
        this.game = game
    }
    play() {} //transition to play mode from either start or pause mode
    quit() {} //transition to start mode from pause mode, end mode, or config mode
    pause() {} //transition to pause mode from play mode
    end() {} //transition to end mode from play mode
    config() {} //transition to config mode from start mode
    handleClick() {}
    handleKeydown() {}
    handleKeyup() {}
    render() {}
    runLoop() {}
    stopLoop() {}
   
}

export default GameMode