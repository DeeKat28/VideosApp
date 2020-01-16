import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        if (video.id.channelId) {
            return <VideoItem key={video.id.channelId} video={video} onVideoSelect={onVideoSelect} />
        }
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;