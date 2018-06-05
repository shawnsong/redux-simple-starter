import React from 'react';
import VideoListItem from './video-list-item';


const VideoList = (props) => {
    const { videos } = props;
    const videoItems = videos.map(video => <VideoListItem video={video} key={video.id.videoId} />);

    return (

        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;