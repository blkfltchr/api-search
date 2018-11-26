import React from 'react';

import ImageSearchBar from './imagesearch/ImageSearchBar'
import VideoSearchBar from './videosearch/VideoSearchBar'

class SearchBar extends React.Component {

    render() {
        if (this.props.searchType === 'all') {
            return (
                <div className="ui container" style={{paddingTop: "1rem"}}>
                    <form className="ui form">
                        <div className="ui icon input" style={{width: "100%"}}>
                            <input style={{borderRadius:"15px"}} 
                                type="text" 
                                placeholder="Search..." 
                            />
                            <i className="search icon"></i>
                        </div>
                    </form>
                </div>
            );
        } else if (this.props.searchType === 'image') {
            return(
                <ImageSearchBar />
            )
        } else if (this.props.searchType === 'video') {
            return (
                <VideoSearchBar />
            )
        }
    }
}

export default SearchBar