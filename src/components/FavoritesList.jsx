// Need to pass the favorites list as props to this component to display the LIST of FAVS to the user
    // When is favorited, add it to the favorites list; when unfavorited - remove from the fav list
    // Accessing the list through a button/link

import { useEffect, useState } from 'react';

const FavoritesList = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // retrieving favorites from the localStorage
        const savedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavs);
    }, []);

    const removeFavs = (i) => {
        // removing a specific item
        const updatedFavItem = [...favorites];
        updatedFavItem.splice(i, 1);
        setFavorites(updatedFavItem);

        // update localStorage then
        localStorage.setItem('favorites', JSON.stringify(updatedFavItem));
    }

    return (
        <div className="favs-list">
                <h2>My Favorite Art List</h2>
                <ul>
                 {favorites.map((favorite, i) => (             // map through the favorites array  and render each favorite artwork as a list item
                        <li key={i}>{favorite.title}
                        <button onClick={() => removeFavs(i)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            );
    }


    export default FavoritesList;


// Old - before the office hours help
    // const FavoritesList = ({ favorites }) => {
    //     const favsToDisplay = favorites || [];      // checking if favorites is undefined (console Uncaught TypeError error) or null and provide any fallback value to show/use

    //     return (
    //         <div className="favs-list">
    //             <h2>My Favorite Art List</h2>
    //             <ul>
    //             {Array.isArray(favsToDisplay) && favsToDisplay.map((favorite, index) => (             // map through the favorites array  and render each favorite artwork as a list item
    //                     <li key={index}>{favorite.title}</li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // }
