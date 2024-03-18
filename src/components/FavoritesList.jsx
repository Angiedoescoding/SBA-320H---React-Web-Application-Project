// Need to pass the favorites list as props to this component to display the LIST of FAVS to the user
    // When is favorited, add it to the favorites list; when unfavorited - remove from the fav list
    // Accessing the list through a button/link

    const FavoritesList = ({ favorites }) => {
        const favsToDisplay = favorites || [];      // checking if favorites is undefined (console Uncaught TypeError error) or null and provide any fallback value to show/use

        return (
            <div className="favs-list">
                <h2>My Favorite Art List</h2>
                <ul>
                {Array.isArray(favsToDisplay) && favsToDisplay.map((favorite, index) => (             // map through the favorites array  and render each favorite artwork as a list item
                        <li key={index}>{favorite.title}</li>
                    ))}
                </ul>
            </div>
        );
    }

    export default FavoritesList;