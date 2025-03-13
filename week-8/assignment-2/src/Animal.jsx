import { useState } from "react"

function Animal (props) {
    const [focus, setFocus] = useState(false)

    function clickFocus() {
        setFocus(true)
    }

    return(
        <div className="animal-card">
            <img src={props.image} alt={props.alt} />
            <h2>{props.name}</h2>
            <p>Native to: {props.nativeTo}</p>
            <p>{props.description}</p>
            <button onClick={clickFocus}>Focus</button>
            <button>Delete</button>
        </div>
    )
}

export default Animal