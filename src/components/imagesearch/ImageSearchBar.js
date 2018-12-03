import React from 'react'
import {NavLink} from 'react-router-dom'
import './imagesearch.css'

class ImageSearchBar extends React.Component {
    state = {value: ''}    
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onImageSearch(this.state.value);
    }

    render() {
        return (
            <div className="image-searchbar-wrapper">
                <div className="ui container image-searchbar">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="ui icon input image-searchbar-input">
                            <input 
                                style={{borderRadius:"15px"}} 
                                type="text" 
                                placeholder="Search images..." 
                                value={this.state.value}
                                onChange={e => this.setState({value: e.target.value})}
                            />
                            <i className="search icon"></i>
                        </div>
                    </form>
                </div>
                <div className="ui nav-wrapper">
                    <NavLink exact onClick={e => this.setState({searchType: 'all'})} activeStyle={{ textDecoration: 'underline' }} to="/" className="nav-element">Home</NavLink>    
                    <NavLink onClick={e => this.setState({searchType: 'image'})} activeStyle={{ textDecoration: 'underline' }} to="/images" className="nav-element">Images</NavLink>
                    <NavLink onClick={e => this.setState({searchType: 'video'})} activeStyle={{ textDecoration: 'underline' }} to="/videos" className="nav-element">Videos</NavLink>
                </div>
            </div>
        );
    }
};
 
export default ImageSearchBar;