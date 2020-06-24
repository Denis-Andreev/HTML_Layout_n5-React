import React from 'react'
import {Header} from "../../components/Header/Header";
import {Services} from "../../components/Services/Services";
import {About} from "../../components/About/About";
import {Reviews} from "../../components/Reviews/Reviews";
import {Clients} from "../../components/Clients/Clients";
import {Copyright} from "../../components/Copyright/Copyright";
import {Contact} from "../../components/Contacts/Contact";

export const MainPage = (props) => {
    return (
        <>
            <Header />
            <Services />
            <About />
            <Clients />
            <Reviews />
            <Contact />
            <Copyright />
        </>
    )
}