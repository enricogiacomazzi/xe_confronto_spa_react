import React, {useContext} from 'react';
import {PostModel} from '../../../../Models/post.model';
import css from './Card.module.css';
import {CardTitle} from './CartTitle';
import {HashtagList} from './Hashtag';
import {Btn} from '../../../../Shared/Btn/Btn';
import {AuthContext} from '../../../../Shared/AuthContext';

export interface CardProps {
    item: PostModel,
    addLike: (post: PostModel) => void,
    gotoDetail: (post: PostModel) => void,
    clickHashTag: (hashtag: string) => void
}

export const Card: React.FC<CardProps> = ({item, gotoDetail, clickHashTag, addLike}) => {
    const {token} = useContext(AuthContext);
    return (
        <div className={css.card}>
            <CardTitle title={item.title} likes={item.likes} click={() => gotoDetail(item)}/>
            <hr/>
            <p>{item.body}</p>
            <hr/>
            <HashtagList tags={item.hashtags} click={clickHashTag} />
            <hr/>
            <Btn icon="fa-heart" click={() => addLike(item)} disabled={!token}>
                {`${(item.likes)}`}
            </Btn>
        </div>
    )
}
