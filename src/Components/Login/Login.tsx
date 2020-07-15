import React from 'react';
import styles from './Login.module.css';
import Input from '../UI/Form/Input/Input';
import Button from '../UI/Form/Button/Button';


const Login = ( props: any) => {
    return (
        <div className={ styles.Login }>
            <Input type="email" id="e-mail" name="e-mail" caption="Type E-mail" value="" required/>
            <Input type="password" id="password" name="password" caption="Type password" value="" required/>
            <Button> Log In </Button>
        </div>
    );
}

export default Login;