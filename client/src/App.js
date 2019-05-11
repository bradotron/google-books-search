import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Search from './Pages/Search';
import Saved from './Pages/Saved';
import NoMatch from './Pages/NoMatch';

function App() {
	return (
		<div classNameName="container">
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="/">
						Home
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">

							<li className="nav-link">
								<Link to="/search">Search</Link>
							</li>
							<li className="nav-link">
								<Link to="/saved">Saved</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div>
					<hr />
					<Switch>
						<Route exact path="/" component={Search} />
						<Route path="/search" component={Search} />
						<Route path="/saved" component={Saved} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
