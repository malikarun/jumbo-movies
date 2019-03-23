
import React, { Component, Fragment, ChangeEvent } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Movies from '../Movies';
import Shows from '../Shows';
import { withStyles } from '@material-ui/core';

interface IProps {
    classes: any;
}

interface IState {
    selectedTab: number;
}

const styles = {
    root: {
        padding: 20
    }
}

class Dashboard extends Component<IProps, IState> {
    state = {
        selectedTab: 0,
    };

    handleChange = (event: ChangeEvent<{}>, selectedTab: any) => {
        this.setState({ selectedTab });
    };

    render() {
        const { selectedTab } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Tabs
                    value={selectedTab}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Movies" />
                    <Tab label="TV Shows" />
                </Tabs>

                {selectedTab === 0 && <Movies/>}
                {selectedTab === 1 && <Shows />}
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
