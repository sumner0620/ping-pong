import Vector from './Vector'
import Actor from './Actor'

class Ball extends Actor {
    constructor (pos, vel, acc, radius) {
        super(pos, vel, acc)
        this.type = 'ball'
        this.radius = radius
        this.launch()
   
    }
    collidesWith = (collidable, dt) => {
        if (collidable === 'wall') {
            this.pos = this.pos.plus(this.vel.times(-dt)) 
            this.vel.y = -this.vel.y 
        }
        if (collidable === 'net') {
            this.reset()
            this.launch()
        }
        if (collidable === 'paddle') {
            this.pos = this.pos.plus(this.vel.times(-dt))  
            this.vel.x = -this.vel.x
        }
    }
    launch = () => {
        let vel = new Vector(300, 300)
        vel = (Math.random() * 1) > 0.5  ? vel.times(-1) : vel.times(1)
        this.vel = vel
    }
    getTop = () => { 
        return this.pos.y - this.radius
    }
    getBottom = () => { 
        return this.pos.y + this.radius
    }
    getLeft = () => { 
        return this.pos.x - this.radius 
        
    }
    getRight = () => { 
        return this.pos.x + this.radius 
    }


}

export default Ball 
