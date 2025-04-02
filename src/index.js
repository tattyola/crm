import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from './redux/store'
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
