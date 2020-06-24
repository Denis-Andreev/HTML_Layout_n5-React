import React from "react";
import {SubTitle} from "../../common/Typography/SubTitle";
import {TitleLg} from "../../common/Typography/TitleLg";
import './services.css'

import img from '../../media/images/services/servise1.png';
import {ServicesCard} from "./ServicesCard/ServicesCard";

const servicesData = [
    {
        title: 'Бухгалтерское обслуживание',
        img,
        id: '1'
    },
    {
        title: 'Аудит и консалтинг',
        img,
        id: '2'
    },
    {
        title: 'Займы',
        img,
        id: '3'
    },
    {
        title: 'Инвест-консультант',
        img,
        id: '4'
    },
    {
        title: 'CRM для вашего бизнеса',
        img,
        id: '5'
    },
    {
        title: 'Бухгалтерские услуги',
        img,
        id: '6'
    },
]

export const Services = (props) => {
    const Services = servicesData.map(service => {
        const text = <span className="services_text">{service.title}</span>
        return (
            <ServicesCard text={text} key={service.id} img={service.img}/>
        )
    })
    return (
        <section className={"container services-container section-container"}>
            <SubTitle>
                Наши услуги
            </SubTitle>
            <TitleLg>
                Мы специализируемся
            </TitleLg>
            <div className="services">
                {Services}
            </div>
        </section>
    )
}