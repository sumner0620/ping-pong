class Observable {
    constructor () {
        this.observers = []
    }
    subscribe = obs => {
        this.observers.push(obs)
    }
    unsubscribe = obs => {
        this.observers.splice(this.observers.indexOf(obs), 1)
    }
    unsubscribeAll = () => {
        this.observers.splice(0, this.observers.length)
    }
    notify = args => {
        for (let i = 0; i < this.observers.length; i++) {
            let obs = this.observers[i]
            obs(args)
        }
    }
}

export default Observable
