import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import PagesPromotionSearch from './Promotion/Search/Search';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" componet={PagesPromotionSearch} />
            </Switch>
        </Router>
    );
}

export default Root;