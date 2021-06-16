import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BookShelves from "../views/Bookshelves";
import SearchBooks from "../views/SearchBooks";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';

const RouterController = () => {
    return (
        <Router>
            <Link to="/">
                <HomeIcon color="primary" fontSize="large" />
            </Link>
            <Link to="/search">
                <SearchIcon color="primary" fontSize="large" />
            </Link>
            <Switch>
                <Route exact path="/">
                    <BookShelves />
                </Route>
                <Route path="/search">
                    <SearchBooks />
                </Route>
            </Switch>
        </Router>
    );
};

export default RouterController;
