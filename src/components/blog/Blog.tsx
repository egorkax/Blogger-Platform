import React from 'react';
import s from "./blog.module.css";
import HeaderIcon from './../../assets/icons/Header.svg'
import BackIcon from './../../assets/icons/Back.svg'
import {NavLink} from "react-router-dom";
import logoIcon from './../../assets/icons/Ava.svg'
import {BlogItemOpen} from "../blogs/blogItem/BlogItem";

export const Blog = (props: any) => {
    return (
        <div className={s.blockBlogs}>
            <div className={s.header}>
                <h2>Blogs</h2>
                <img src={HeaderIcon} className={s.icon}/>
                <span className={s.blogName}>{props.blogName} safsdfsaf </span>
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
            {/*<BlogItemOpen/>*/}

        </div>
    );
};

