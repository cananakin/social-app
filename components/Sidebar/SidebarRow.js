import { Avatar,ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import Storefront from '@material-ui/icons/Storefront';
import LocalActivity from '@material-ui/icons/LocalActivity';
import History from '@material-ui/icons/History';
import ExpandMore from '@material-ui/icons/ExpandMore';


const SidebarRow = ({title, icon, src, styles, type}) => {
    return (
        <ListItem className={styles.sidebar__row} button>
            <ListItemIcon>
                { type === "user" &&  <Avatar className={styles.avatar} src={src}   /> }
                { type === "covid" && <img src={src}  alt={title} /> }
                { icon && icon === 'SupervisorAccountTwoToneIcon' && <SupervisorAccountTwoToneIcon  /> }
                { icon && icon === 'GroupWorkIcon' && <GroupWorkIcon /> }
                { icon && icon === 'Storefront' && <Storefront  /> }
                { icon && icon === 'OndemandVideo' && <OndemandVideo  /> }
                { icon && icon === 'LocalActivity' && <LocalActivity /> }
                { icon && icon === 'History' && <History  /> }
                { icon && icon === 'ExpandMore' && <ExpandMore /> }
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
        
    )
}

export default SidebarRow;
