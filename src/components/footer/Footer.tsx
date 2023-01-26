import React from 'react';
import s from './Footer.module.css'
import visa from './../../assets/footer-img/Visa_Logo.svg'
import master from './../../assets/footer-img/Mastercard_Logo.svg'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerPosition}>
                <div className={s.cardsSection}>
                    <h4 className={s.title}>Lorem</h4>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi
                        est
                        sit amet.</p>
                </div>
                <div className={s.cardsWrapper}>
                    <img src={visa} alt={'card visa'}/>
                    <img src={master} alt={'card master card'}/>
                    <img src={master} alt={'card master card'}/>
                </div>

                <div className={s.loremSection}>
                    <h4 className={s.title}>Lorem Ipsum</h4>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est
                        sit
                        amet. Vulputate odio ut enim blandit volutpat maecenas volutpat. Massa tincidunt dui ut ornare
                        lectus sit. Quam elementum pulvinar etiam non.</p>
                </div>
                <div className={s.contactsSection}>
                    <h4 className={s.title}>Contacts</h4>
                    <ul className={s.address}>
                        <li>
                            <p>London</p>
                            <p>26985 Brighton Lane, Lake Forest, CA 92630</p>
                            <p>+1 (949) 354-2574</p>
                        </li>
                        <li>
                            <p>Paris</p>
                            <p>9 Doe Crossing Court</p>
                            <p>+11 281-762-2687</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.subFooter}>
                <div className={s.subFooterPosition}>
                    <p className={s.subText}>2022-2023 All rights reserved</p>
                    <p className={s.subText}>Site is developed by ME</p>
                </div>
            </div>

        </footer>
    );
};

