import React from 'react';
import s from './blogs.module.css'
import {Blog} from "./blog/Blog";

export const Blogs = () => {
    return (
        <div className={s.blockBlogs}>
            <h2>Blogs</h2>
            <div className={s.line}/>
            <div className={s.blockSearch}>
                <div>
                    <input/>
                </div>
                <select>
                    <option value="1">New blogs first</option>
                    <option value="2">Old blogs first</option>
                    <option value="3">From A to Z</option>
                    <option value="4">From Z to A</option>
                </select>
            </div>
            <div>
                <Blog/>
                <Blog/>
                <Blog/>

            </div>
        </div>
    );
};

