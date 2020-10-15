import React from 'react';
import css from './Hastag.module.css';


export const Hashtag: React.FC<{tag: string, click: (tag: string) => void}> = ({tag, click}) =>
    <span  className={css.item} onClick={(e) => {e.preventDefault(); click(tag)}}>{tag}</span>

export const HashtagList: React.FC<{tags: Array<string>, click: (tag: string) => void}> = ({tags, click}) =>
    <span className={css.list} style={{display: 'inline'}}>
        {tags.map(tag => <Hashtag key={tag} tag={tag} click={click}/>)}
    </span>

