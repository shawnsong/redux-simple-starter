import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyC3TZ6d3pKea0X31l4U3u2u_OlW6vxHvds';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));