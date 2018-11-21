import React from 'react';
import youtube from '../../api/youtube'
import SearchBar from './SearchBar'
import VideoResults from './VideoResults'
import VideoDetail from './VideoDetail';

class VideoSearch extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null 
    };

    componentDidMount() {
        this.onVideoSearch('funny videos');
    }

    onVideoSearch = async value => {
        const response = await youtube.get('/search', {
            params: {
                q: value
            }
        });

        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() { 
        return ( 
            <div className="ui container" style={{marginTop:"1rem"}}>
                <SearchBar onVideoSearch={this.onVideoSearch}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoResults 
                                videos={this.state.videos} 
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default VideoSearch;