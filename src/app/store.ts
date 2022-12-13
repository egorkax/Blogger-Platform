import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkDispatch} from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import {blogsReducer, blogsSagaWatcher} from "../reducers/blogs-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    blogs: blogsReducer
})

const sagaMiddleware = createSagaMiddleware()

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>()


sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
    yield all([blogsSagaWatcher()])
}


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
