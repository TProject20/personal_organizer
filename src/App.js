
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetStarted from "./components/GetStarted";
// import About from "./components/About";
// import Signup from "./components/Signup";
// import Signin from "./components/Signin";

import HomePage from './components/HomePage/index';
import "./App.css";
import fire from "./config/fire";
class App extends Component {
	constructor(){
		super();
		this.state = {
			user: null
		}
	}

	componentDidMount(){
		this.authListener()
	}
	authListener(){
		fire.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({user});
			}else{
				this.setState({user:null});
			}
		});
	}
		
	
   render() {
	return (
		<Router>
			<div className="App">
				
				<ul>
					<li> <Link to="/">Home</Link> </li>
					<li>
						<Link to="/signin">Sign in</Link>
					</li>
					<li>
						<Link to="/signup">Sign up</Link>
					</li>
					{/* <li>
						<Link to="/about">About</Link>
					</li> */}
				</ul>
				
				<Switch>
					<Route path='/' exact component={GetStarted}/>
					<Route path="/signin" component={HomePage}/>
					{/* <Route path="/about" component={Login} /> */}
				</Switch>
			</div>
		 </Router>
	);
}
}

export default App;
