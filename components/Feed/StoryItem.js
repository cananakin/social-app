import { Avatar, StylesProvider  } from '@material-ui/core';

const StoryItem = ({image, profile, title, styles}) => {
    return (
        <div className={styles.story__item} >
            <Avatar />
            <p className={styles.story__item__title}>{title}</p>
        </div>
    )
}
export default StoryItem;