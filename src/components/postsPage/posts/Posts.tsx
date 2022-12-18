import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../reducers/store";
import s from "./posts.module.css";
import {fetchPosts} from "../../../reducers/posts-reducer";
import {PostItem} from "../postItem/PostItem";

export const Posts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    const postsMap = posts.map((e) => <PostItem key={e.id} postTitle={e.title} postID={e.id} creatDate={e.createdAt}
                                                blogName={e.blogName}/>)
    return (
        <div className={s.blockPostsPage}>
            <h2>Posts</h2>
            <div className={s.line}/>
            <div className={s.blockSearch}>
                <select>
                    <option value="1">New posts first</option>
                    <option value="2">Old posts first</option>
                </select>
            </div>
            <div className={s.blockPosts}>
                {postsMap}
            </div>
        </div>
    );
};
