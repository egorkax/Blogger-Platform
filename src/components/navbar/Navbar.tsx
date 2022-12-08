import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import s from './navbar.module.css'
import {PostsIcon} from "../../assets/icons/Posts";
import {BlogsIcon} from "../../assets/icons/Blogs";

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState<'blogs' | 'posts'>()

    const setActiveBlogsLinkHandler = () => {
        setActiveLink('blogs')
    }
    const setActivePostsLinkHandler = () => {
        setActiveLink('posts')
    }
    const className = (navData: { isActive: boolean, isPending: boolean }) => (navData.isActive ? `${s.item} ${s.active}` : s.item)
    return (
        <nav className={s.blockNav}>
            <NavLink to={'/blogs'} onClick={setActiveBlogsLinkHandler}
                     className={className}>
                <BlogsIcon className={s.icon} fill={activeLink === 'blogs' ? '#F8346B' : '#1A1718'}/>
                Blogs
            </NavLink>
            <NavLink to={'/posts'} onClick={setActivePostsLinkHandler}
                     className={className}>
                <PostsIcon className={s.icon} fill={activeLink === 'posts' ? '#F8346B' : '#1A1718'}/>
                Posts
            </NavLink>
        </nav>
    );
};

