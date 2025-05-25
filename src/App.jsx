import { Route, Routes, } from 'react-router-dom';
import useUser from '@hooks/useUser';
import Prompt from '@modules/prompt';
import Login from '@modules/login';
import Feed from '@modules/feed';
import { LINKS } from '@modules/common/api/constants'
import './App.css'

function App() {
  const [user, setUser] = useUser();

  return (
    <div className='app'>
      <Routes>
        <Route
          path={LINKS.login}
          element={<Login handleLogin={setUser} />}
        />
        <Route
          path={LINKS.feed}
          element={<Feed user={user} />}
        />
        <Route
          path={LINKS.home}
          element={<Prompt user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App
