import {blogsAPI, BlogType, PostType} from "../api/api";
import {call, put, takeEvery} from "redux-saga/effects";


const initialState: InitialStateType = {
    blogs: [],
    blog: {
        blogInfo: {
            id: '',
            websiteUrl: '',
            description: '',
            name: '',
            createdAt: ''
        },
        posts: []
    }
}
//Reducer
export const blogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-BLOGS":
            return {...state, blogs: action.blogs}
        case "SET-BLOG":
            return {...state, blog: {...state.blog, blogInfo: action.blog}}
        case "SET-BLOG-POSTS":
            return {...state, blog: {...state.blog, posts: action.posts}}
        default:
            return state;
    }
}
//AC
export const setBlogsAC = (blogs: BlogType[]) =>
    ({type: "SET-BLOGS", blogs} as const)
export const setBlogAC = (blog: BlogType) =>
    ({type: "SET-BLOG", blog} as const)
export const setBlogPostsAC = (posts: PostType[]) =>
    ({type: "SET-BLOG-POSTS", posts} as const)

//saga
export function* fetchBlogsWorkerSaga(): any {
    const res = yield call(blogsAPI.getBlogs)
    yield put(setBlogsAC(res.data.items))
}

export const fetchBlogs = () => ({type: 'BLOGS/FETCH-BLOGS'})

export function* fetchBlogWorkerSaga(action: ReturnType<typeof fetchBlog>): any {
    const blog = action.blogs.find(e => e.id === action.blogId)
    yield put(setBlogAC(blog!))
    const res = yield call(blogsAPI.getBlog, action.blogId)
    yield put(setBlogPostsAC(res.data.items))
    debugger

}

export const fetchBlog = (blogId: string, blogs: BlogType[]) => ({type: 'BLOGS/FETCH-BLOG', blogId, blogs})


export function* blogsSagaWatcher() {
    yield takeEvery('BLOGS/FETCH-BLOGS', fetchBlogsWorkerSaga)
    yield takeEvery('BLOGS/FETCH-BLOG', fetchBlogWorkerSaga)

}

// types
type InitialStateType = {
    blogs: BlogType[]
    blog: {
        blogInfo: BlogType
        posts: PostType[]
    }
}
type ActionsType =
    | ReturnType<typeof setBlogsAC>
    | ReturnType<typeof setBlogAC>
    | ReturnType<typeof setBlogPostsAC>

