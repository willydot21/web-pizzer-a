
import BubbleImage from './bubble-image';
import image1 from "../media/food/1.jpg";
import './styles/menu-info.css';

const MenuInfo = props => {

  const menuRef = props.menuRef;

  return(
    <div className="menu-info" ref={menuRef}>
      <div className="menu-info-left">

        <h3 className="section-title">
          Servicios & Menu
        </h3>

        <div className="menu-info-text">
          <div className="text-separator">
            <p className="subtitle-text section-subtitle">
              Servicio a domicilio 
              <span class="material-icons">
                call
              </span>
            </p>
            <p className="subtitle-text section-text">
              Disponible de 13:00 a 15:00 PM <br/> y
              de 20:30 a 24:00 PM. por solo
              <br/><strong>1.50€</strong>
            </p>
          </div>

          <div className="text-separator">
            <p className="subtitle-text section-subtitle">
              Diversidad Gastronómica, <br/>
              tanto local como extranjera <span className="material-icons">
                soup_kitchen
              </span>
            </p>
            <p className="subtitle-text section-text">
              El sabor es la garantía de lo artesano
            </p>
            <p className="section-final-text">
            Horno de leña Los Romeros
          </p>
          </div>
        </div>

        <div className="link-button"> 
          <a href="/menu" > Ver menu </a>
        </div>

      </div>

      <div className="right-img">
        <BubbleImage src={ image1 } />
      </div>

    </div>   
  );
}

export default MenuInfo;