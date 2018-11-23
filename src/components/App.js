import React from 'react';
import {Route, Link} from 'react-router-dom'
import ImageSearch from './imagesearch/ImageSearch'
import VideoSearch from './videosearch/VideoSearch'

class App extends React.Component {
    state = {
        searchType: ''
    }

    render() {
        return (
            <div>
                <div className="ui container">
                    <div className="ui segment">
                        <Link to="/">Home</Link>    
                        <Link onClick={e => this.setState({searchType: 'image'})} to="/images">Images</Link>
                        <Link onClick={e => this.setState({searchType: 'video'})} to="/videos">Videos</Link>
                    </div>
                </div>
                <Route exact path="/images" component={ImageSearch}/>
                <Route exact path="/videos" component={VideoSearch}/>
            </div>
        )
    }
}

export default App