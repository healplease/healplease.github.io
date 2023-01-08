import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import router from './components/common/Router.jsx';

const App = () => {
    return (
        <div style={{ height: '100vh' }}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
