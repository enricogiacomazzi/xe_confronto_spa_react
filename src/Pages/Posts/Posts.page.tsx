

import React from 'react';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {ItemList} from './Components/ItemList/ItemList';
import css from './Posts.module.css';

import {usePosts} from './usePosts';

export const PostsPage: React.FC = () => {


    const {posts, search, setSearch, addLike, gotoDetail } = usePosts();
    return (
        <div className={css.posts}>
            <SearchBar value={search} onSearch={setSearch}/>
            <ItemList items={posts} search={search} addLike={addLike} gotoDetail={gotoDetail} clickHashTag={setSearch}/>
        </div>
    );
}
