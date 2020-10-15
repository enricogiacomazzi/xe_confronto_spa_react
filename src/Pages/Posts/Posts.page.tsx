

import React, {useContext, useEffect, useState} from 'react';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {ItemList} from './Components/ItemList/ItemList';
import css from './Posts.module.css';
import {PostModel} from '../../Models/post.model';
import {AuthContext} from '../../Shared/AuthContext';
import {readINFOS} from '../../infos';

export const PostsPage: React.FC = () => {

    const [posts, setPosts] = useState<Array<PostModel>>([]);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(x => x.json())
            .then((data: Array<PostModel>) => {
                const infos = readINFOS(token);
                data.forEach(d => d.info = infos[d.id]);
                console.log('aaaaa', token, data);
                setPosts(data);
            });
    }, [token]);

    const addLike = () => {

    }

    const gotoDetail = () => {

    }

    const clickHashtag = () => {

    }

    return (
        <div className={css.posts}>
            <SearchBar/>
            <ItemList items={posts} addLike={addLike} gotoDetail={gotoDetail} clickHashTag={clickHashtag}/>
        </div>
    );
}
