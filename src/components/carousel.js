import { Carousel } from "react-bootstrap";

const ImagenCar = ({imagen1,imagen2}) => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="tamanioImagen zoom"
                src={imagen1}
                alt="First slide"
                style={{borderRadius:'15px'}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="tamanioImagen zoom"
                src={imagen2}
                alt="Second slide"
                style={{borderRadius:'15px'}}
                />
            </Carousel.Item>
            
        </Carousel>
    )
}

export default ImagenCar;