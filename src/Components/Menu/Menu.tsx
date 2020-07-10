import React from 'react';
import Pizza from './Pizza/Pizza';
import styles from './Menu.module.css';

const Menu = () => {
    return (
    <div className={ styles.Menu }> 
        <Pizza image='/images/photos/pizza-1.jpg' alt="pizza one"/>
        <Pizza image='/images/photos/pizza-2.jpg' alt="pizza two"/>
        <Pizza image='/images/photos/pizza-3.jpg' alt="pizza three"/>
        <Pizza image='/images/photos/pizza-4.jpg' alt="pizza four"/>
        <Pizza image='/images/photos/pizza-5.jpg' alt="pizza five"/>
        <Pizza image='/images/photos/pizza-6.jpg' alt="pizza six"/>
        <Pizza image='/images/photos/pizza-7.jpg' alt="pizza seven"/>
        <Pizza image='/images/photos/pizza-8.jpg' alt="pizza eight"/>
    </div>);
}

export default Menu;