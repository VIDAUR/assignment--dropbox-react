import React, {Component} from 'react';

import Search from "./Search";

class Home extends Component{
	render() {

		return( 
				<Search filesData = {this.props.filesData}/>		
		);
	}
}

export default Home;