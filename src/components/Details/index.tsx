import React, { Component, Fragment } from 'react';
import { IMedia } from '../../interfaces';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface IProps {
    classes: any;
    match: any;
}

interface IState {
    media: IMedia | null;
}

const api_key = '6ed12e064b90ae1290fa326ce9e790ff';
const apiUrl = `https://api.themoviedb.org/3`;
const posterUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

const styles = {
    root: {
        padding: '2vw'
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: '60vh',
    },
};


class Details extends Component<IProps, IState> {
    state: IState = {
        media: null
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const type = params.type;
        const id = params.id;
        const media: IMedia = await fetch(`${apiUrl}/${type}/${id}?api_key=${api_key}`).then((res: Response) => res.json());
        this.setState({ media });
    }

    render() {
        const { media } = this.state;
        const { classes, match: { params: { type } } } = this.props;
        const title: string = media && (type === 'movie' ? media.title : media.name) || '';

        return (
            <Fragment>
                <div className={classes.root}>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>

                    {
                        media && <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${posterUrl}${media.poster_path}`}
                                    title={title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {title}
                                    </Typography>

                                    <Typography component="p">
                                        {media.overview}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    }
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Details);
