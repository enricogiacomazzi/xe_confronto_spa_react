import React from 'react';
import css from './ErrorMessage.module.css';

export interface ErrorMessageProps {
    show: boolean,
    message: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({show, message}: ErrorMessageProps) =>
    show ? <span className={css.error}>{message}</span> : null
