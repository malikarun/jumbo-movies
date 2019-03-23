import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IMedia } from '../../interfaces';

interface IProps {
    header: string;
    path: string;
    items: IMedia[];
    classes: any;
}

interface IState {
}

const styles = {
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    }
}

const posterUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

class List extends Component<IProps, IState> {
    render() {
        const { classes, items, header, path } = this.props;

        return (
            <GridList cellHeight={180}>

                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">{header}</ListSubheader>
                </GridListTile>

                {items && items.map((item: IMedia) => (
                    <GridListTile key={item.id}>
                        <img src={`${posterUrl}${item.poster_path}`} alt={path === 'movie' ? item.title : item.name} />

                        <GridListTileBar
                            title={path === 'movie' ? item.title : item.name}
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
        );
    }
}

export default withStyles(styles)(List);
