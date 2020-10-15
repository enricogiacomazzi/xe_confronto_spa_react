import {Info} from '../infos';

export interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
    info?: Info
}
