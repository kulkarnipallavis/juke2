import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory } from 'react-router';
import Albums from './components/Albums';
import Album from './components/Album';
import {IndexRedirect} from 'react-router';

ReactDOM.render(
<div>
	 <Router history={hashHistory}>
	    <Route path="/" component={AppContainer}>
	    <IndexRedirect to='/albums' />
	    	<Route path="/albums" component={Albums} />
	    	<Route path="albums/:albumId" component={Album} />
	    </Route>
	 </Router>
</div>,
document.getElementById('app')
);
