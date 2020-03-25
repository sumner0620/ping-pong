import React from 'react'

class ConfigView extends React.Component {
    render() {
        const { quit } = this.props
        return (
            <div className="container">
                <h2>Controls</h2>
                <h4>left-paddle-up: w</h4>
                <h4>left-paddle-down: s</h4>
                <h4>right-paddle-up: up-arrow</h4>
                <h4>right-paddle-down: down-arrow</h4>
                <button onClick={quit}>Main Menu</button> 
            </div>
        )
    }
}

export default ConfigView