import React from 'react';
import s from './blogItem.module.css'
import AvaIcon from './../../../assets/icons/Ava.svg'
import {NavLink} from "react-router-dom";

type PropsType = {
    title: string
    desc: string
    webSite: string
    createdAt?: string

}

export const BlogItem = (props: PropsType) => {
    return (
        <div className={s.blockBlog}>
            <div className={s.blog}>
                <div className={s.blockImg}>
                    <img src={AvaIcon}/>
                </div>

                <div className={s.blockInfo}>
                    <div className={s.blockHeaderName}>
                        <NavLink to={`/blog`}>
                            <p className={s.titleBlog}>{props.title}</p>
                        </NavLink>
                        <p className={s.website}>Website:<a className={s.linkSite}
                                                            href={props.webSite}>{props.webSite}</a>
                        </p>
                    </div>
                    <p className={s.description}>
                        {props.desc}
                    </p>
                </div>
            </div>
            <div className={s.line}/>
        </div>
    );
};


export const BlogItemOpen = (props: PropsType) => {

    return (
        <div className={s.blockBlog}>
            <div className={s.blog}>
                <div className={s.blockImgOpen}>
                    <img src={AvaIcon}/>
                </div>
                <div className={s.blockInfo}>
                    <div className={s.blockHeaderName}>
                        <p className={s.titleBlog}>{props.title}</p>
                        <p className={s.createDate}>Blog creation date:<span>{props.createdAt}</span></p>
                        <p className={s.website}>Website:<a className={s.linkSite}
                                                            href={props.webSite}> {props.webSite}</a>
                        </p>
                    </div>
                    <p className={s.description}>
                        {props.desc}
                    </p>
                </div>
            </div>

            <div className={s.line}/>
        </div>
    );
};