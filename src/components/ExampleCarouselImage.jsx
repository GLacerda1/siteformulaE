import pista from '../assets/formulae-pista.jpg';

const ExampleCarouselImages = ( images ) => {
    return (
        <div className="d-flex justify-content-center">
            {images.map((img, index) => (
                <img key={index} className="d-block w-100" src={pista} alt={`Slide ${index}`} />
            ))}
        </div>
    );
};

export default ExampleCarouselImages;
