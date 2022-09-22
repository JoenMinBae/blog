import React from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Post from "./component/Post";
import Category from "./component/Category";

export interface IAppProps {
    //children?: React.ReactNode,
}

const App = ({}: IAppProps) => {
    const navigate = useNavigate();



    return (

            <div>
                main
                <button onClick={() => navigate('/post')}>to post</button>
                <button onClick={() => navigate('/category')}>to category</button>
                <Routes>
                    <Route path={'/post'} element={<Post/>}/>
                    <Route path={'/category'} element={<Category/>}/>
                </Routes>
            </div>
    );
};


App.defaultProps = {};

export default App;