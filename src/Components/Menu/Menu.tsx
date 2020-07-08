import React from 'react';
import Pizza from './Pizza/Pizza';
import styles from './Menu.module.css';

const Menu = () => {
    return (
    <div className={ styles.Menu }> 
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
    </div>);
}

export default Menu;