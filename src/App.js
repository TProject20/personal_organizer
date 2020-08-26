// import { Header } from "./Expense/Header";
// import { Balance } from "./Expense/Balance";
// import { IncomeExpenses } from "./Expense/IncomeExpenses";
// import './exp.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Register from "./components/Register/index";
import Login from "./components/Login/index";
import HomePage from "./components/HomePage/index";
import Dashboard from "./components/Dashboard/index";
import "./App.css";
import firebase from "./components/firebase";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import List from "./TodoList/List";
import About from './components/About'



const theme = createMuiTheme();

export default function App() {
	const [firebaseInitialized, setFirebaseInitialized] = useState(false);

	useEffect(() => {
		firebase.isInitialized().then((val) => {
			setFirebaseInitialized(val);
		});
	});

	return firebaseInitialized !== false ? (
		
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div className="App">
					<Switch>
						<Route path="/" exact component={GetStarted} />
						<Route path="/home" component={HomePage} />
						<Route path="/register" component={Register} />
						<Route path="/signin" component={Login} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/list" component={List} />
						<Route path="/about" component={About} />
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
		
	) : (

		<div id="loader">
			<CircularProgress />
		</div>
		
	);

}
// class App extends Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			user: null
// 		}
// 	}

// 	componentDidMount(){
// 		this.authListener()
// 	}
// 	authListener(){
// 		fire.auth().onAuthStateChanged((user) => {
// 			if(user){
// 				this.setState({user});
// 			}else{
// 				this.setState({user:null});
// 			}
// 		});
// 	}

//    render() {
// 	return (
// 		<Router>
// 			<div className="App">
// 				<Switch>
// 					<Route path='/' exact component={GetStarted}/>
// 					<Route path="/signin" component={HomePage}/>
// 					<Route path="/signup" component={Register} />
// 				</Switch>
// 			</div>
// 		 </Router>
// 	);
// }
// }
