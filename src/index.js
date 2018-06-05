import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSerach from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyC3TZ6d3pKea0X31l4U3u2u_OlW6vxHvds';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.searchVideo = this.searchVideo.bind(this);
        this.searchVideo('');
    }

    searchVideo(term) {
        YTSerach({ key: API_KEY, term }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {
        return (
            <div>
                <SearchBar searchVideo={this.searchVideo} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));