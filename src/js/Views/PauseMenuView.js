import React from 'react'

class PauseMenuView extends React.Component {
    render() {
        const { quit, play } = this.props;
        return (
            <div className="container">
                <h1>Paused</h1>
                <button onClick={play}>Resume</button>
                <button onClick={quit}>Quit</button>
            </div>
        )
    }
}

export default PauseMenuView