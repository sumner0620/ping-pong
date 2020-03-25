class Vector {
    constructor (x, y) {
        this.x = x
        this.y = y 
    }
    plus = vector => {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }
    times = factor => {
        return new Vector(this.x * factor, this.y * factor)
    }
}

export default Vector