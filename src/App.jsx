import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import { DarkModeProvider } from './hooks/useDarkMode';
import router from './components/common/Router.jsx';

const App = () => {
    return (
        <div style={{ height: '100vh' }}>
            <DarkModeProvider>
                <RouterProvider router={router} />
            </DarkModeProvider>
        </div>
    );
}

export default App;
