import React, {Component} from 'react';

import File from "./File";

class Files extends Component{
	render() {

		return( 
			<ul>
					{this.props.newFile.map(function(Info) {
	          		return <File  infoName = {Info.name}
	          					  infoType = {Info.category}
	          					  infoDate = {Info.added_at} /> 

	           			}) 
					}
			</ul>
		);
	}
}

export default Files;