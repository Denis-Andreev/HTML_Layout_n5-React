import React from "react";

import {Client} from "./Client/Client";
import {Carousel} from "../../common/Carousel/Carousel";
import {SubTitle} from "../../common/Typography/SubTitle";
import {TitleLg} from "../../common/Typography/TitleLg";

import './clients.css';

import microsoft from '../../media/images/company/microsoft.png';

const clientsData = [
    {
        id: "1",
        src: microsoft,
        company: 'Microsoft',
    },
    {
        id: "2",
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png',
        company: 'Google',
    },
    {
        id: "3",
        src: microsoft,
        company: 'Microsoft',
    },
    {
        id: "4",
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png',
        company: 'Google',
    },
    {
        id: "5",
        src: microsoft,
        company: 'Microsoft',
    },
    {
        id: "6",
        src: microsoft,
        company: 'Microsoft',
    },
    {
        id: "7",
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png',
        company: 'Google',
    },
    {
        id: "8",
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png',
        company: 'Google',
    },
]

export const Clients = (props) => {
    const COMPANY_CAROUSEL_COUNT = 4;
    const Clients = clientsData.map(client => {
        return (
            <Client key={client.id}
                    src={client.src}
                    company={client.company}
            />
        )
    });

    let CarouselItems = [];
    for(let i = 0; i < Math.ceil(clientsData.length/COMPANY_CAROUSEL_COUNT); i++) {
        CarouselItems.push(
            <div className={"clients-slider_item"} key={i}>
                {Clients.slice((i*COMPANY_CAROUSEL_COUNT), (i*COMPANY_CAROUSEL_COUNT) + COMPANY_CAROUSEL_COUNT)}
            </div>
        );
    }
    return (
        <section className={"container clients-container section-container"}>
            <SubTitle>
                Наши клиенты
            </SubTitle>
            <TitleLg>
                С нами работают
            </TitleLg>
            <Carousel>
                {CarouselItems}
            </Carousel>
        </section>
    )
}