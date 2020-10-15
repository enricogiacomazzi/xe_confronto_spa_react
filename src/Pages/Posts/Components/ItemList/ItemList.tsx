import React from 'react';
import {PostModel} from '../../../../Models/post.model';
import {Card} from '../Card/Card';
import css from './ItemList.module.css';

export interface ItemListProps {
    items: Array<PostModel>,
    addLike: (post: PostModel) => void,
    gotoDetail: (post: PostModel) => void,
    clickHashTag: (hashtag: string) => void
}

export const ItemList: React.FC<ItemListProps> = ({items, ...rest}) =>
    <div className={css.list}>{items.map(item => <Card key={item.id} item={item} {...rest}/>)}</div>
