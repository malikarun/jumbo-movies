import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Details from '../Details';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component<{}, {}> {
    render() {
        return (
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Jumbo Movies
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Route path="/" exact component={Dashboard} />
                <Route path="/:type/:id" exact component={Details} />
            </Router>
        );
    }
}

export default App;
