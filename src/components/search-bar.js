import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        const { searchVideo } = props;
        this.state = {
            searchTerm: '',
        }

        this.onInputChange = this.onInputChange.bind(this);
    };

    onInputChange(value) {
        this.setState({searchTerm: event.target.value});
        this.props.searchVideo(value);
    };

    render() {
        return (
        <div>
            <input value={this.state.searchTerm}
                onChange={event => this.onInputChange(event.target.value)} />
        </div>);
    }
}

export default SearchBar;