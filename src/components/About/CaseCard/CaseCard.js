import React from 'react'
import {TitleLg} from "../../../common/Typography/TitleLg";

export const CaseCard = ({title,subtitle,link}) => {
    return (
        <div className={"case-card"}>
           <span className="case-title">{title}</span>
            <span className="case-subtitle">{subtitle}</span>
            <span className="case-link"><a href={link.href}>{link.body}</a></span>
        </div>
    )
}
