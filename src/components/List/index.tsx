import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import React, { Component, Fragment, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { IMedia } from '../../interfaces';
import TextField from '@material-ui/core/TextField';

interface IProps {
    header: string;
    path: string;
    items: IMedia[];
    classes: any;
}

interface IState {
    searchTerm: string;
}

const styles = {
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    }
}

const posterUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

class List extends Component<IProps, IState> {
    state = {
        searchTerm: ''
    }

    handleChange = (event: any) => {
        this.setState({ searchTerm: event.target.value});
    }

    render() {
        const { classes, items: terms, header, path } = this.props;
        const { searchTerm } = this.state;
        const field = path === 'movie' ? 'title' : 'name';
        const items = terms.filter((term: IMedia) => term[field].toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <Fragment>
                <TextField
                    label="Search"
                    placeholder="Placeholder"
                    fullWidth
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <GridList cellHeight={180}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">{header}</ListSubheader>
                    </GridListTile>

                    {items && items.map((item: IMedia) => (
                        <GridListTile key={item.id}>
                            <img src={`${posterUrl}${item.poster_path}`} alt={item[field]} />

                            <GridListTileBar
                                title={item[field]}
                                subtitle={<span>Votes: {item.vote_count}</span>}
                                actionIcon={
                                    <Link to={`/${path}/${item.id}`}>
                                        <IconButton className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    </Link>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </Fragment>
        );
    }
}

export default withStyles(styles)(List);
