import React from 'react';
import {HeaderBody} from "./HeaderBody/HeaderBody";
import {HeaderNav} from "./HeaderNav/HeaderNav";
import './header.css'

export const Header = (props) => {
    return (
        <>
            <HeaderNav />
            <HeaderBody />
        </>
    )
}