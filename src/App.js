import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import About from './components/About'
import Signup from './components/Signup'
import Signin from './components/Signin'
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/signin">Sign in</Link>
					</li>
					<li>
						<Link to="/signup">Sign up</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
				<GetStarted />
				<Switch>
        
					<Route path="/signin">
						<Signin />
					</Route>
					<Route path="/signup">
							<Signup />
					</Route>
					<Route path="/about">
							<About />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
