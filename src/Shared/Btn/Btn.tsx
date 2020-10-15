import React from 'react';

export interface BtnProps {
    text: string;
    icon?: string;
    disabled?: boolean;
    click: () => void;
}

export const Btn: React.FC<BtnProps> = ({text, icon, click}) =>
    <button onClick={e => {e.preventDefault(); click()}}>{text}</button>
