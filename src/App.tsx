import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export interface IAppProps {
    //children?: React.ReactNode,
}

const App = ({}: IAppProps) => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
              main
            </div>
        </BrowserRouter>
    );
};


App.defaultProps = {};

export default App;