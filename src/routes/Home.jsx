import Slider from 'react-slick';
import '../css/home.css';
import pista from '../assets/formulae-pista.jpg'
import carros from '../assets/carros.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={pista} alt="Imagem 1" />
                </div>
                <div>
                    <img src={carros} alt="Imagem 2" />
                </div>
                <div>
                    <img src={carros} alt="Imagem 3" />
                </div>
            </Slider>
        </div>
        
    );
};

export default Home;
