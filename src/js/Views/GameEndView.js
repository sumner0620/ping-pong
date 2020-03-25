import React from 'react'

class GameEndView extends React.Component {
    render () {
        const { pong, quit } = this.props
        return (
            <div className="container">
                <h2>{`${pong.score.winner}-Side Wins!`}</h2>
                <button style={{marginTop: '100px', fontSize: '50px'}} onClick={quit}>Main Menu</button>
            </div>
        )
    }
}

export default GameEndView