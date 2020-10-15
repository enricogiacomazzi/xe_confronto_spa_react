import React from 'react';
import css from './SearchBar.module.css';

export interface SearchBarProps {
    value: string;
    onSearch: (value: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({value, onSearch}) =>
    <input className={css.searchbar} value={value} onChange={e => onSearch(e.target.value)} type="text" />
