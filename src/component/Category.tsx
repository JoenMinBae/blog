import React from 'react';
import {useNavigate} from "react-router";


export interface ICategoryProps {
    //children?: React.ReactNode,
}

const Category = ({}: ICategoryProps) => {

    const navigate = useNavigate();



    return (
        <div>
            <h2 style={{margin: "10px", color: "red"}}>Category</h2>
            <button onClick={() => navigate('/')}>to home</button>
            <button onClick={() => navigate('/post')}>to post</button>
        </div>
    );
};


Category.defaultProps = {};

export default Category;