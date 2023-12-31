import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
<ProductProvider>
    <Router>
        <App />
    </Router>
</ProductProvider>,
document.getElementById('root'));

// unregister() to register() to work offline.
serviceWorker.unregister();
