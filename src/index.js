import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSerach from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyC3TZ6d3pKea0X31l4U3u2u_OlW6vxHvds';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        this.searchVideo = this.searchVideo.bind(this);
        this.searchVideo('surfboards');
    }

    searchVideo(term) {
        YTSerach({ key: API_KEY, term }, (videos) => {
            this.setState({ videos });
            console.log(videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar searchVideo={this.searchVideo} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));