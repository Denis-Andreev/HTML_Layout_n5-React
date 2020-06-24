import React from 'react';
import {TitleLg} from "../../../common/Typography/TitleLg";
import {Button} from "../../../common/Button/Button";
import header_bg from "../../../media/images/header_bg.png";
import {Carousel} from "../../../common/Carousel/Carousel";

const style = {
    background: `url(${header_bg})`
}

export const HeaderBody = (props) => {
    return (
        <div className="header-body__container container" style={style}>
            <div className="header-body section-container">
                <Carousel color={"rgba(200,200,200,0.9)"}>
                    <div>
                        <TitleLg color={'white'}>
                            Бухгалтерские услуги
                            <br/>
                            в Санкт-Петербурге
                        </TitleLg>
                        <Button>Наша презентация</Button>
                    </div>
                    <div>
                        <TitleLg color={'white'}>
                            Еще какие-то услуги
                            <br/>
                            в Санкт-Петербурге
                        </TitleLg>
                        <Button>Посмотреть подробнее</Button>
                    </div>
                    <div>
                        <TitleLg color={'white'}>
                            Аудит и консалтинг
                            <br/>
                            в Санкт-Петербурге
                        </TitleLg>
                        <Button>Бооольше подробностей</Button>
                    </div>
                    <div>
                        <TitleLg color={'white'}>
                            Очень дорогие услуги
                            <br/>
                            в Санкт-Петербурге
                        </TitleLg>
                        <Button>Почему так дорого?</Button>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}