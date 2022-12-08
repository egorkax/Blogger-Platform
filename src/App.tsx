import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Blogs} from "./components/blogs/Blogs";
import {Posts} from "./components/posts/Posts";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'contentInfo'}>
                <Navbar/>
                <Routes>
                    <Route path={'/blogs'} element={<Blogs/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default App;
