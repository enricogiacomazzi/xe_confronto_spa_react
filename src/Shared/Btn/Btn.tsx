import React from 'react';
import css from './Btn.module.css';
import classnames from 'classnames';

export interface BtnProps {
    icon?: string;
    disabled?: boolean;
    click: () => void;
}

export const Btn: React.FC<BtnProps> = ({children, icon, disabled, click}) => {

    const classes = classnames(css.btn, disabled ? css.disabled : null);

    return (
        <button className={classes} onClick={e => {e.preventDefault(); click()}} disabled={disabled || false}>
            {icon && <i className={[css.icon, 'fa', icon].join(' ')}/>}
            {children}
        </button>
    )
}

