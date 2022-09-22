import React from 'react';
import {useNavigate} from "react-router";


export interface IPostProps {
    //children?: React.ReactNode,
}

const Post = ({}: IPostProps) => {
    const navigate = useNavigate();


    return (
        <div>
            <h2 style={{margin: "10px", color: "red"}}>post</h2>
            <button onClick={() => navigate('/')}>to home</button>
            <button onClick={() => navigate('/category')}>to category</button>
            <div className={'border text-blue-500 underline'}>sda</div>
        </div>
    );
};


Post.defaultProps = {};

export default Post;