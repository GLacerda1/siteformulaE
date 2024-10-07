import '../css/loja.css';
import emoji from '../assets/emoji.jpeg';
import wallpaper from '../assets/wallpaper.jpeg'
import soundtrack from '../assets/soundtrack.png'
import iconessociais from '../assets/iconessociais.png'
import layout from '../assets/layoutperfis.png'
import guia from '../assets/guia.png'

const Loja = () => {
  const produtos = Array(6).fill(null);
  
  const produtoClasses = {
    0: 'produto-azul',
    1: 'produto-vermelho',
    2: 'produto-verde',
    3: 'produto-amarelo',
    4: 'produto-laranja',
    5: 'produto-roxo',
  };

  const produtoDescriptions = {
    0: 'Preço: 100 Ecoins',
    1: 'Preço: 135 Ecoins',
    2: 'Preço: 75 Ecoins',
    3: 'Preço: 30 Ecoins',
    4: 'Preço: 35 Ecoins',
    5: 'Preço: 350 Ecoins',
  };

  const produtoImages = [
    emoji, wallpaper, soundtrack, iconessociais, layout, guia,
  ];

  const produtoTitles = [
    'Pacote de emojis',
    'Wallpaper exclusivo',
    'Game Soundtrack',
    'Pacotes de Ícones',
    'Layouts para Perfis de Jogos',
    'Guia de estratégia',
  ];

  return (
    <div className="loja-container">
      <h1>Loja Virtual</h1>
      <div className="produtos-grid">
        {produtos.map((_, index) => (
          <div className={`produto ${produtoClasses[index]}`} key={index}>
            <div className="produto-imagem">
              <img src={produtoImages[index]} alt={produtoTitles[index]} />
            </div>
            <div className="produto-info">
              <p>{produtoTitles[index]}</p>
              <p>{produtoDescriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loja;
