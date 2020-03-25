import React from 'react'
import Loop from './Loop'

const withLoop = WrappedComponent => {
    class Container extends React.Component {
        constructor () {
            super()
            this.state = new Loop()
        }
        render() {
            return (
                <WrappedComponent loop={this.state} />
            )
        }
    }
    return Container 
}

export default withLoop