import react from 'react';
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import user from '../user.json'
import statistticalData from '../components/Statistics/statistical-data.json'


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
        </>
    );
}
export default App;