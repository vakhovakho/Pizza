import React, { ReactNode } from 'react';
import styles from './Button.module.css';

const Button = (props: {children: ReactNode}) => {
    return (
        <button className={ styles.Button }>
            { props.children }
        </button>
    );
}

export default Button;