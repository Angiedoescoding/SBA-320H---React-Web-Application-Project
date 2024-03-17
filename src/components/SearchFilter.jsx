import { useState } from 'react';
import ApiService from '../services/ApiService';

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await ApiService.searchArtist(searchTerm);
            setSearchResult(result);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div>
            <input
                type="text"
                id='search'
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />

            <button onClick={handleSearch} id='searchBtn'>Search</button> 

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {searchResult && (
                <div>
                    {/* Render search results here */}
                </div>
            )}
        </div>
    );
}

export default SearchFilter;