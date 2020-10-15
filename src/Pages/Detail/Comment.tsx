import React from 'react';
import {CommentModel} from '../../Models/comment.model';
import css from './Detail.module.css';

export const Comment: React.FC<CommentModel> = ({name, email, body}) => {
    return (
        <div className={css.comment}>
            <h4>{name} ({email})</h4>
            <p>{body}</p>
        </div>
    )
}
