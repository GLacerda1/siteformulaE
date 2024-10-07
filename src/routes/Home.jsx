import Slider from 'react-slick';
import '../css/home.css';
import slogan from '../assets/slogan.png'
import banner from '../assets/banner.jpeg'
import carros from '../assets/carros.jpeg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import grafico from "../assets/grafico.jpeg"
import views from "../assets/views.png"



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
          <img src={slogan} alt="Imagem 1" />
        </div>
        <div>
          <img src={banner} alt="Imagem 2" />
        </div>
        <div>
          <img src={carros} alt="Imagem 3" />
        </div>
      </Slider>

      <div className="infoprojeto">
        <h1>Sobre o projeto</h1>
        <div className="content-row">
          <div className="content-image">
            <img src={views} alt="contextualizando" />
          </div>
          <div className="content-text">
            <h2>Problema da Visibilidade da Fórmula E</h2>
            <p>
              A Fórmula E, apesar de seu grande potencial no automobilismo
              elétrico, enfrenta desafios de visibilidade e reconhecimento em
              comparação com categorias tradicionais, como a Fórmula 1. A falta
              de conexão emocional com os fãs e o baixo engajamento limitam seu
              crescimento. Para se destacar no cenário esportivo global, a
              categoria precisa reavaliar suas estratégias de marketing e
              engajamento, especialmente diante da concorrência de outras ligas
              esportivas e novas plataformas de entretenimento.
            </p>
          </div>
        </div>
        <div className="content-row reverse">
          <div className="content-text">
            <h2>Solução</h2>
            <p>
              A proposta para aumentar a visibilidade da Fórmula E inclui criar
              circuitos temporários icônicos, um app de realidade aumentada para
              engajamento dos fãs, corridas noturnas e maior uso de inteligência
              artificial. Além disso, promoverá energia 100% renovável e
              programas educacionais para fortalecer sua imagem sustentável.
            </p>
          </div>
          <div className="content-image">
            <img src={grafico} alt="Imagem 3" />
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default Home;
