import {useContext, useEffect, useState} from 'react';
import {PostModel} from '../../Models/post.model';
import {AuthContext} from '../../Shared/AuthContext';
import {useHistory} from 'react-router-dom';
import {readINFOS, saveINFOS} from '../../infos';
import produce from 'immer';


export const usePosts = () => {

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

    const addLike = (post: PostModel) => {
        const edited = produce<Array<PostModel>>(posts, draft => {
            const p = draft.find(({id}) => id === post.id);
            if(!!p) {
                p.likes++;
            }
        });
        setPosts(edited);
        savePosts(edited);
    }

    const gotoDetail = (post: PostModel) => {
        history.push(`/posts/${post.id}`);
    }

    return {
        posts, search, setSearch, addLike, gotoDetail
    }
}

// const {posts, search, setSearch, addLike, gotoDetail } = usePosts();
