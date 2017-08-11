import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';


import { FirebaseKeys } from './FirebaseKeys';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	
	componentWillMount() {
  		firebase.initializeApp ( 
  			FirebaseKeys
  		)	
  	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App;
