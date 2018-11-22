import React from 'react';
import ImageCard from './ImageCard'
import './imagesearch.css'

const ImageResults = ({images}) => {

    const imagesList = images.map((image) => {
        return (
            <ImageCard 
                key={image.id} 
                image={image} 
            />
        );
    })

    return <div className="image-list">{imagesList}</div>
    
};

export default ImageResults;