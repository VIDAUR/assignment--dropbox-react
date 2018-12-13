import React, { Component } from "react";

import Files from "./Files";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameFile: this.props.filesData
    };
  }

  searchByName = (e) => {
    var query = e.target.value.toLowerCase();

    var coincidences = this.props.filesData.filter(function(info) {
    var nameFileInLowerCase = info.name.toLowerCase();

      return nameFileInLowerCase.includes(query);
    });

    this.setState({
      nameFile: coincidences
    });
  }

  
  render() {
    

    return (
      <React.Fragment>

        <input onChange={ this.searchByName } type="search" placeholder="Search..." />
        <Files newFile={ this.state.nameFile } />
       
      </React.Fragment>
    );
  }
}

export default Search;
