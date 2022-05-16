
import './styles/navbar.css';
import logo from '../media/logo.png';

const MenuNavbar = () => {
  return (
    <nav className="app-navbar">
      <img src={ logo }/>
      <a 
        className="nav-link subtitle-text"
        href="/"
      > HOME
      </a>
      <a href="https://es-es.facebook.com/losromeroshorno/" className="facebook-icon">f</a>
    </nav>
  );
}

export default MenuNavbar;