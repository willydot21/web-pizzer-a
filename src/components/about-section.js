
import './styles/about-section.css';

const AboutSection = props => {
  
  const aboutRef = props.aboutRef;
  
  return(
    <div className="about-section" ref={aboutRef}>
      <div className="center-content">
        <h3 className="section-white-title">Sobre nosotros</h3> 
        <p className="subtitle-text about-text">
          Horno de leña Los Romeros, expertos en comida exquisita y reparto a domicilio. (Alcala de Guadaira, Sevilla)
          <br/> En nuestro menu podrás encontrar:
          <p className="sub-text">Pizzas, comida casera, empanadas, empanados, carnes al horno de leña, carnes a la parrilla, repostería casera, paella, pastas, bocatas, tortillas y mucho más en <a href="/menu" className="see-menu-link subtitle-text">Menu</a></p>
        </p>
        <div className="subtitle-text presentation-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/PUD5rWO1CyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div> 
  );
};

export default AboutSection;