import {AnyAction, applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from 'redux';
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

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware()

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>()


sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
    yield all([blogsSagaWatcher(), blogsSagaWatcher(),])
}


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
