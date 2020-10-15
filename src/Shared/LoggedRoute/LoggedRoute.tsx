import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from '../AuthContext';
import {RouteProps} from 'react-router';


export const LoggedRoute: React.FC<RouteProps> = ({children, component, ...rest}) => {
    const {token} = useContext(AuthContext);
    return <Route {...rest}>{!!token ? (children || component) : <Redirect to="/login"/>}</Route>;
}
