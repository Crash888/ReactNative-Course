import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

	constructor() {
		super();

		if (Platform.OS === 'android') {
      		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    	}
	}

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{flex: 1}}>
						{library.description}
					</Text>
				</CardSection>
			)
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state, ownProps) => {

	const expanded = state.selectedLibraryId === ownProps.library.id;

	return {
		expanded
	}
};

/*  This is the longer way of doing mapping actions
   to the component
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectLibrary: actions.selectLibrary
	}, dispatch)
}

export default connect(
	null,
	mapDispatchToProps	
)(ListItem);
*/

//  Here is the shorter version.  Just specify actions
export default connect(
	mapStateToProps,
	actions
)(ListItem);


