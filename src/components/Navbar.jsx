import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" id="about">About</Link></li>
                <li><Link to="/favorites" id="navItems">My Favorites</Link></li>
                <li><Link to="https://www.artic.edu" target="_blanked" id="navItems">Art Resources</Link></li>
                <li><Link to="#login" id="navItems">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;