 
 export const maxPrice = 700;
 function Cameras(props) {
    //Convert price from object to number
    const cameraPrice = Number(props.price.replace("$", ""));;
    return(
        <div className="camera-card">
            <img src={props.imageURL} alt={props.name} />
            <div className="card-title">
                <h2>{props.name}</h2>
                {/*Compare price of camera to max price and color the price background*/}
                <h3><span className={`price ${cameraPrice> maxPrice ? "high" : "low"}`}>{props.price}</span></h3>
            </div>
            <h4>Key features: {props.keyFeatures}</h4>
            <div className="divider"></div>
            <p>Year Released: {props.releasedYear}</p>
            <p>Lens Mount Type: {props.lensMountType}</p>
            <p>Battery Type: {props.batteryType}</p>
        </div>
    )
  }

  export default Cameras