import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import css from './Login.module.css';
import {ErrorMessage} from './Components/ErrorMessage';
import {AuthContext} from '../../Shared/AuthContext';
import {getHash} from './getHash';

interface LoginData {
    username: string,
    password: string
}

export const LoginPage: React.FC = () => {
    const { register, handleSubmit, errors } = useForm<LoginData>();
    const {setToken} = useContext(AuthContext);
    const history = useHistory();

    const onSubmit = (data: LoginData) => {
        if(data.username !== data.password) {
            alert('Unathorized');
            return;
        }

        setToken(getHash(data.username));
        history.push("/posts");
    }

    return (
        <form className={css.loginform} onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <ErrorMessage show={!!errors.username} message="Username required"/>
            <input type="text" name="username" ref={register({required: true})} className={css.input}/>
            <ErrorMessage show={!!errors.password} message={errors.password?.type === 'required' ? 'Password required' : 'Password too short'}/>
            <input type="password" name="password" ref={register({required: true, minLength: 5})} className={css.input}/>
            <input type="submit" value="Login" className={css.btn} />
        </form>
    )
}
