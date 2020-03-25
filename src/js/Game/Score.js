import Observable from '../Utils/Observable'

class Score extends Observable {
    constructor () {
        super()
        this.left = 0
        this.right = 0
        this.winner = null
        this.winningScore = 10
    }
    incrementLeft = () => {
        this.left += 1;
        this.winner = this.isWinner(this.left) ? 'Left' : null
        if (this.winner) this.notify(this)
    }
    incrementRight = () => {
        this.right += 1;
        this.winner = this.isWinner(this.right) ? 'Right' : null
        if (this.winner) this.notify(this)
    }
    reset = () => {
        this.left = 0;
        this.right = 0;
        this.winner = null;
    }
    isWinner = score => {
        return score === this.winningScore
    }
}

export default Score