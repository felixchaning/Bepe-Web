import React, { Component } from 'react';
import List from '../components/list';

let dataString = [];
class ListContainer extends Component {
	render () {
		return (
			<ul className='main-list'>
				{
					this.props.data.map(
						(item) => {
							return  <List
										url={item.url} 
										name={item.name} 
										fields={item.fields}
										owners={item.owners[0].display_name}
										covers={item.covers['404']}
										views={item.stats.views}
										create={item.created_on}
									/>
						}
					)
				}
			</ul>
		)
	}
}

export default ListContainer

