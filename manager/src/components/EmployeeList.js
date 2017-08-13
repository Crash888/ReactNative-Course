import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);

		}

	componentWillReceiveProps(nextProps) {
		//  nextProps are the next set of props that the component
		//  will be rendered with.
		//  this.props is still the old set of props
		this.createDataSource(nextProps);
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})

		this.dataSource = ds.cloneWithRows(employees);
	}

	renderRow(employee) {
		return <ListItem employee={employee} />;
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			>

			</ListView>
		)
	}
}

const mapStateToProps = state => {
	//  This converts our object from firebase into an array
	//  for use with the ListView
	const employees = _.map(state.employees, (val, uid) => {
		return { 
			...val,
			uid
		} 
	})

	return { employees };
}

export default connect(
	mapStateToProps,
	{
		employeesFetch
	}
)(EmployeeList);
