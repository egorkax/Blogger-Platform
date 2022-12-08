import React from 'react';
import s from './blog.module.css'
import AvaIcon from './../../../assets/icons/Ava.svg'

export const Blog = () => {
    return (
        <div className={s.blockBlog}>
            <div className={s.blog}>
                <div className={s.blockImg}>
                    <img src={AvaIcon}/>
                </div>

                <div className={s.blockInfo}>
                    <div className={s.blockHeaderName}>
                    <p className={s.titleBlog}>Some names blog</p>
                    <p className={s.website}>Website:<a className={s.linkSite}
                                                        href={'https://www.youtube.com/'}> https://www.youtube.com/</a>
                    </p>
                    </div>
                    <p className={s.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor

                    </p>
                </div>
            </div>

            <div className={s.line}/>
        </div>
    );
};

