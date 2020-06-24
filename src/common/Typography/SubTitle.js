import React from 'react';
import classes from './typography.module.css'

export const SubTitle = ({children}) => {
    return (
        <h1 className={classes.subTitle}>
            {children}
        </h1>
    )
}