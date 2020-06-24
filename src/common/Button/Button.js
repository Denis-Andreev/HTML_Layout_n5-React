import React from "react";

import classes from './button.module.css'

export const Button = ({children = 'Button'}) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    )
}