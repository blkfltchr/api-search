import React from 'react';
import VideoCard from './VideoCard'

const VideoResults = ({videos, onVideoSelect}) => {

    const videosList = videos.map((video) => {
        return (
            <VideoCard 
                key={video.id.videoId}
                video={video} 
                onVideoSelect={onVideoSelect} 
            />
        );
    })

    return <div className="ui relaxed divided list">{videosList}</div>
    
};

export default VideoResults;