import React from 'react';
import './imagesearch.css'
import ImageCard from './ImageCard'

const ImageResults = props => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    })

    return <div className="image-list">{images}</div>
    
};

export default ImageResults;