
import './styles/navbar.css';
import logo from '../media/logo.png';

const AppNavbar = props => {

  const handlerOnClick = props.handlerOnClick.action;

  const {
    followRef, menuRef, 
  } = props.handlerOnClick.refs;

  return (
    <nav className="app-navbar">
      <img src={ logo }/>
      <a 
        className="nav-link subtitle-text"
        onClick={ () => { handlerOnClick(menuRef) } }> 
        MENU 
      </a>
      <a 
        className="nav-link subtitle-text" 
        onClick={ () => { handlerOnClick(followRef) } }> 
      CONTACT 
      </a>
      <a href="https://es-es.facebook.com/losromeroshorno/" className="facebook-icon">f</a>
    </nav>
  );
}

export default AppNavbar;