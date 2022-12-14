import React from 'react';
import s from './postItem.module.css'
import AvaIcon from './../assets/icons/Ava.svg'

export const PostItem = () => {
    return (
        <div className={s.blockPostItem}>
            <div className={s.blockImg}>
                <img src={AvaIcon}/>
            </div>
            <p className={s.titlePost}>Some Title</p>
            <p className={s.descPost}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            <p className={s.datePost}>22.22.2222</p>
        </div>
    );
};

