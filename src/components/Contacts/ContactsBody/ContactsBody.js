import React from 'react'
import {TitleLg} from "../../../common/Typography/TitleLg";

import phoneLg from '../../../media/icons/phone_lg.png';
import mailLg from '../../../media/icons/mail_lg.png'

export const ContactsBody = (props) => {
    return (
        <div className="contacts_body">
            <TitleLg color="white">
                Связь с нами
            </TitleLg>
            <p>
                У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
            </p>
            <div className="contacts_body__info">
                <span>
                    <img src={phoneLg} alt="phone" className="icon"/>
                    +7 (111) 222-33-44
                </span>
                <span>
                    <img src={mailLg} alt="mail" className="icon"/>
                    order@bu-one.ru
                </span>
            </div>
        </div>
    )
}