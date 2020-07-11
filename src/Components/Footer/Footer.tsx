import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
    <div className={ styles.Footer }>  
        <div className={ styles.Company}>
            <img src="/images/icons/pizza-icon.png" alt="pizza icon"></img>
            <div className={ styles.CompanyInfo}>
                <p>Company Name</p>
                <p>With delivery</p>
            </div>
            <div className={ styles.CompanyRights}>
                <p>@2010-2020 "The Guide Pizza" all rights reserved</p>
                <span>Privacy Policy</span>
                <p>By<span> Vakho Nakashidze</span></p>
            </div>
        </div>
        <div>
            <div className={ styles.PhoneNumber }>
                <p>+0 (000) <span>000-000</span></p>
                <p>From 10:00 till 22:00</p>
            </div>
            <div className={ styles.SocialNetwork}>
                <img src="/images/icons/fb-icon.png" alt="facebook icon"></img>
                <img src="/images/icons/insta-icon.png" alt="instagram icon"></img>
                <img src="/images/icons/linkedin-icon.png" alt="linkedin icon"></img>
            </div>
            <div className={ styles.CompanyAddress}>
                <p>London</p>
                <p>221B Baker Street </p>
            </div>
        </div>
        <div className={ styles.CompanyLocation }>
            <p>This div for map</p>
        </div>
    </div>
    );
}

export default Footer;