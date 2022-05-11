
import './styles/footer.css';

const AppFooter = props => {

  const handlerOnClick = props.handlerOnClick.action;

  const {
    menuRef, aboutRef, followRef, hoursRef
  } = props.handlerOnClick.refs;

  return(
    <footer className="app-footer">

      <span className="footer-decoration">
        <a className="material-icons" href="#">
          expand_more
        </a>
      </span>

      <div className="separator">
        <p className="subtitle-text">Alcalá de guadaira, Sevilla • 95 568 34 70</p>
        <div className="footer-links">
          
          <a 
            className="subtitle-text"
            onClick={ () => handlerOnClick(menuRef) }>
            MENU
          </a>

          <a 
            className="subtitle-text"
            onClick={ () => handlerOnClick(aboutRef) }>
            SOBRE NOSOTROS
          </a>
          
          <a 
            className="subtitle-text"
            onClick={ () => handlerOnClick(hoursRef) }>
            HORARIO
          </a>

        </div> 
        <p className="footer-rights">© Los Romeros • All rights reserved • Design by DSKY</p>
      </div>
    </footer>
  );
}

export default AppFooter;