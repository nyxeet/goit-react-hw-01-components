import react from 'react';
import styles from './FriendList.module.css'




function FriendList({ avatar, name, isOnline }) {
    const statusClasses = [styles.status, isOnline ? styles.online : styles.offline]
    
    return (
        <li className={styles.item}>
          <span className={statusClasses.join(' ')}></span>
          <img className={styles.avatar} src={avatar} width='48' />
          <p className={styles.name}>{name}</p>  
        </li>
    );
}

export default FriendList;