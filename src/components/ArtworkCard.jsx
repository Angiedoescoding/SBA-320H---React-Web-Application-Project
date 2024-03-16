const ArtworkCard = ({ artwork }) => {
    return (
    <div className="artwork-card">
        <h3  className="h3Dark">{artwork.title}</h3>
        <p>Artist: {artwork.artist_title}</p>
            <p>Date: {artwork.date_display}</p>
            <p>Details: {artwork.place_of_origin}</p>
            <p>{artwork.description}</p>
    </div>
    )
}

export default ArtworkCard