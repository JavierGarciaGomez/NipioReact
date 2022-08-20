import Carousel from 'react-bootstrap/Carousel';
import reservas from '../assets/images/reservas.png';
import consultasVideo from '../assets/videos/videoConsultas.mp4';

function Sliders() {
  return (
    <Carousel>
      <Carousel.Item>
        <video
          className="d-block w-100"
          src={consultasVideo}
          alt="First slide"
          loop 
          muted 
          autoPlay 
        />
        <Carousel.Caption>
          <h3>SERVICIO DE CONSULTA</h3>
          <p>Solicita cita con una de nuestras especialistas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={reservas}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>CONSULTAS</h3>
          <p>Solicita cita con una de nuestras especialistas</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;