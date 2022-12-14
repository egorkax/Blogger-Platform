import React, {useEffect} from 'react';
import s from './blogs.module.css'
import {BlogItem} from "./blogItem/BlogItem";
import {fetchBlogs} from "../../reducers/blogs-reducer";
import {useAppDispatch, useAppSelector} from "../../app/store";

export const Blogs = () => {
    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs.blogs)
    useEffect(() => {

        dispatch(fetchBlogs())
    }, [])
    const blogsMap = blogs.map((e) => <BlogItem key={e.id} id={e.id} title={e.name} desc={e.description}
                                                webSite={e.websiteUrl}/>)
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
                {blogsMap}
            </div>
        </div>
    );
};

