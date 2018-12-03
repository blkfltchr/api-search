import React from 'react';
import './imagesearch.css'
import unsplash from '../../api/unsplash';
import {NavLink} from 'react-router-dom'
import ImageSearchBar from './ImageSearchBar'
import ImageResults from './ImageResults'

class ImageSearch extends React.Component {
    state = { images: [] }

    componentDidMount() {
        this.onImageSearch('search');
    }
    
    onImageSearch = async (value) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: value },
            
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui">
                <div className="ui">
                    <div className="image-searchbar-wrapper">
                        <ImageSearchBar onImageSearch={this.onImageSearch} />
                        <div className="ui nav-wrapper">
                            <NavLink exact onClick={e => this.setState({searchType: 'all'})} activeStyle={{ textDecoration: 'underline' }} to="/" className="nav-element">Home</NavLink>    
                            <NavLink onClick={e => this.setState({searchType: 'image'})} activeStyle={{ textDecoration: 'underline' }} to="/images" className="nav-element">Images</NavLink>
                            <NavLink onClick={e => this.setState({searchType: 'video'})} activeStyle={{ textDecoration: 'underline' }} to="/videos" className="nav-element">Videos</NavLink>
                        </div>
                    </div>
                </div>
                <ImageResults images={this.state.images} />
            </div>
        );
    }
};
 
export default ImageSearch;