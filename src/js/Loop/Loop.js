import Observable  from '../Utils/Observable'

class Loop extends Observable {
    constructor () {
        super()
        this.loopID = null
        this.timeStamp = null
    }
    main = time => {
        if (this.timeStamp !== null) {
            let step = Math.min(time - this.timeStamp, 100) / 1000
            this.notify(step)
        }
        this.timeStamp = time
        this.loopID = requestAnimationFrame(this.main)
    }
    run = () => {
        this.main(performance.now())
    }
    stop = () => {
        cancelAnimationFrame(this.loopID)
        this.loopID = null
    }
}

export default Loop
