import react from 'react';
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './History/TransactionHistory'
import user from '../user.json'
import statistticalData from '../components/Statistics/statistical-data.json'
import friends from '../components/FriendList/friends.json'
import transactions from '../components/History/transactions.json'


function App() {
    return (
        <>
            <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} />
            <Statistics stats={statistticalData} title='Upload stats' />
            <Statistics stats={statistticalData} />;
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />;
        </>
    );
}
export default App;