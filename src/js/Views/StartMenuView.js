import React from 'react'
import TextCarousel from './TextCarousel'

class StartMenuView extends React.Component {
    getPlayerModes() {
        return [
            { value: 'one-player', textContent: 'one player' }, 
            { value: 'two-players', textContent: 'two players' }
        ]
    }
    getDifficultyModes() {
        return [
            { value: 'easy', textContent: 'easy' }, 
            { value: 'medium', textContent: 'medium' }, 
            { value: 'hard', textContent: 'hard' }
        ]
    }
    render() {
        const { handleClick, play, config } = this.props;

        return (
            <div className="container">
                <h1>Pong</h1>
                <TextCarousel items={this.getPlayerModes()} onClick={handleClick}/>
                <TextCarousel items={this.getDifficultyModes()} onClick={handleClick} />
                <button onClick={config}>Controls</button>
                <button onClick={play}>Start</button>
            </div>
        )
    }
}

export default StartMenuView