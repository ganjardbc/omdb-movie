import React, { Component } from 'react'

class App extends Component {
    constructor () {
		super()
		this.state = {}
    }

    render () {
        const {cover} = this.props
        return (
            <div className="display-popup">
                <div className="post-middle-absolute">
                    <div style={{maxWidth: 'calc(100% - 100px)', maxHeight: 'calc(100vh - 50px)'}}>
                        <div style={{position: 'absolute', top: -10, right: -10}}>
                            <button className="btn btn-small-icon btn-black btn-small-radius" onClick={() => this.props.onClickClose()}>
                                <i className="fa f-lg fa-times" />
                            </button>
                        </div>
                        <img src={ cover } alt={ cover } />
                    </div>
                </div>
            </div>
        )
    }
}

export default App