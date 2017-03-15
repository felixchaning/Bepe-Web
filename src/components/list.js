import React, { Component } from 'react';

class List extends Component {
	render () {
		return (
			<li >
				<a href={this.props.url} target='_blank'><img src={this.props.covers} /></a>
				<h4>{this.props.name}</h4>
				<p>Artist: {this.props.owners}</p>
				<p>Flieds: {this.props.fields}</p>
			</li>
		);
	}
}

List.defaultProps = {
	name: 'Need data.'
}

export default List