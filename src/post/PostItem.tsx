import React from 'react';
import s from './postItem.module.css'
import AvaIcon from './../assets/icons/Ava.svg'
import {PostType} from "../api/api";

export type PostItemType = {
    post: PostType
}
export const PostItem = (props: PostItemType) => {
    return (
        <div className={s.blockPostItem}>
            <div className={s.blockImg}>
                <img src={AvaIcon}/>
            </div>
            <p className={s.titlePost}>{props.post.title}</p>
            <p className={s.descPost}>{props.post.shortDescription} </p>
            <p className={s.datePost}>{props.post.createdAt}</p>
        </div>
    );
};

