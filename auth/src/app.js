import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { FirebaseKeys } from './FirebaseKeys';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		/*
		firebase.initializeApp( {
    		apiKey: 'AIzaSyBCe8ci2padQtXJnk4rJp_Y-EvNQmBUyE4',
    		authDomain: 'authentication-73969.firebaseapp.com',
    		databaseURL: 'https://authentication-73969.firebaseio.com',
    		projectId: 'authentication-73969',
    		storageBucket: 'authentication-73969.appspot.com',
    		messagingSenderId: '241448031156'
  		})
  		*/
  		console.log("Firebase keys: " + FirebaseKeys);

  		firebase.initializeApp ( 
  			FirebaseKeys
  		)
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication"/>
				<LoginForm />
			</View>
		)
	}
}

export default App;
