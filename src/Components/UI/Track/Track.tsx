import React from 'react';
import styles from './Track.module.css';


const Track = ( props: any) => {
    return (
        <div className={ styles.Track }>
            <div className={ [styles.Circle, styles.Gold].join(" ")}></div>
            <div className={ [styles.Line, styles.Gold].join(" ")}></div>
            <div className={ [styles.Circle, styles.Gold].join(" ")}></div>
            <div className={ [styles.Line, styles.Gold].join(" ")}></div>
            <div className={ [styles.Circle, styles.Gold].join(" ")}></div>
            <div className={ styles.Line}></div>
            <div className={ styles.Circle}></div>
        </div>
    );
}

export default Track;