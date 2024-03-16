import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import ApiService from '../services/ApiService';
import Carousel from './Carousel';

const MainPage = () => {

    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.fetchArtworks();
                setArtworks(data);
            } catch (error) {
                setError(error.message);

            }
        };

        fetchData();
    }, []);



    if (error) {
        return <div>Error: {error}</div>;
    }

    
    return (
        <main>
            <section id="artworks">
                <h2>Welcome to the Art class</h2>
                <div className="artworks-container">
                {artworks.map(artwork => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </div>
            </section>

            

            <section id="carousel">
                <h2>Art Carousel</h2>
                <Carousel artworks={artworks} />
            </section>
        </main>
    );
}
export default MainPage;
