import React from 'react';
import classes from './typography.module.css'
export const TitleLg = ({color = 'black', children}) => {
    return (
        <h1 className={classes.titleLg} style={{color}}>
            {children}
        </h1>
    )
}