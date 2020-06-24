import React from 'react'
import './input.css'
export const Input = ({placeholder, type, caption, rows = null, component}) => {
    if(component = "textarea") {
        return (
            <div className="input-wrap">
                <div className="caption">{caption}</div>
                <textarea type={type} placeholder={placeholder} rows={rows}/>
            </div>
        )
    }
    return (
        <div className="input-wrap">
            <div className="caption">{caption}</div>
            <input type={type} placeholder={placeholder} rows={rows}/>
        </div>
    )
}