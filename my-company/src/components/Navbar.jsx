import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav>
            <ul>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/services'}>Services</Link>
            </ul>
        </nav>
    )
}

export default Navbar