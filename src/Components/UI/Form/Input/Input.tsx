import React from 'react';
import styles from './Input.module.css';

interface IProps {
    name: string,
    id: string,
    caption: string,
    value: string | number,
    type: string,
    required?: boolean,
    onChange?: Function,
    autocomplete?: string
}

const Input = (props:  IProps) => {
    return (
        <div className={ styles.Input }>
            <label htmlFor={ props.id } >{ props.caption }</label>
            <input 
                type={ props.type } 
                name={ props.name } 
                id={ props.id } 
                value={ props.value } 
                required={ props.required ? true: false }
                onChange={ (event) => props.onChange ? props.onChange(event) : null } 
                autoComplete={ props.autocomplete ?? "" }
            />
        </div>
    );
}

export default Input;