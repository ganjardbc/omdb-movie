import React, { Component } from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'

// pages
import Home from './home/Index'
import Detail from './detail/Index'

class App extends Component {
	constructor () {
		super()
		this.state = {}
	}

	render () {
		return (
			<HashRouter history={ Router.browserHistory }>
				<div id="app">
					<div id="body" className="main-screen">
						<Route exact path="/" component={ Home } />
						<Route exact path="/detail/:url" component={ Detail } />
					</div>
				</div>
			</HashRouter>
		)
	}
}

export default App;
