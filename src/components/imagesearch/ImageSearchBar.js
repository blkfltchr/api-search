import React from 'react'
import './imagesearch.css'

class ImageSearchBar extends React.Component {
    state = {value: ''}    
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onImageSearch(this.state.value);
    }

    render() {
        return (
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
        );
    }
};
 
export default ImageSearchBar;