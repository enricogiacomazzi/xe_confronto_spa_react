import React, {useContext} from 'react';
import css from './Navbar.module.css';
import {AuthContext} from '../AuthContext';
import { useHistory } from 'react-router-dom';


export const Navbar: React.FC = () => {

    const {token, setToken} = useContext(AuthContext);
    const history = useHistory();

    const login = () => {
        history.push('/login')
    }

    return (
        <div className={css.navbar}>
            <h1 className={css.title}>XE react</h1>
            {!!token
                ? <span className={css.logoutBtn} onClick={() => setToken(undefined)}>Logout</span>
                : <span className={css.logoutBtn} onClick={login}>Login</span>
            }
        </div>
    );
}

