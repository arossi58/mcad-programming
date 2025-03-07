export default function Camelid(props) {
    return (
      <div className='card'>
            <img src={props.image} alt={props.alt} className="camelid-img" />
            <h2 className="card-title">{props.title}</h2>
            <p>{props.trivia}</p>
      </div>
    )
  }
  