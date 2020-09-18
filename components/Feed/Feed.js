import Grid from '@material-ui/core/Grid';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

export default function Feed() {
    return (
        <Grid item xs={6}>
            <StoryReel />
            <MessageSender />
            <Post />
        </Grid>

    )
}
