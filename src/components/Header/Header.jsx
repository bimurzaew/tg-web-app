import React from 'react';
import styles from './Header.module.css'
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {onClose, user} = useTelegram();


    return (
        <div className={styles.wrapper}>
            <button onClick={onClose}>Close</button>
            <span>{user?.username}</span>
        </div>
    );
};

export default Header;
