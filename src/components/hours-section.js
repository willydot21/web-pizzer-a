
import './styles/hours-section.css';

const HoursSection = props => {

  const hoursRef = props.hoursRef;

  return (
    <div className="hours-section" ref={hoursRef}>
      <h3 className="section-title">Horario</h3>
      <div className="hours">
        <div className="separator">
          <p className="section-text hours-txt"> LUNES - MARTES </p>
          <p className="subtitle-text section-subtitle hours-txt"> CERRADO   </p>
        </div>
        <div className="separator">
          <p className="section-text hours-txt"> MIÉRCOLES - JUEVES</p>
          <p className="subtitle-text section-subtitle hours-txt"> 20:00PM - 23:30PM </p>
        </div>
        <div className="separator">
          <p className="section-text hours-txt"> VIERNES - DOMINGO </p>
          <p className=" subtitle-text section-subtitle hours-txt"> 10:00AM - 15:30PM &<br /> 20:00PM - 23:30PM </p>
        </div>
      </div>
    </div>
  );

}

export default HoursSection;