import React from 'react';
import styles from './Register.module.css';
import Input from '../UI/Form/Input/Input';


const Register = ( props: any) => {
    return (
        <div className={ styles.Register }>
            <div>
                <h2>Contact information</h2>
                <Input type="text" id="name" name="name" caption="Full Name" value="" required/>
                <Input type="text" id="number" name="number" caption="Phone number" value="" required/>
                <Input type="text" id="street" name="street" caption="Street Name" value="" required/>
            </div>
            <div>
                <h2>Login information</h2>
                <Input type="text" id="e-mail" name="e-mail" caption="E-mail" value="" required/>
                <Input type="text" id="password" name="password" caption="Type your password" value="" required/>
                <Input type="text" id="password_confirmation" name="password_cpnfirmation" caption="Repeat your password" value="" required/>
            </div>
        </div>
    );
}

export default Register;
