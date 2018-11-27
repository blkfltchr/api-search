import React from 'react';
import {Route} from 'react-router-dom'
import ImageSearch from './imagesearch/ImageSearch'
import VideoSearch from './videosearch/VideoSearch'
import SearchBar from './SearchBar'
import './app.css'

class App extends React.Component {
    state = {
        searchType: 'all'
    }

    render() {
        return (
            <div>
                <Route exact path="/" component={SearchBar} />
                <Route exact path="/images" component={ImageSearch}/>
                <Route exact path="/videos" component={VideoSearch}/>
            </div>
        )
    }
}

export default App