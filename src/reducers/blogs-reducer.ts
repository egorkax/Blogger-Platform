import {blogsAPI, BlogType} from "../api/api";
import {call, put, takeEvery} from "redux-saga/effects";


const initialState: InitialStateType = {
    blogs: []
}
//Reducer
export const blogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-BLOGS":
            return {...state, blogs: action.blogs}
        default:
            return state;
    }
}
//AC
export const setBlogsAC = (blogs: BlogType[]) =>
    ({type: "SET-BLOGS", blogs} as const)


//saga
export function* fetchBlogsWorkerSaga(): any {
    const res = yield call(blogsAPI.getBlogs)
    yield put(setBlogsAC(res.data.items))

}

export const fetchBlogs = () => ({type: 'BLOGS/FETCH-BLOGS'})


export function* blogsSagaWatcher() {
    yield takeEvery('BLOGS/FETCH-BLOGS', fetchBlogsWorkerSaga)

}

// types
type InitialStateType = {
    blogs: BlogType[]
}
type ActionsType =
    | ReturnType<typeof setBlogsAC>

