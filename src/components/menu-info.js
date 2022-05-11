
import BubbleImage from './bubble-image';
import image1 from "../media/food/1.jpg";
import './styles/menu-info.css';

const MenuInfo = props => {

  const menuRef = props.menuRef;

  return(
    <div className="menu-info" ref={menuRef}>
      <div className="menu-info-left">

        <h3 className="section-title">
          Lunch Specials 
        </h3>

        <div className="menu-info-text">
          <div className="text-separator">
            <p className="subtitle-text section-subtitle">
              2 SLICES OF CHEESE PIZZA <br/> WITH A DRINK $4.60
            </p>
            <p className="subtitle-text section-text">
              +takes (toppings are extra) <br/> Please see menu
            </p>
          </div>

          <div className="text-separator">
            <p className="subtitle-text section-subtitle">
              1 SLICE OF CHEESE PIZZA WITH A SMALL <br/> HOUSE SALAD & DRINK $6.50
            </p>
            <p className="subtitle-text section-text">
              +takes (toppings are extra)
            </p>
            <p className="section-final-text">
            Horno de leña Los Romeros
          </p>
          </div>
        </div>

        <div className="link-button"> 
          <a href="/menu" > See Menu </a>
        </div>

      </div>

      <div className="right-img">
        <BubbleImage src={ image1 } />
      </div>

    </div>   
  );
}

export default MenuInfo;