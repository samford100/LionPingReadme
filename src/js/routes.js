import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import ReactDOM from 'react-dom'
import Home from './components/Home.js'


class Routes extends React.Component {
  render() {
	return (
	  <div>
  		<Router history={hashHistory}>
  		  <Route path='/' component={Container}>
  			<IndexRoute component={Home} />
        <Route path='*' component={Home} />
  		  </Route>
  		</Router>
	  </div>
	)
  }
};

class Container extends React.Component {
  render() {
  	return (
  	  <div>
  			{this.props.children}
  	  </div>
  	)
  }
}



class NotFound extends React.Component {
  render() {
	return <h1>NOT FOUND</h1>
  }
}


export default Routes;
