import { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { SenseiDashboard } from './components/SenseiDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isSensei, setIsSensei] = useState(false);

  const handleLogin = (user: string, sensei: boolean) => {
    setUsername(user);
    setIsSensei(sensei);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setIsSensei(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : isSensei ? (
        <SenseiDashboard username={username} onLogout={handleLogout} />
      ) : (
        <Dashboard username={username} isSensei={isSensei} onLogout={handleLogout} />
      )}
    </>
  );
}