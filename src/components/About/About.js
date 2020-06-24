import React from 'react';
import './about.css'
import {SubTitle} from "../../common/Typography/SubTitle";
import {TitleLg} from "../../common/Typography/TitleLg";
import {CaseCard} from "./CaseCard/CaseCard";

const aboutInfo = [
    {
        title: '90',
        subtitle: 'Завершено крупных сделок',
        link: {
            href: '#',
            body: 'Все кейсы'
        },
        id: '1'
    },
    {
        title: '900',
        subtitle: 'Завершено мелких сделок',
        link: {
            href: '#',
            body: 'Все кейсы'
        },
        id: '2'
    },
    {
        title: '50',
        subtitle: 'Завершено классных сделок',
        link: {
            href: '#',
            body: 'Все кейсы'
        },
        id: '3'
    },
    {
        title: '60',
        subtitle: 'Завершено средних сделок',
        link: {
            href: '#',
            body: 'Все кейсы'
        },
        id: '4'
    },

];

export const About = (props) => {
    const CasesCards = aboutInfo.map(item =>{
        return <CaseCard title={item.title} subtitle={item.subtitle} link={item.link} key={item.id}/>
    });
    return (
        <section className={"container about-container section-container"}>
            <div className="about-text">
                <SubTitle>
                    О нас
                </SubTitle>
                <TitleLg>
                    Компания
                    <br/>
                    <span className={"about-title_primary"}>ИвановПром</span>
                </TitleLg>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem
                    Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный
                    дизайн.</p>
            </div>
            <div className="about-cases">
                {CasesCards}
            </div>
        </section>
    )
}