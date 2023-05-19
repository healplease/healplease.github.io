import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';

import './index.scss';
import './assets/fonts/AllerDisplay.ttf';
import './assets/fonts/AllerRegular.ttf';
import './assets/fonts/AllerItalic.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
