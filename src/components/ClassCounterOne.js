import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }

    componentDidMount() {
        document.title = `button is ${this.state.count} times clicked`
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.count !== this.state.count){
            console.log("updateing document title")
            document.title = `button is ${this.state.count} times clicked`
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState(prevState => { return { count: prevState.count + 1 }}) }>Click</button>
            </div>
        )
    }
}

export default ClassCounterOne
