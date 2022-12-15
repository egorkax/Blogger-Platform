import {blogsAPI, BlogType, postsAPI, PostType} from "../api/api";
import {call, put, takeEvery} from "redux-saga/effects";


const initialState: InitialStateType = {
    posts: [],
}
//Reducer
export const blogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-POSTS":
            return {...state, posts: action.posts}
        // case "SET-BLOG":
        //     return {...state, blog: {...state.blog, blogInfo: action.blog}}
        // case "SET-BLOG-POSTS":
        //     return {...state, blog: {...state.blog, posts: action.posts}}
        default:
            return state;
    }
}
//AC
export const setPostsAC = (posts: PostType[]) =>
    ({type: "SET-POSTS", posts} as const)

export const setBlogAC = (blog: BlogType) =>
    ({type: "SET-BLOG", blog} as const)
export const setBlogPostsAC = (posts: PostType[]) =>
    ({type: "SET-BLOG-POSTS", posts} as const)

//saga
export function* fetchPostsWorkerSaga(): any {
    const res = yield call(postsAPI.getPosts)
    yield put(setPostsAC(res.data.items))
}

export const fetchBlogs = () => ({type: 'POSTS/FETCH-POSTS'})

// export function* fetchBlogWorkerSaga(action: ReturnType<typeof fetchBlog>): any {
//     const blog = action.blogs.find(e => e.id === action.blogId)
//     yield put(setBlogAC(blog!))
//     const res = yield call(blogsAPI.getBlog, action.blogId)
//     yield put(setBlogPostsAC(res.data.items))
//     debugger
//
// }
//
// export const fetchBlog = (blogId: string, blogs: BlogType[]) => ({type: 'BLOGS/FETCH-BLOG', blogId, blogs})


export function* blogsSagaWatcher() {
    yield takeEvery('POSTS/FETCH-POSTS', fetchPostsWorkerSaga)

}

// types
type InitialStateType = {
    posts: PostType[]
}
type ActionsType =
    | ReturnType<typeof setPostsAC>


