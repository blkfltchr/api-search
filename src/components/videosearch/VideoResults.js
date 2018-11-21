import React from 'react';
import VideoCard from './VideoCard'

const VideoResults = ({videos, onVideoSelect}) => {

    const videosList = videos.map((video) => {
        return (
            <VideoCard 
                onVideoSelect={onVideoSelect} 
                video={video} 
                key={video.id.videoId}
            />
        );
    })

    return <div className="ui relaxed divided list">{videosList}</div>
    
};

export default VideoResults;