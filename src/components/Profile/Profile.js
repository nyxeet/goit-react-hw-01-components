import react from 'react'
import Description from './Description'
import Stats from './Stats'
import styles from './Description.module.css'
import PropTypes from 'prop-types'



function Profile({ name, avatar, tag, location, stats }) {
  console.log(stats);
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

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
}

export default Profile;