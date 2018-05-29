import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Repository from './Repository';
import NotFound from './NotFound';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route exact path="/repository/repositoryID" component={Repository}/>
				<Route exact component={NotFound}/>
			</Switch>
		</BrowserRouter>
		)
}

export default Router;