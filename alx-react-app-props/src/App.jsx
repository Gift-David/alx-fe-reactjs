import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';

function App({data}) {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;

  <UserContext.Provider value = {data}>
    <ProfilePage />
  </UserContext.Provider>
}

export default App;