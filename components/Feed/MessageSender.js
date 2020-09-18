import React, {useState} from 'react';
import styles from './MessageSender.module.css';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import Link from '@material-ui/core/Link';


const MessageSender = () => {
    const [search, setSearch] = useState('');
    const searchHandler = e => {
        e.preventDefault();
        console.log(search);
    }
    return (
        <div className={styles.messageSender}>
            <div className={styles.messageSender__top}>
                <Avatar />
                <form className={styles.formSearch}>
                <InputBase
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className={styles.input}
                    placeholder="What's on your mind, Canan?"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                    <button onClick={searchHandler} type="submit"></button>
                </form>
            </div>
            <Divider light className={styles.divider}/>
            <div className={styles.messageSender__bottom}>
                <Link className={styles.link}><VideocamIcon className={styles.videocamIcon} /> <span>Live Video</span></Link>
                <Link className={styles.link}><PhotoLibraryIcon className={styles.photoLibraryIcon}/> <span>Photos/Videos</span></Link>
                <Link className={styles.link}><MoodIcon className={styles.moodIcon} /><span>Mood</span></Link>
            </div>
        </div>
    )
}
export default MessageSender;