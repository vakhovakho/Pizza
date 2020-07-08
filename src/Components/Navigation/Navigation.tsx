import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={ styles.Navigation }>
            <NavigationItem />
            <NavigationItem />
        </div>
    );
}

export default Navigation;