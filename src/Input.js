import React from "react";

const Input = (props) => {
    return (
        <div className="input-group mb-1">
            <input onChange={props.input} type="text" className="form-control" placeholder="Inserez nom du joueur !"/>
            <button onClick={props.btn} className="btn btn-primary">Go !</button>
        </div>
    )
}

export default Input;