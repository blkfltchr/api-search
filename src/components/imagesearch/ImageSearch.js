import React from 'react';
import './imagesearch.css'
import unsplash from '../../api/unsplash';
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
                    <ImageSearchBar onImageSearch={this.onImageSearch} />
                </div>
                <ImageResults images={this.state.images} />
            </div>
        );
    }
};
 
export default ImageSearch;