import SidebarRow from './SidebarRow';
import styles from './Sidebar.module.css';
import { Grid,List, ListItem } from '@material-ui/core';


export default function Sidebar() {
    return (
        <Grid item xs>
            <div className={styles.sidebar}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                >
                    <SidebarRow type="user" title="Canan Akin" src={null} styles={styles} />
                    <SidebarRow type="covid" title="COVID-19 Information Center" src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/7_gcmlwrelX.png" styles={styles} />
                    <SidebarRow title="Friends" icon="SupervisorAccountTwoToneIcon" styles={styles} />
                    <SidebarRow title="Grousps" icon="GroupWorkIcon" styles={styles} />
                    <SidebarRow title="Marketplace" icon="Storefront" styles={styles} />
                    <SidebarRow title="Videos" icon="OndemandVideo" styles={styles} />
                    <SidebarRow title="Activities" icon="LocalActivity" styles={styles} />
                    <SidebarRow title="Memories" icon="History" styles={styles} />
                    <SidebarRow title="See more" icon="ExpandMore" styles={styles} />
                </List>
                
            </div>
        </Grid>
    )
}
