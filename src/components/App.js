import React from 'react';
import ImageSearch from './imagesearch/ImageSearch'
import VideoSearch from './videosearch/VideoSearch'
import {Route, Link} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <div className="ui container">
                <div className="ui segment">
                    <Link to="/images">Images</Link>
                    <Link to="/videos">Videos</Link>
                </div>
            </div>
            <Route exact path="/images" component={ImageSearch}/>
            <Route exact path="/videos" component={VideoSearch}/>
        </div>
    )
}

export default App