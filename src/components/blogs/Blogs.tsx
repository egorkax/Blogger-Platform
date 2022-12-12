import React, {useEffect, useState} from 'react';
import s from './blogs.module.css'
import {BlogItem} from "./blogItem/BlogItem";
import {blogsAPI} from "../../api/api";

export const Blogs = () => {
    const [blogs, setBlogs] = useState<Array<any>>([])
    useEffect(() => {
        let prom = blogsAPI.getBlogs()
        prom.then((res) => {
            setBlogs(res.data)
            debugger
        })
    }, [])
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
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>

            </div>
        </div>
    );
};

