import React from 'react';

export interface Auth {
    token: string | undefined,
    setToken: (value: string | undefined) => void
}

export const AuthContext = React.createContext<Auth>({token: undefined, setToken: (value) => {}});
