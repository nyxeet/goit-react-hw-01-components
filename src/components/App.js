import react from 'react';
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import user from '../user.json'
import stats from '../components/Statistics/statistical-data.json'


function App() {
    return (
        <>
            <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} />
            <Statistics stats={stats} />
        </>
    );
}
export default App;