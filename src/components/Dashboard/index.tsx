import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { ChangeEvent, Component } from 'react';
import { IApiListData, IMedia } from '../../interfaces';
import List from '../List';

interface IProps {
    classes: any;
}

interface IState {
    selectedTab: number;
    movies: IMedia[];
    shows: IMedia[];
}

const styles = {
    root: {
        padding: '2vw'
    }
}

const api_key = '6ed12e064b90ae1290fa326ce9e790ff';
const movieApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const tvApiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;

class Dashboard extends Component<IProps, IState> {
    state = {
        selectedTab: 0,
        movies: [],
        shows: []
    }

    handleChange = (event: ChangeEvent<{}>, selectedTab: any) => {
        this.setState({ selectedTab });
    }

    async componentDidMount() {
        const moviesData: IApiListData = await fetch(movieApiUrl).then((res: Response) => res.json());
        const showsData: IApiListData = await fetch(tvApiUrl).then((res: Response) => res.json());

        this.setState({
            movies: moviesData.results,
            shows: showsData.results
        })
    }

    render() {
        const { selectedTab, movies, shows } = this.state;
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

                {selectedTab === 0 && <List items={movies} header='Movies' path='movie'/>}
                {selectedTab === 1 && <List items={shows} header='TV Shows' path='tv' />}
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
