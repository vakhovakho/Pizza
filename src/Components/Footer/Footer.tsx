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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6513093155813!2d-0.15692435226592852!3d51.51961285135955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a2e67d7%3A0xd458de8d0fdc498e!2zQmFrZXIgU3QsIE1hcnlsZWJvbmUsIExvbmRvbiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sge!4v1594475776951!5m2!1sru!2sge"
         width="400" height="250"  style={{border:0}} aria-hidden="false"></iframe>
        </div>
    </div>
    );
}

export default Footer;