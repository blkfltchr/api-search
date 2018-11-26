import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div>
                <div class="ui active inverted dimmer" style={{height: "475px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div class="ui medium text loader"><h3>Loading...</h3></div>
                </div>
            </div>
        )
    } 

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <div>
                <div className="ui embed">
                    <iframe
                        src={videoSource} 
                        title="Video player" allowFullScreen
                    />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
};

export default VideoDetail;