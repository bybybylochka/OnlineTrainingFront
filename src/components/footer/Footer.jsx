import React from 'react';
import Logo from "../logo/Logo";
import facebook from '../../assets/facebookIcon.png'
import twitter from '../../assets/twitterIcon.png'
import instagram from '../../assets/instagramIcon.png'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className="wrapper footer__wrapper">
                <div className="footer__logo">
                    <Logo color={'light'}/>
                </div>
                <div className="footer__navigation">
                    <h4 className="footer-navigation__title">Быстрый доступ</h4>
                    <ul className="footer-navigation__links">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Курсы</a></li>

                    </ul>
                </div>
                <div className="footer__contacts">
                    <h4 className="footer-navigation__title">Контакты</h4>
                    <ul className="footer-navigation__links contacts">
                        <li><a href="https://web.facebook.com/?_rdc=1&_rdr"><img src={facebook} alt={'facebook icon'}/>
                        </a></li>
                        <li><a href="https://twitter.com/i/flow/login"><img src={twitter} alt={'twitter icon'}/></a>
                        </li>
                        <li><a href="https://www.instagram.com/?hl=ru"><img src={instagram} alt={'instagram icon'}/></a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer;