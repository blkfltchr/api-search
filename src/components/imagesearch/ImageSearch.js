import React from 'react';
import unsplash from '../../api/unsplash';

import SearchBar from './SearchBar'
import ImageResults from './ImageResults'

class ImageSearch extends React.Component {
    state = { images: [] }

    componentDidMount() {
        this.onSearchSubmit('search');
    }
    
    onSearchSubmit = async (value) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: value },
            
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:"1rem"}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageResults images={this.state.images} />
            </div>
        );
    }
};
 
export default ImageSearch;