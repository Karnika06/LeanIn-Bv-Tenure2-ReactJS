import showtime from "./ShowTime.jpg";

const Navbar = () => {
    return ( 
        <header className="Header">
            <img src={showtime} alt="" style={{ width: '41%'}}/>
        <nav className="navbar">
        
            <div> <h1>Its Show Time!! 🍿🎬</h1></div>
            <div className="links">
            
                <a href="/" style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>Home</a>
                <a href="/" style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>About</a>
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