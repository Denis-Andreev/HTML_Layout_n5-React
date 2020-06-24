import React from "react";
import {Input} from "./Input/input";
import {Button} from "../../../common/Button/Button";

export const ContactsForm = (props) => {
    return (
        <div className="contacts_form">
            <div className="row">
                <div className="w-50">
                    <Input caption="Имя" placeholder="Иван" type="text"/>
                </div>
                <div className="w-50">
                    <Input caption="Фамилия" placeholder="Иванов" type="text" />
                </div>
            </div>
            <Input component='textarea' caption="Сообщение" placeholder="Ваше сообщение" type="tet" rows={4} />
            <Button>Отправить Сообщение</Button>
        </div>
    )
}