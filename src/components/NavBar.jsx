import { Link } from 'react-router-dom';
import '../index.css'

const NavBar = () => {
  return (
    <nav>
      <h1><Link to={"/"} className='navname'>Mohit Pinninti</Link></h1>
      <ul>
        <li><Link to={"/"} className='navlink'>Home</Link></li>
        <li><Link to={"/about"} className='navlink'>About</Link></li>
        <li><Link to={"/career"} className='navlink'>Career</Link></li>
        <li><Link to={"/blog"} className='navlink'>Blog</Link></li>
        {/* <li><Link to={"/contact"} className='navlink'>Contact</Link></li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
