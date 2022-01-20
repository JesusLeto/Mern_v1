import React, {useState} from "react";
import '../app.css'

const CInput = () => {
    const [stateInput, setStateInput] = useState("")
    return (
        <div className={`group ${stateInput === 'active' ? 'ac': null}`}>
            <label htmlFor="name" onClick={() => console.log("label")}>R</label>
            <input className={`${stateInput}`}
                   type="text" name="name" placeholder="Your Name" onFocus={() => setStateInput("active")} onBlur={() => setStateInput("")}/>
        </div>
    )
}

export default CInput
