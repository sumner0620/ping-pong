import React from 'react'

class TextCarousel extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    iterate = newCount => {
        this.props.onClick({ target: this.props.items[newCount] })
        this.setState({ count: newCount })
    }
    next = () => {
        let { count } = this.state
        if (this.hasNext()) {
            count += 1
            this.iterate(count)
        }
    }
    hasNext = () => {
        let { count } = this.state
        return this.props.items[count + 1] !== undefined
    }
    prev = () => {
        let { count } = this.state
        if (this.hasPrev()) {
            count -= 1
            this.iterate(count)
        }
    }
    hasPrev = () => {
        let { count } = this.state
        return this.props.items[count - 1] !== undefined
    }
  
    render() {
        let { count } = this.state
        return (
            <div className="carousel" >
                <button onClick={this.prev}><i className="fas fa-arrow-left"></i></button>
                <h3 className="item">{this.props.items[count].textContent}</h3>
                <button onClick={this.next}><i className="fas fa-arrow-right"></i></button>
            </div>
        )
    }
}

export default TextCarousel