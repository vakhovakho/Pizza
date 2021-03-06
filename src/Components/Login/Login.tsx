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
    const [hasError, setError] = useState(false);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = {...loginData};
        const name = event.target.name as keyof LoginDetails;

        if(name in data) {
            data[name] = event.target.value;
            setLoginData(data);            
        }
        
    }

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(false);
        const result = await props.authorization(loginData);
        console.log(result);
        if(result === "success") {
            setLoginData(initialLogindata);
            setError(false);
        } else {
            setError(true);
        }
    }
    
    return (
        <form className={ styles.Login } onSubmit={ submit }>
            <Input type="email" id="email1" name="email" caption="Type E-mail" required onChange={ inputChangeHandler }  value={ loginData.email }/>
            <Input autocomplete="off" type="password" id="password1" name="password" caption="Type password" required onChange={ inputChangeHandler }  value={ loginData.password }/>
            <p className={[styles.Error, hasError ? styles.Show : ""].join(" ")}> Incorrect Credentials </p>
            <Button> Log In </Button>
        </form>
    );
}

export default connect( null, { authorization })(Login);
