import {Info} from '../infos';

export interface PostModel extends Info{
    userId: number;
    id: number;
    title: string;
    body: string;
}
