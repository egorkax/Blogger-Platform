import React from 'react';
import s from './blogs.module.css'

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
                    <option value="2">16</option>
                    <option value="3">24</option>
                </select>
            </div>
        </div>
    );
};

