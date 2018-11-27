import React from 'react';
import youtube from '../../api/youtube'
import {NavLink} from 'react-router-dom'
import VideoSearchBar from './VideoSearchBar'
import VideoResults from './VideoResults'
import VideoDetail from './VideoDetail';

class VideoSearch extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null 
    };

    componentDidMount() {
        this.onVideoSearch('search');
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
            <div className="ui">
            <div className="ui">
                    <div style={{backgroundColor: "#F6F9FC", borderBottom: "solid 1px lightgrey", marginBottom:"1rem"}}>
                    <VideoSearchBar onVideoSearch={this.onVideoSearch}/>
                        <div className="ui nav-wrapper">
                            <NavLink exact onClick={e => this.setState({searchType: 'all'})} activeStyle={{ textDecoration: 'underline' }} to="/" className="nav-element">Home</NavLink>    
                            <NavLink onClick={e => this.setState({searchType: 'image'})} activeStyle={{ textDecoration: 'underline' }} to="/images" className="nav-element">Images</NavLink>
                            <NavLink onClick={e => this.setState({searchType: 'video'})} activeStyle={{ textDecoration: 'underline' }} to="/videos" className="nav-element">Videos</NavLink>
                        </div>
                    </div>
                </div>
                <div className="ui container">
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
            </div>
         );
    }
}
 
export default VideoSearch;