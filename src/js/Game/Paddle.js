import Actor from './Actor'
import Vector from './Vector'

class Paddle extends Actor {
    constructor (pos, vel, acc, size, speed) {
        super(pos, vel, acc)
        this.type = 'paddle'
        this.size = size
        this.halfSize = new Vector(size.x/2, size.y/2)
        this.speed = speed
        
    }
    collidesWith = (collidable, dt) => {
        if (collidable === 'wall') { 
            this.pos = this.pos.plus(this.vel.times(-dt))
            this.vel.y = 0 
        }
    }
    moveUp = () => {
        this.vel.y = -this.speed.y
    }
    moveDown = () => {
        this.vel.y = this.speed.y
    }
    stop = () => {
        this.vel.y = 0 
    }
    getMidY = () => {
        return this.pos.y + this.halfSize.y
    }
    getMidX = () => {
        return this.pos.x + this.halfSize.x 
    }
    getTop = () => { 
        return this.pos.y
    }
    getBottom = () => { 
        return this.pos.y + this.size.y 
    }
    getLeft = () => { 
        return this.pos.x 
    }
    getRight = () => { 
        return this.pos.x + this.size.x
    } 
}

export default Paddle 