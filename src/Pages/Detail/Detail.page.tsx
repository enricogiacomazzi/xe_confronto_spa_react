

import React, {useEffect, useState} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {PostModel} from '../../Models/post.model';
import {CommentModel} from '../../Models/comment.model';
import css from './Detail.module.css';
import {Comment} from './Comment';

interface Params {
    id: string;
}

export const DetailPage: React.FC<RouteComponentProps<Params>> = ({match: {params: {id}}}) => {

    const [post, setPost] = useState<PostModel | undefined>(undefined);
    const [comments, setComments] = useState<Array<CommentModel>>([]);

    useEffect(() => {
        (async () => {
            setPost(await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(x => x.json()));
            setComments(await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(x => x.json()));
        })();
    }, [id]);

    return (
        <div className={css.detail}>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <hr/>
            {comments.map((c) => <Comment key={c.id} {...c}/>)}
        </div>
    )
};
