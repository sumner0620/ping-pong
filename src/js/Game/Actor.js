import Vector from './Vector'

class Actor {
    constructor (pos, vel, acc) {
        this.pos = pos
        this.vel = vel
        this.acc = acc 
        this.start = new Vector(pos.x, pos.y)
    }
    move = (handleActorCollisions, dt) => {
        this.pos = this.pos.plus(this.vel.times(dt))
        handleActorCollisions(this, dt)
    }
    reset = () => {
        this.pos = new Vector(this.start.x, this.start.y)
    }
    getTop() {}
    getBottom() {}
    getLeft() {}
    getRight() {}
    collidesWith() {}
}

 export default Actor
