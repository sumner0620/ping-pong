import Paddle from './Paddle'
import Score from './Score'
import Ball from './Ball'
import Vector from './Vector'
import AI from './AI'
import Observable from '../Utils/Observable'

class Pong extends Observable {
    constructor(size) {
        super()
        this.size = size 

        this.score = new Score()
        
        this.ai = null
        this.leftPaddle = null 
        this.rightPaddle = null 
        this.ball = null
        
        this.actors = null
    }
    setEasyMode = () => {
        this.ai.errorFactor = 0.30
    }
    setMediumMode = () => {
        this.ai.errorFactor = 0.15
    }
    setHardMode = () => {
        this.ai.errorFactor = 0.05
    }
    setOnePlayerMode = () => {
        this.subscribe(this.ai.calculate)
    }
    setTwoPlayerMode = () => {
        this.unsubscribeAll()
    }
    init = () => {
        this.createLeftPaddle()
        this.createRightPaddle()
        this.createBall()
        this.createAI()
        this.createActors()
        this.setOnePlayerMode()
        this.setEasyMode()
    }
    createLeftPaddle = () => {
        const pos = new Vector(0, this.size.y/2), 
              vel = new Vector(0, 0),
              acc = new Vector(0, 0),
              size = new Vector(10, 80), 
              speed = new Vector(0, 300)
        
              this.leftPaddle = new Paddle(pos, vel, acc, size, speed)
    }
    createRightPaddle = () => {
       const pos = new Vector(this.size.x - 10, this.size.y/2), 
             vel = new Vector(0, 0),
             acc = new Vector(0, 0),
             size = new Vector(10, 80), 
             speed = new Vector(0, 300)
        
             this.rightPaddle = new Paddle(pos, vel, acc, size, speed)
    }
    createBall = () => {
        const pos = new Vector(this.size.x/2, this.size.y/2),
              vel = new Vector(0, 0),
              acc = new Vector(50, 30),
              radius = 5
        
              this.ball = new Ball(pos, vel, acc, radius)
    }
    createAI = () => {
        this.ai = new AI(this.rightPaddle, this.ball)    
    }
    createActors = () => {
        this.actors = new Array(this.leftPaddle, this.rightPaddle, this.ball)
    }
    reset = () => {
        this.leftPaddle.reset()
        this.rightPaddle.reset()
        this.ball.reset()
        this.score.reset()
        this.ai.reset()
        this.init()
    }
    handlePaddleCollisions = (paddle, dt) => {
        this.detectWallCollision(paddle, dt)
    }
    handleBallCollisions = (ball, dt) => {
        this.detectWallCollision(ball, dt)
        this.detectNetCollision(ball, dt)
        this.detectLeftPaddleCollision(ball, dt)
        this.detectRightPaddleCollision(ball, dt)
    }
    detectWallCollision = (actor, dt) => {
        if (actor.getTop() < 0 ) {
            actor.collidesWith('wall', dt)
        }
        if (actor.getBottom() > this.size.y) {
            actor.collidesWith('wall', dt)
        }
    }
    detectNetCollision = (actor, dt) => {
        if (actor.getLeft() < 0) {
            this.score.incrementRight()
            actor.collidesWith('net', dt)
        }
        if (actor.getRight() > this.size.x) {
            this.score.incrementLeft()
            actor.collidesWith('net', dt)
        } 
    }
    detectLeftPaddleCollision = (actor, dt) => {
        if (
            actor.getLeft() < this.leftPaddle.getRight() &&
            actor.getTop() < this.leftPaddle.getBottom() &&
            actor.getBottom() > this.leftPaddle.getTop() &&
            actor.getRight() > this.leftPaddle.getLeft()
        ) {
            actor.collidesWith('paddle', dt)
            
        } 
    }
    detectRightPaddleCollision = (actor, dt) => {
        if (
            actor.getRight() > this.rightPaddle.getLeft() &&
            actor.getTop() < this.rightPaddle.getBottom() &&
            actor.getBottom() > this.rightPaddle.getTop() &&
            actor.getLeft() < this.rightPaddle.getRight()
        ) {
            actor.collidesWith('paddle', dt)
        } 
    }
    
    update = dt => {
        this.notify()
        
        this.actors
        .filter(actor => actor.type === 'paddle')
        .forEach(paddle => {
            paddle.move(this.handlePaddleCollisions, dt)
        })

        this.actors
        .filter(actor => actor.type === 'ball')
        .forEach(ball => {
            ball.move(this.handleBallCollisions, dt)
        })
    }
}

export default Pong
