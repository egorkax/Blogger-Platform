import React, {useEffect} from 'react';
import s from "./blog.module.css";
import HeaderIcon from './../../assets/icons/Header.svg'
import BackIcon from './../../assets/icons/Back.svg'
import {NavLink, useParams} from "react-router-dom";
import logoIcon from './../../assets/icons/Ava.svg'
import {fetchBlog} from "../../reducers/blogs-reducer";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {BlogItem} from "../blogs/blogItem/BlogItem";
import {PostItem} from "../../post/PostItem";

export const Blog = () => {
    const {blogId} = useParams()
    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs.blogs)
    const blog = blogs.find(e => e.id === blogId)
    debugger
    useEffect(() => {
        dispatch(fetchBlog(blogId!, blogs))
    }, [])
    return (
        <div className={s.blockBlogs}>
            <div className={s.header}>
                <h2>Blogs</h2>
                <img src={HeaderIcon} className={s.icon}/>
                <span className={s.blogName}>{blog!.name}</span>
            </div>
            <div className={s.line}/>
            <div>
                <NavLink to={'/blogs'} className={s.backLink}>
                    <img src={BackIcon}/>
                    <span className={s.titleLink}>Back to blogs</span> </NavLink>
            </div>
            <div className={s.blockLogo}>
                <img src={logoIcon} className={s.logo}/>
            </div>

            <BlogItem title={blog!.name} desc={blog!.description} open={true} webSite={blog!.websiteUrl}
                      createdAt={blog!.createdAt}/>
            <div className={s.blogPosts}>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>
        </div>
    );
};

