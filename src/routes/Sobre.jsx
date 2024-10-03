import '../css/sobre.css';
import { useState } from 'react';
import carroformula1 from '../assets/carro-formula1.jpg';
import carroformulae from '../assets/carro-formulaE.jpg';

const CardInterativo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>Tecnologia de Propulsão</h2>
      <div className="card-inner">
        <div className="front">
          Fórmula 1: Utiliza motores híbridos que combinam motores de combustão
          interna (a gasolina) com sistemas de recuperação de energia, como o
          KERS (Sistema de Recuperação de Energia Cinética).
        </div>
        <div className="back">
          Fórmula E: Utiliza exclusivamente carros elétricos, com motores
          movidos a bateria. O foco é promover a mobilidade elétrica e a
          sustentabilidade, mostrando o potencial dos veículos elétricos no
          automobilismo.
        </div>
      </div>
    </section>
  );
};

const CardInterativo2 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>Sustentabilidade</h2>
      <div className="card-inner">
        <div className="front">
          Fórmula 1: Embora utilize tecnologia híbrida, os carros ainda
          dependem de gasolina, que é um combustível fóssil, e a Fórmula 1 não
          tem um plano claro para transição total para fontes de energia
          renováveis.
        </div>
        <div className="back">
          Fórmula E: É 100% elétrica e promove o uso de energia renovável
          durante as corridas. Além disso, as equipes buscam constantemente
          inovações para melhorar a eficiência energética.
        </div>
      </div>
    </section>
  );
};

const CardInterativo3 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>Acessibilidade e Custos</h2>
      <div className="card-inner">
        <div className="front">
          Fórmula 1: Os custos operacionais são muito elevados, com equipes
          gastando bilhões em tecnologia, carros e pilotos.
        </div>
        <div className="back">
          Fórmula E: Tem um modelo de negócios mais acessível, o que torna a
          competição mais inclusiva para diferentes equipes e fabricantes.
        </div>
      </div>
    </section>
  );
};

const CardInterativo4 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>Mobilização Urbana</h2>
      <div className="card-inner">
        <div className="front">
          Fórmula 1: Realiza suas corridas em pistas fechadas e circuitos
          dedicados, que são frequentemente afastados dos centros urbanos.
        </div>
        <div className="back">
          Fórmula E: Organiza suas corridas nas ruas de grandes cidades, como
          Nova York, Paris, Pequim e Londres, aproximando o esporte do público e
          aumentando a conscientização sobre a mobilidade elétrica nas áreas
          urbanas.
        </div>
      </div>
    </section>
  );
};

const CardInterativo5 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>Impacto Ambiental</h2>
      <div className="card-inner">
        <div className="front">
          Fórmula 1: Embora tenha reduzido suas emissões com o uso de motores
          híbridos, o impacto ambiental global da Fórmula 1 ainda é
          considerável devido ao transporte de equipamentos e carros para
          diferentes partes do mundo.
        </div>
        <div className="back">
          Fórmula E: A Fórmula E organiza suas corridas em locais urbanos e em
          locais de fácil acesso, minimizando o transporte e os impactos
          ambientais causados pelos deslocamentos.
        </div>
      </div>
    </section>
  );
};

const CardInterativo6 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>Inovação e Tecnologia</h2>
      <div className="card-inner">
        <div className="front">
          Fórmula 1: A tecnologia usada na Fórmula 1 é altamente avançada e
          focada em maximizar a performance do carro, mas muito dela não é
          amplamente aplicada em carros de rua.
        </div>
        <div className="back">
          Fórmula E: A Fórmula E não só foca na performance dos carros, mas
          também incentiva a inovação em tecnologias que podem ser aplicadas
          diretamente em veículos de rua, como baterias mais eficientes e
          sistemas de recarga rápidos.
        </div>
      </div>
    </section>
  );
};

const Sobre = () => {
  return (
    <section className="main-content">
      <h1>Qual o diferencial da Fórmula E?</h1>
      <CardInterativo />
      <CardInterativo2 />
      <CardInterativo3 />
      <CardInterativo4 />
      <CardInterativo5 />
      <CardInterativo6 />
      <div className="titulo-imagens">
        <h2>Diferença entre os carros</h2>
      </div>
      <div className="imagem-container">
        <div className="imagem-coluna">
          <h3>Fórmula 1</h3>
          <img src={carroformula1} alt="Carro Fórmula 1" className="imagem-carros" />
          <p>Aerodinâmica: Design altamente otimizado para máxima eficiência aerodinâmica, com asas ajustáveis e dispositivos como difusores.</p>
          <p>Estrutura e chassi: Cada equipe desenvolve seu próprio chassi</p>
          <p>Motor: Hibrído</p>
        </div>
        <div className="imagem-coluna">
          <h3>Fórmula E</h3>
          <img src={carroformulae} alt="Carro Fórmula E" className="imagem-carros" />
          <p>Aerodinâmica: focada em reduzir a resistência do ar, mas com regras mais restritivas que limitam ajustes e inovações.</p>
          <p>Estrutura e chassi: Todas as equipes usam o mesmo chassi</p>
          <p>Motor: Elétrico</p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
