import { Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DeckDetail({ data }) {
  const { param } = useParams();
  const selectedCard = data.find((card) => String(card.id) === param);

  if (!selectedCard) {
    return (
      <div className="deck-detail">
        <nav className="deck-nav">
            <Link to="/" className="back-button">Back to Home</Link>
        </nav>
        <p>Camera not found.</p>
      </div>
    );
  }

  const cameraPrice = Number(selectedCard.price.replace("$", ""));
  const maxPrice = 700;

  return (
    <div className="deck-detail">
      <nav className="deck-nav">
        <Link to="/" className="back-button">Back to Home</Link>
      </nav>
      <div className="camera-detail">
        <img src={selectedCard.imageURL} alt={selectedCard.name} />
        <div className="card-title">
          <h2>{selectedCard.name}</h2>
          <h3>
            <span className={`price ${cameraPrice > maxPrice ? "high" : "low"}`}>
              {selectedCard.price}
            </span>
          </h3>
        </div>
        <h4>Key features: {selectedCard.keyFeatures}</h4>
        <div className="divider"></div>
        <p>Year Released: {selectedCard.releasedYear}</p>
        <p>Lens Mount Type: {selectedCard.lensMountType}</p>
        <p>Battery Type: {selectedCard.batteryType}</p>
      </div>
    </div>
  );
}

DeckDetail.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imageURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      keyFeatures: PropTypes.string,
      releasedYear: PropTypes.number,
      lensMountType: PropTypes.string,
      batteryType: PropTypes.string,
    })
  ).isRequired,
};
