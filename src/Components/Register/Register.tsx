import React from 'react';
import styles from './Register.module.css';
import Input from '../UI/Form/Input/Input';
import Button from '../UI/Form/Button/Button';
import ContactDetails from '../../Core/Contracts/ContactDetails';


const Register = ( props: {inputChanged: Function, registerData: ContactDetails}) => {
    return (
        <div className={ styles.Register }>
            <div>
                <h2>Contact information</h2>
                <Input type="text" id="name" name="name" caption="Full Name" required onChange={ props.inputChanged }  value={ props.registerData.name } />
                <Input type="text" id="number" name="number" caption="Phone number" required onChange={ props.inputChanged }  value={ props.registerData.number }/>
                <Input type="text" id="address" name="address" caption="Address" required onChange={ props.inputChanged }  value={ props.registerData.address }/>
            </div>
            <div>
                <h2>Login information</h2>
                <Input type="email" id="email" name="email" caption="E-mail" required onChange={ props.inputChanged }  value={ props.registerData.email }/>
                <Input type="password" id="password" name="password" caption="Type your password" required onChange={ props.inputChanged }  value={ props.registerData.password ?? '' }/>
                <Input type="password" id="password_confirmation" name="password_confirmation" caption="Repeat your password" required onChange={ props.inputChanged }  value={ props.registerData.password_confirmation ?? '' }/>
            </div>
            <Button> Register </Button>
        </div>
    );
}

export default Register;
