import {Link} from "react-router";


function Navbar() {
    return (
        <nav className="nav">
            <div className="container"></div>
           <ul>
               <li className="list"><Link  to="/">Home</Link></li>
               <li className="list"><Link to="/About" >About</Link></li>
               <li className="list"><Link to="/Projects" >Projects</Link></li>
               <li className="list"><Link to="/Contact" >Contact</Link></li>
           </ul>

        </nav>
    );
}
export default Navbar;
