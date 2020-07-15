import React, { ReactNode } from 'react';
import styles from './Button.module.css';

const Button = (props: {children: ReactNode, onClick?: Function}) => {
    return (
        <button className={ styles.Button } onClick={ () => props.onClick ? props.onClick() : null }>
            { props.children }
        </button>
    );
}

export default Button;