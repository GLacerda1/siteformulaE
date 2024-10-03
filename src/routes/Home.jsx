import Slider from 'react-slick';
import '../css/home.css';
import slogan from '../assets/slogan.png'
import banner from '../assets/banner.jpeg'
import carros from '../assets/carros.jpeg'
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
                    <img src={slogan} alt="Imagem 1" />
                </div>
                <div>
                    <img src={banner} alt="Imagem 2" />
                </div>
                <div>
                    <img src={carros} alt="Imagem 3" />
                </div>
            </Slider>
            <div className='infoprojeto'>
                <h1>Sobre o projeto</h1>
                <h2>Problema da Visibilidade da Fórmula E</h2>
                <p>A Fórmula E, como uma das principais competições de automobilismo elétrico do mundo, tem um grande potencial para se destacar no cenário esportivo global. No entanto, a categoria enfrenta desafios significativos em termos de visibilidade e reconhecimento. Apesar de suas inovações tecnológicas e compromisso com a sustentabilidade, a Fórmula E ainda luta para se estabelecer como uma marca forte e atraente para o público em comparação com categorias mais tradicionais, como a Fórmula 1. A falta de conexão emocional com os fãs e a necessidade de engajamento direto são fatores críticos que limitam a expansão da base de fãs e a cobertura da mídia. Com a crescente concorrência de outras ligas esportivas e o crescimento de novas plataformas de entretenimento, a Fórmula E deve urgentemente reavaliar suas estratégias de marketing e engajamento para captar a atenção e o interesse de uma audiência mais ampla.</p>
                <h2>Solução</h2>
                <p>Para aumentar a visibilidade da Fórmula E, propomos transformar a experiência dos fãs e ampliar o alcance da categoria. Sugerimos a criação de circuitos temporários em locais icônicos, atraindo novos públicos e gerando apelo visual. Além disso, implementaremos um sistema de engajamento gamificado, permitindo que os fãs influenciem as corridas em tempo real por meio de um aplicativo com realidade aumentada, onde poderão visualizar dados de desempenho dos carros. Inovações tecnológicas serão fundamentais, com o desenvolvimento de carros de maior autonomia e a utilização de inteligência artificial para otimizar estratégias nas corridas, tornando-as mais dinâmicas e emocionantes. Também planejamos realizar corridas noturnas com iluminação especial e oferecer experiências de realidade virtual, imergindo os espectadores na ação. Por fim, promoveremos corridas com 100% de energia renovável e desenvolveremos programas educacionais sobre mobilidade elétrica, fortalecendo a imagem da Fórmula E como uma categoria sustentável. Essas iniciativas visam criar uma comunidade apaixonada e engajada pelo automobilismo elétrico, apoiando a categoria em sua jornada rumo ao futuro.</p>

            </div>
        </div>
        
        
    );
};

export default Home;
