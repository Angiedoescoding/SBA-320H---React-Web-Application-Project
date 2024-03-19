## Art Explorer - A React Application for Art Enthusiasts school students

<p>This project aims to create a fun and engaging React web application for school students to explore the world of Art. It utilizes the open API provided by The Art Institute of Chicago (https://api.artic.edu/).</p>

<hr>

#### Project map:

<p>src/</p>
<ul>
    <li>components/</li>
        <ul>
            <li>Navbar.jsx</li>
            <li>MainPage.jsx</li>
            <li>ArtworkCard.jsx</li>
            <li>SearchFilter.jsx</li>
            <li>Toggle.jsx</li>
        </ul>
    <li>services/</li>
        <ul>
            <li>ApiService.jsx</li>
        </ul>
    <li>App.jsx</li>

#### Technologies Used

<ol>
    <li>React.js: A JavaScript library for building user interfaces.</li>
    <li>React Router: For handling navigation within the web application.</li>
    <li>Axios: For making HTTP requests to fetch data from the Art Institute of Chicago API.</li>
    <li>CSS: For styling the components and layout of the web application.</li>
</ol>

#### Getting Started

To run the project locally, follow these steps:

<ol>
    <li>Clone this repository to your local machine.</li>
    <li>Navigate to the project directory in your terminal.</li>
    <li>Install the dependencies by running `npm install`. For this project the VITE technology was used (`npm create vite@latest .`  >> Y) and then - `npm install`.</li>
    <li>Run `npm run dev` to run the server.</li>
    <li>Open your browser and navigate to the local host link provided in the terminal to view the web application.</li>
</ol>

#### Project Features:

- View a curated collection of artworks from different artists and time periods.
- Learn about the history of art through brief descriptions and artwork cards.
- Search for artists and artworks using the provided search functionality.
- Toggle between light and dark modes for better viewing experience.
- Add your favorite artworks to a personalized favorites list.
- Remove artworks from the favorites list.
- View and manage your favorite artworks on the "My Favorites" page.

<hr>

#### Project Description:

<h2>Navbar Component:</h2>
<ul>
<li>Contains links to different sections: About, Schedule, Art Resources, and Login Form.</li>
<li>Will be a separate React component.</li>
</ul>

<h2>Main Page Component:</h2>
<ul>
<li>Contains general info about Art and a section for displaying artworks.</li>
<li>Will be a separate React component.</li>
</ul>

<h2>Artwork Card Component:</h2>
<ul>
<li>Displays individual artworks.</li>
<li>Will be a separate React component.</li>
</ul>

<h2>Search/Filter Component:</h2>
<ul>
<li>Allows users to search for artists or artworks.</li>
<li>Will be a separate React component.</li>
</ul>

<h2>Toggle Component:</h2>
<ul>
<li>Allows users to switch between light and dark mode.</li>
<li>Will be a separate React component.</li>
</ul>

#### Acknowledgements:

- Art Institute of Chicago API: [API Documentation](https://api.artic.edu/docs/#introduction).
- React Icons (for any icons implementation in your project): [React Icons](https://react-icons.github.io/react-icons/).
- React Slick Carousel library: [for carousel styling](https://kenwheeler.github.io/slick/).

##### Created by Angelica V, March 2024.
