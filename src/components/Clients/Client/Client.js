import React from "react";

export const Client = ({src, ...props}) => {
    return (
        <div className="client">
            <img src={src} alt={props.company}/>
            <p>{props.text || null}</p>
        </div>
    )
}
