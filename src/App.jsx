import { Route, Routes, } from 'react-router-dom';
import useUser from '@hooks/useUser';
import Prompt from './components/Prompt';
import Login from './components/Login';
import GlobalFeed from './components/GlobalFeed';
import './App.css'

function App() {
  const [user, setUser] = useUser();

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/login'
          element={<Login handleLogin={setUser} />}
        />
        <Route
          path='/global-feed'
          element={<GlobalFeed user={user} />}
        />
        <Route
          path='/'
          element={<Prompt user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App
