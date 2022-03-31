import React from 'react';
import { Menu } from './Menu';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Products } from './routes/Products';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Menu />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/About-us" element={<Products />} />
                </Routes>
            </Router>
        );
    }
};