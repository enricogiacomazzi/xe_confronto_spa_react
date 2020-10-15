import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from '../AuthContext';
import {RouteProps} from 'react-router';


export const LoggedRoute: React.FC<RouteProps> = ({component, ...rest}) => {
    const {token} = useContext(AuthContext);
    const Component: any = component;
    return <Route {...rest} render={props => (
        !!token ? <Component {...props}/> : <Redirect to="/login"/>
        )} />;
}
