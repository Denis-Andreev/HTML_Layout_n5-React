import React from 'react';
import './contacts.css';
import {ContactsBody} from "./ContactsBody/ContactsBody";
import {ContactsForm} from "./ContactsForm/ContactsForm";

import contactBg from "../../media/images/footer_bg.png";

export const Contact = (props) => {
    return (
        <div style={{backgroundImage: `url(${contactBg})`}} className="container contacts section-container">
            <ContactsBody />
            <ContactsForm />
        </div>
    )
}