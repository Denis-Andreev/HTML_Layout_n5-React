import React from "react";
import '../services.css'

export const ServicesCard = ({text,img}) => {
    const style = {
        backgroundImage: `url(${img})`,
    }
    return (
        <div style={style} className="services_card">
            {text}
        </div>
    )
}