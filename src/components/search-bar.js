import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
    };

    onInputChange(event) {
        this.setState({searchTerm: event.target.value});
    };

    render() {
        return (
        <div>
            <input value={this.state.searchTerm}
                onChange={this.onInputChange} />
        </div>);
    }
}

export default SearchBar;