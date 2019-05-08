import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Search from './Pages/Search';
import Saved from './Pages/Saved';
import NoMatch from './Pages/NoMatch';
import HookExample from './HookExample';
import ExpressTest from './ExpressTest';

function App() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
					<li>
						<Link to="/saved">Saved</Link>
					</li>
				</ul>
				<h1>Hello, World</h1>
				<HookExample />
				<ExpressTest />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/search" component={Search} />
					<Route path="/saved" component={Saved} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
