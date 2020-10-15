import React from 'react';
import {PostModel} from '../../../../Models/post.model';
import css from './Card.module.css';
import {CardTitle} from './CartTitle';
import {HastagList} from './Hashtag';
import {Btn} from '../../../../Shared/Btn/Btn';

export interface CardProps {
    item: PostModel,
    addLike: (post: PostModel) => void,
    gotoDetail: (post: PostModel) => void,
    clickHashTag: (hashtag: string) => void
}

export const Card: React.FC<CardProps> = ({item, clickHashTag, addLike}) => {
    return (
        <div className={css.card}>
            <CardTitle title={item.title} likes={item.id}/>
            <hr/>
            <p>{item.body}</p>
            <hr/>
            {item.info && <HastagList tags={item.info.hashtags} click={clickHashTag} />}
            <hr/>
            <Btn text={`${(item.info?.likes || 0)}`} click={() => addLike(item)}/>
        </div>
    )
}
