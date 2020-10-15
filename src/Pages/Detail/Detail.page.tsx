

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const DetailPage: React.FC<RouteComponentProps<{id?: string}>> = ({match: {params: {id}}}) => {
    return <h1>Detail {id}</h1>;
}
