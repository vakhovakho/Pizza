import React, { useState } from 'react';
import styles from './Login.module.css';
import Input from '../UI/Form/Input/Input';
import Button from '../UI/Form/Button/Button';
import LoginDetails from '../../Core/Contracts/LoginDetails';
import { connect } from 'react-redux';
import { authorization } from '../../redux/user/actions';

const Login = ( props: {authorization: Function} ) => {
    const initialLogindata: LoginDetails = {
        email: "",
        password: ""
    }

    const [loginData, setLoginData] = useState(initialLogindata);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = {...loginData};
        const name = event.target.name as keyof LoginDetails;

        if(name in data) {
            data[name] = event.target.value;
            setLoginData(data);            
        }
        
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        props.authorization(loginData);
    }
    
    return (
        <form className={ styles.Login } onSubmit={ submit }>
            <Input type="email" id="email1" name="email" caption="Type E-mail" required onChange={ inputChangeHandler }  value={ loginData.email }/>
            <Input type="password" id="password1" name="password" caption="Type password" required onChange={ inputChangeHandler }  value={ loginData.password }/>
            <Button> Log In </Button>
        </form>
    );
}

export default connect( null, { authorization })(Login);
