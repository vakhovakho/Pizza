import React from 'react';
import styles from './Wrapper.module.css';

const Wrapper = (props: any) => {
    return (
        <div className={ styles.Wrapper }>
            { props.children }
        </div>
    )
} 

export default Wrapper;