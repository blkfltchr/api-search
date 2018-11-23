import React from 'react';
import unsplash from '../../api/unsplash';

// import ImageSearchBar from './ImageSearchBar'
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
            <div className="ui container" style={{marginTop:"1rem"}}>
                {/* <ImageSearchBar onImageSearch={this.onImageSearch} /> */}
                <ImageResults images={this.state.images} />
            </div>
        );
    }
};
 
export default ImageSearch;