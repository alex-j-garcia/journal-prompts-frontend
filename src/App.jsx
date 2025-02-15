import { Route, Routes, } from 'react-router-dom';
import useUser from './hooks/useUser';
import useLocalStorage from './hooks/useLocalStorage';
import PromptPage from './components/PromptPage';
import LoginPage from './components/LoginPage';
import GlobalFeedPage from './components/GlobalFeedPage';
import './App.css'

function App() {
  const [user, setUser] = useUser();
  const [localStorage, setLocalStorage] = useLocalStorage(user);

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
          element={<PromptPage user={user} handleAnon={setLocalStorage} />}
        />
      </Routes>
    </div>
  );
}

export default App
