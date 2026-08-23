import { Link } from 'react-router-dom';
import useFirestoreDocument from '../hooks/useFirestoreDocument';
import '../index.css'

const NavBar = () => {
  const { data: nav } = useFirestoreDocument("content", "nav");

  return (
    <nav>
      <h1><Link to={"/"} className='navname'>{nav?.brand}</Link></h1>
      <ul>
        {(nav?.links ?? []).map((link) => (
          <li key={link.path}><Link to={link.path} className='navlink'>{link.label}</Link></li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
