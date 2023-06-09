import React from 'react';
import './Gallery.css'

function Gallery() {
    const images = [
    
    ];

    return (
        <div>
        <h2>Gallery</h2>
        <div className="image-grid">
            {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
        </div>
        </div>
    );
}

export default Gallery;
