//import React from 'react'
import { Home, OndemandVideo, Storefront, SupervisedUserCircle, SportsEsports, Search, Add, Forum, NotificationsActiveRounded, ArrowDropDown } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import styles from './header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <div className={styles.header__logo}>
                    <img src="//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/48px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                </div>
                <div className={styles.header__search}>
                    <div className={styles.header__input}> <Search /> <input type="text" placeholder="Search Facebook"/> </div>
                </div>
            </div>
            <div className={styles.header__middle}>
                <div className={`${styles.header__option} ${styles.header__active}`}> <Home /> </div>
                <div className={styles.header__option}> <OndemandVideo /> </div>
                <div className={styles.header__option}> <Storefront /> </div>
                <div className={styles.header__option}> <SupervisedUserCircle /> </div>
                <div className={styles.header__option}> <SportsEsports /> </div>
            </div>
            <div className={styles.header__right}>
                <div className={styles.header__info}>
                    <Avatar className={styles.avatar} />
                    <span>Canan</span>
                </div>
                <div className={styles.header__option}>
                    <Add fontSize="large" />
                </div>
                <div className={styles.header__option}>
                    <Forum fontSize="large" />
                </div>
                <div className={styles.header__option}>
                    <NotificationsActiveRounded fontSize="large" />
                </div>
                <div className={styles.header__option}>
                    <ArrowDropDown fontSize="large" />
                </div>
            </div>
        </div>
    )
}
