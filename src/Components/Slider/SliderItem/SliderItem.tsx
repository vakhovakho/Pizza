import React from 'react';
import styles from './SliderItem.module.css';

const SliderItem =(props: any) => {
    return (
        <div className={ styles.SliderItem }>
            <img src={ props.image } alt={ props.alt }/>
        </div>
    )
}

export default SliderItem;