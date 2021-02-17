import React from 'react'
import styles from './Description.module.css'




function Desription({ url, tag, location, name}) {
    return (
        <div className={styles.description}>
          <img src={url} alt="Аватар пользователя" className={styles.avatar} />
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
    );

}

export default Desription;