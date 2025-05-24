import { Route, Routes, } from 'react-router-dom';
import useUser from '@hooks/useUser';
import Prompt from '@modules/prompt';
import Login from '@modules/login';
import Feed from '@modules/feed';
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
          element={<Feed user={user} />}
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
