import showtime from "./ShowTime.jpg";
import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <header className="Header">
            <img src={showtime} alt="" style={{ width: '41%'}}/>
        <nav className="navbar">
        
            <div> <h1>Its Show Time!! 🍿🎬</h1></div>
            <div className="links">
            
                <Link to = "/" style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>Home</Link>
                <Link to="/about" style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>About us</Link>
                <a href="/" style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>Contact</a>
                <a href="/" style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>New Blog</a>
            </div>
        </nav>
        </header>
     );
}
 
export default Navbar;