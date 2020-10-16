

import React, {useContext, useEffect, useState} from 'react';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {ItemList} from './Components/ItemList/ItemList';
import css from './Posts.module.css';
import {PostModel} from '../../Models/post.model';
import {AuthContext} from '../../Shared/AuthContext';
import {readINFOS, saveINFOS} from '../../infos';
import { useHistory } from 'react-router-dom';
import produce from 'immer';

export const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Array<PostModel>>([]);
    const [search, setSearch] = useState<string>('');
    const {token} = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(x => x.json())
            .then((data: Array<PostModel>) => {
                const infos = readINFOS(token);
                data = data.map(d => {
                    const {...info} = infos[d.id];
                    return {...d, ...info};
                });
                setPosts(data);
            });
    }, [token]);

    const savePosts = (posts: Array<PostModel>) => {
        const infos: any = {};
        posts.forEach(({id, likes, hashtags}) => infos[id] = {likes, hashtags});
        if(!!token) {
            saveINFOS(infos, token);
        }
    }

    // const addLike = (post: PostModel) => {
    //     console.log('click');
    //     const found = posts.find(({id}) => post.id);
    //     if(!!found) {
    //         found.likes++;
    //     }
    //
    //     setPosts(posts);
    // }

    const addLike = (post: PostModel) => {
        const edited = posts.map(p => p.id !== post.id
            ? p
            : {...p, likes: p.likes + 1});
        setPosts(edited);
        savePosts(edited);
    }

    // const addLike = (post: PostModel) => {
    //     const edited = produce<Array<PostModel>>(posts, draft => {
    //         const p = draft.find(({id}) => id === post.id);
    //         if(!!p) {
    //             p.likes++;
    //         }
    //     });
    //     setPosts(edited);
    //     savePosts(edited);
    // }

    const gotoDetail = (post: PostModel) => {
        history.push(`/posts/${post.id}`);
    }

    return (
        <div className={css.posts}>
            <SearchBar value={search} onSearch={setSearch}/>
            <ItemList items={posts} search={search} addLike={addLike} gotoDetail={gotoDetail} clickHashTag={setSearch}/>
        </div>
    );
}
