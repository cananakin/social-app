import StoryItem from './StoryItem';
import styles from './Story.module.css';
import Paper from '@material-ui/core/Paper';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



  
const StoryReel = () => {
    return (
        <div style={{position: 'relative'}}>
            <div className={styles.root}>
                <Paper className={styles.story} elevation={0} >
                    <StoryItem title="Canan" styles={styles}/>
                </Paper>
                <Paper className={styles.story} elevation={0} />
                <Paper className={styles.story} elevation={0} />
                <Paper className={styles.story} elevation={0} />
                <Paper className={styles.story} elevation={0} />
            </div>
            <div className={styles.arrowRight} >
                <ArrowRightAltIcon />
            </div>
        </div>
        
    )
}
export default StoryReel;