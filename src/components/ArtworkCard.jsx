// Testing an additional requirement - to allow the user to add the artwork to their favorite to meet the useState requirement (to manage the sate of whether an artwirk is favorited by a user and to keep the choice of fav artworks across sessions and updating the UI to reflect the changes)

// npm i react-icons

import { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const ArtworkCard = ({ artwork }) => {

    // State to track whether artwork is favorited
    const [isFavorite, setIsFavorite] = useState(false);
    
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);

        if (isFavorite) {
            console.log(`Removed the "${artwork.title}" from favorites.`);
        } else {
            console.log(`Added the "${artwork.title}" to favorites.`)
        }
    };

    return (
    <div className="artwork-card">
        <h3  className="h3Dark">{artwork.title}</h3>
        <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/100,/0/default.jpg`} alt={artwork.title} />
        <p>Artist: {artwork.artist_title}</p>
            <p>Date: {artwork.date_display}</p>
            <p>Details: {artwork.place_of_origin}</p>
            <p>{artwork.description}</p>

        <button onClick={toggleFavorite}>
            <FaHeart color={isFavorite ? 'red' : 'gray'} />
        </button>
    </div>
    )
}

export default ArtworkCard