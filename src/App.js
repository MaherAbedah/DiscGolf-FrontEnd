//Imports will be in separate module in future 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Container from './components/Container';
import NoMatch from './components/404';

import Home from './modules/Home';
import Login from './modules/Login';
import Register from './modules/Register';
import Logout from './modules/Logout';


import "./App.css";

class App extends Component {
	//Sets default state to menu
	state = {}
	//Checks activity of selected item
	handleItemClick = (e, {name}) => this.setState({ activeItem: name})

	render() {

		const { activeItem } = this.state
		
		//Returns data for 'routing' from the const.
		return (
			<div className="App">
				<Menu pointing>
				<Link to="/" name="home"><Menu.Item
							name='home'
							active={activeItem === 'Home'}
							onClick={this.handleItemClick}
							> Home </Menu.Item></Link>

				<Link to="/login" name="login"><Menu.Item
							name='Login'
							active={activeItem === 'Login'}
							onClick={this.handleItemClick}
							> Sign In </Menu.Item></Link>

				<Link to="/register" name="register"><Menu.Item
							name='Registration'
							active={activeItem === 'Register'}
							onClick={this.handleItemClick}
							> Sign Up </Menu.Item></Link>

				<Menu.Menu position='right'>
					<Menu.Item>
					<Link to="/logout" name="logout"><Menu.Item
							name='Logout'
							active={activeItem === 'Logout'}
							onClick={this.handleItemClick}
							>Log out </Menu.Item></Link>
					</Menu.Item>
				</Menu.Menu>
				</Menu>

			<Switch>		
				<Route exact path="/" component={Home} /> 
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/logout" component={Logout} />

				{/*404*/}
				<Route component={NoMatch}/>
			</Switch>

			{/* Prints container module to only show that it exists */}
			<Container/>
			</div>
		)
	}
}

export default App;
