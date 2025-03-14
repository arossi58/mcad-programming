
export default function Animal (props) {
     return(
       
        <div className="animal-card">
            <h2>{props.name}</h2>
            <p>Native to: {props.nativeTo}</p>
            <button onClick={props.focus}>Focus</button>
            <button onClick={props.delete}>Delete</button>
        </div>
       
    )
}
