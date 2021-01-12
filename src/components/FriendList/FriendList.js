import react from 'react';
import styles from './FriendList.module.css'
import FriendListItem from './FriendListItem'



function FriendList({ friends }) {
  console.log(friends)
  return (
    <ul className={styles.list}>
     {friends.map(friend => (
         <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline }/>
      ))}          
    </ul>
  );
}

export default FriendList;