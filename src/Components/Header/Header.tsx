import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={ styles.Header }>
            <div className={ styles.HeaderNav }>
                <div className={ styles.Contact }>
                    <div className={ styles.PhoneNumber }>
                        <p>+0 (000) <span>000-000</span></p>
                        <p>From 10:00 till 22:00</p>
                    </div>
                    <div className={ styles.Phone }>
                        <img src="/images/icons/phone-icon.png" alt="Phone icon"></img>
                    </div>
                </div>
                <div className={ styles.Address }>
                    <div className={ styles.Pin }>
                        <img src="/images/icons/pin-icon.png" alt="Pin icon"></img>
                    </div>
                    <div className={ styles.Location }>
                        <p>London</p>
                        <p>221B Baker Street </p>
                    </div>
                </div>
                <div className={ styles.NavLogo}>
                    <img src="/images/icons/pizza-icon.png" alt="Pizza icon"></img>
                </div>
                <div className={ styles.Orders }>
                    <div className={ styles.Registration }>
                        <a href="/">Registration</a>
                        <a href="/">Allready have an account</a>
                    </div>
                </div>
                <div className={ styles.Cart}>
                    <div className={ styles.CartIcon }>
                        <img src="/images/icons/shoppingbag-icon.png" alt="shopping bag icon"></img>
                    </div>
                    <div className={ styles.CartCounter }>
                        <p>00000</p>
                        <p>In the cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;