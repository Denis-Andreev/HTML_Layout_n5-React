import React, {useState} from 'react';
import phoneIcon from '../../../media/icons/phone.png'
import clockIcon from '../../..//media/icons/clock.png'
import mailIcon from '../../../media/icons/mail.png'
import geoIcon from '../../../media/icons/geo.png'

import logo from '../../../media/logo.png';

export const HeaderNav = (props) => {
    const [navState,setNavState] = useState({
        opened: window.innerWidth < 680,
        navDisplay: window.innerWidth < 680 ? 'none' : 'block'
    });
    const navHandler = () => {
        setNavState({
            opened: !navState.opened,
            navDisplay: navState.opened ? 'block' : 'none'
        });
    }
    const Menu = <span onClick={navHandler} className="nav-info-item nav_control">{navState.opened ? '☰' : '✖'}</span>
    return (
        <header className="header container">
            <div className="logo">
                <img className="logo_img" src={logo} alt="logo"/>
                <span className="logo_text">BuhOne</span>
            </div>
            {Menu}
            <div className="nav-container" style={{display: navState.navDisplay }}>
                <div className="nav-info">
                    <span className="nav-info_item"><img src={phoneIcon} alt="phone"/>8 (111) 222-33-44</span>
                    <span className="nav-info_item"><img src={clockIcon} alt="schedule"/>Пн-Пт 10:00-18:00</span>
                    <span className="nav-info_item"><img src={mailIcon} alt="mail"/>order@buhone.ru</span>
                    <span className="nav-info_item"><img src={geoIcon} alt="location"/>Невский пр. 130</span>
                </div>
                <nav>
                    <span className="nav_item"><a href={"#"}>Главная</a></span>
                    <span className="nav_item"><a href={"#"}>Услуги</a></span>
                    <span className="nav_item"><a href={"#"}>Кейсы</a></span>
                   `<span className="nav_item"><a href={"#"}>О компани</a></span>
                    <span className="nav_item"><a href={"#"}>Контакты</a></span>
                </nav>
            </div>
        </header>
    )
}
