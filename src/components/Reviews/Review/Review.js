import React from "react";

export const Review = ({text,name,company,src, ...props}) => {
    return (
        <div className="review">
            <p>{text}</p>
            <div className="reviewer">
                <img src={src} alt={name}/>
                <div className="reviewer-info">
                    <div className="reviewer-info_name">{name}</div>
                    <div className="reviewer-info_company">{company}</div>
                </div>
            </div>
        </div>
    )
}
