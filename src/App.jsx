import { Route, Routes, } from 'react-router-dom';
import useUser from './hooks/useUser';
import PromptPage from './components/PromptPage';
import LoginPage from './components/LoginPage';
import GlobalFeedPage from './components/GlobalFeedPage';
import './App.css'

function App() {
  const [user, setUser] = useUser();

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/login'
          element={<LoginPage handleLogin={setUser} />}
        />
        <Route
          path='/global-feed'
          element={<GlobalFeedPage user={user} />}
        />
        <Route
          path='/'
          element={<PromptPage user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App
