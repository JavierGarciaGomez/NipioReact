import Carousel from 'react-bootstrap/Carousel';
import reservas from '../assets/images/reservas.png';
import video from '../assets/videos/FOTOS WEB principal (1).mp4';

function SlidersPacks() {
  return (
    <Carousel>
      <Carousel.Item>
        <video
          className="d-block w-100"
          src={video}
          alt="First slide"
          loop 
          muted 
          autoPlay 
        />
        <Carousel.Caption>
          <h3>TU PACK DE LOGOPEDIA</h3>
          <p>Contrata tu pack de Logopedia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={reservas}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>TU PACK DE LOGOPEDIA</h3>
          <p>Contrata tu pack de Logopedia</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlidersPacks;