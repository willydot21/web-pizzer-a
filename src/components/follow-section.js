
import './styles/follow-section.css';

const FollowSection = props => (
  <div className="follow-section" ref={props.followRef} >
    <div className="separator-inline">
      <h3 className="section-white-title">Síguenos en :</h3>
      <p className="subtitle-text">#LOS ROMEROS PIZZA</p>
      <div className="follow-links">
        <a className="facebook-link" herf="https://es-es.facebook.com/losromeroshorno/" >f</a>
        <a className="instagram-link" href="https://www.instagram.com/losromeroshorno/?hl=es">
          <img src="https://www.semfyc.es/wp-content/uploads/2019/09/instagram-new-logo-may-2016.jpg" />
        </a>
      </div>
      <p className="tlf-link">
        <p className="bigger-and" > & </p>
        <div className="tlf-container">
          <span className="material-icons">phone</span>           
          <p> 95 568 34 70 </p>
        </div>
      </p>
    </div>
  </div>
);

export default FollowSection;