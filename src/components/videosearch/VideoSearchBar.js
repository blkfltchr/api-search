import React from 'react'
import './videosearch.css'

class SearchBar extends React.Component {
    state = {value: ''}
    
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onVideoSearch(this.state.value);
    }

    render() {
        return (
            <div className="ui container video-searchbar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui icon input video-searchbar-input">
                        <input 
                            style={{borderRadius: "15px"}} 
                            type="text" 
                            placeholder="Search videos..." 
                            value={this.state.value}
                            onChange={e => this.setState({value: e.target.value})}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
};
 
export default SearchBar;