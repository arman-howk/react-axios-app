import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }

        this.logMousePosition = this.logMousePosition.bind(this)
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    logMousePosition(e) {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }
    
    render() {
        return (
            <div>
                <div>
                    X: {this.state.x}
                    Y: {this.state.y}
                </div>
            </div>
        )
    }
}

export default ClassMouse
