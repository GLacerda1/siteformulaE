import { FooterStyle } from '../css/FooterStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <FooterStyle>
    <section className="footer_container">
        <div className="footer_content">
            <h3>Desenvolvedores</h3>
            <ul className="footer_list">
                <li><a href="https://github.com/JoaoVicOli" target="_blank" rel="noopener noreferrer">João Oliveira</a></li>
                <li><a href="https://github.com/eerricc" target="_blank" rel="noopener noreferrer">Eric Segawa</a></li>
                <li><a href="https://github.com/GabrielNakashima" target="_blank" rel="noopener noreferrer">Gabriel Nakashima</a></li>
                <li><a href="https://github.com/GLacerda1" target="_blank" rel="noopener noreferrer">Gabriel Lacerda</a></li>
                <li><a href="https://github.com/melmis" target="_blank" rel="noopener noreferrer">Melyssa Huang</a></li>
            </ul>
        </div>
        <div className="footer_content">
            <h3>Ajuda</h3>
            <div className="footer_text">
                <p>contato@empresa.com</p>
                <p>Telefone: (11) 1234-5678</p>
            </div>
        </div>
        <div className="footer_content">
            <h3>Navegação</h3>
            <ul className="footer_list">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>
        <div className="footer_content">
            <h3>Redes sociais</h3>
            <ul className="social_icons">
                <li className="social_icons_li">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
            </ul>
            <h3>Formas de pagamento</h3>
            <ul>
                <li>
                    <a href=""></a>
                </li>
            </ul>
        </div>
    </section>
    <div className="footer_bottom">
        <p className="copyright">&copy; 2024 Empresa Fimtech. Todos os direitos reservados.</p>
    </div>
    </FooterStyle>
);
};

export default Footer;