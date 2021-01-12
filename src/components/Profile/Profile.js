import react from 'react'
import Description from './Description'
import Stats from './Stats'
import styles from './Description.module.css'



function Profile({ name, avatar, tag, location, stats }) {
  return (
    <div className={styles.profile}>
      <Description
        name={name}
        url={avatar}
        tag={tag}
        location={location}
      />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}


export default Profile;