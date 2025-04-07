import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const maxPrice = 700;

function Cameras(props) {

  const cameraPrice = Number(props.price.replace("$", ""));

  return (
    <div className="camera-card">
     
      <Link 
        to={`/${props.id}`} 
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        <img src={props.imageURL} alt={props.name} />
        <div className="card-title">
          <h2>{props.name}</h2>
          <h3>
            <span className={`price ${cameraPrice > maxPrice ? "high" : "low"}`}>
              {props.price}
            </span>
          </h3>
        </div>
        <h4>Key features: {props.keyFeatures}</h4>
        <div className="divider"></div>
        <p>Year Released: {props.releasedYear}</p>
        <p>Lens Mount Type: {props.lensMountType}</p>
        <p>Battery Type: {props.batteryType}</p>
      </Link>
      <div className="card-actions">
        <button onClick={(e) => { e.stopPropagation(); props.duplicate(props.id) }}>
          Duplicate
        </button>
        <button className="danger" onClick={(e) => { e.stopPropagation(); props.delete(props.id) }}>
          Delete
        </button>
      </div>
    </div>
  );
}

Cameras.propTypes = {
  imageURL: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  keyFeatures: PropTypes.string,
  releasedYear: PropTypes.number,
  lensMountType: PropTypes.string,
  batteryType: PropTypes.string,
  duplicate: PropTypes.func,
  delete: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Cameras;
