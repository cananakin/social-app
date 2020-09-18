import Grid from '@material-ui/core/Grid';
import styles from './Widgets.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


export default function Widgets() {

    return (
        <Grid item xs>

            <Card className={styles.root}>
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                        <Typography component="h5" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <div className={styles.controls}>
                        <IconButton aria-label="previous">
                            <SkipPreviousIcon />
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon className={styles.playIcon} />
                        </IconButton>
                        <IconButton aria-label="next">
                            <SkipNextIcon />
                        </IconButton>
                    </div>
                </div>
                <CardMedia
                    className={styles.cover}
                    src=""
                    title="Live from space album cover"
                />
            </Card>
        </Grid>
    )
}
