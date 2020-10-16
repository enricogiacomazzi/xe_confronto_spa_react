import React, {useMemo} from 'react';
import {PostModel} from '../../../../Models/post.model';
import {Card} from '../Card/Card';
import css from './ItemList.module.css';

export interface ItemListProps {
    items: Array<PostModel>,
    search: string;
    addLike: (post: PostModel) => void,
    gotoDetail: (post: PostModel) => void,
    clickHashTag: (hashtag: string) => void
}

export const ItemList: React.FC<ItemListProps> = ({items, search, ...rest}) => {

    const searchItems = useMemo(() =>
            !search ? items : items.filter(i => i.hashtags.some(h => h.toUpperCase().includes(search.toUpperCase()))),
        [items, search]);

    return <div className={css.list}>{searchItems.map(item => <Card key={item.id} item={item} {...rest}/>)}</div>
}

