import React from 'react';
import {Route, NavLink} from 'react-router-dom'
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
                <div className="ui">
                    <div style={{backgroundColor: "#F6F9FC", borderBottom: "solid 1px lightgrey"}}>
                        <SearchBar searchType={this.state.searchType}/>
                        <div className="ui nav-wrapper">
                            <NavLink exact onClick={e => this.setState({searchType: 'all'})} activeStyle={{ textDecoration: 'underline' }} to="/" className="nav-element">Home</NavLink>    
                            <NavLink onClick={e => this.setState({searchType: 'image'})} activeStyle={{ textDecoration: 'underline' }} to="/images" className="nav-element">Images</NavLink>
                            <NavLink onClick={e => this.setState({searchType: 'video'})} activeStyle={{ textDecoration: 'underline' }} to="/videos" className="nav-element">Videos</NavLink>
                        </div>
                    </div>
                </div>
                <Route exact path="/images" component={ImageSearch}/>
                <Route exact path="/videos" component={VideoSearch}/>
            </div>
        )
    }
}

export default App