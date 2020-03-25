import React from 'react';

class GamePlayView extends React.Component {
    componentDidUpdate() {
        const { pong } = this.props
        const ctx = this.canvas.getContext('2d')
        this.drawGame({ ...pong, ctx })    
    }
    componentDidMount() {
        window.addEventListener('keydown', this.props.handleKeydown)
        window.addEventListener('keyup', this.props.handleKeyup)
        this.props.runLoop()
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.props.handleKeydown)
        window.removeEventListener('keydown', this.props.handleKeyup)
        this.props.stopLoop()
    }
    drawGame = ({ leftPaddle, rightPaddle, ball, size, ctx }) => {
        this.clearCourt({ size, ctx })
        this.drawCourt({ size, ctx })
        this.drawPaddle({ ...leftPaddle, ctx })
        this.drawPaddle({ ...rightPaddle, ctx })
        this.drawBall({ ...ball, ctx })
    }
    drawBall = ({ pos, radius, ctx }) => {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 2 * Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    drawPaddle = ({ pos, size, ctx }) => {
        ctx.fillStyle = "black";
        ctx.fillRect(pos.x, pos.y, size.x, size.y);
    }
    drawCourt = ({ size, ctx }) => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, size.x, size.y);
    }
    clearCourt = ({ size, ctx }) => {
        ctx.clearRect(0, 0, size.x, size.y)
    }
    render() {
        const { size, score } = this.props.pong
        return (
            <div className="container">
                <div className="score">
                    <span>{score.left}</span> | <span>{score.right}</span>
                    <h4>first to 10 wins</h4>
                </div>
                <canvas
                    width={size.x}
                    height={size.y}
                    ref={canvas => { this.canvas = canvas }}>
                </canvas>
                <h4>pause game with the spacebar</h4>
            </div>
        )
    }
}

export default GamePlayView
