import React from 'react';
import './videosearch.css'

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div>
                <div className="ui active inverted dimmer video-detail-loader" style={{paddingTop: "10rem"}}>
                    <div className="ui text loader"><h3>Loading...</h3></div>
                </div>
            </div>
        )
    } 

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`
    const externalLink = `https://www.youtube.com/watch?v=${video.id.videoId}`

        return (
            <div>
                <div className="ui embed">
                    <iframe
                        src={videoSource} 
                        title="Video player" allowFullScreen
                    />
                </div>
                <a target="_blank" href={externalLink} rel="noopener noreferrer">
                    <div className="ui segment">
                        <h4 className="ui header">{video.snippet.title}</h4>
                        <p style={{color: "black"}}>{video.snippet.description}</p>
                    </div>
                </a>
            </div>
        );
};

export default VideoDetail;