import { Route, Routes, } from 'react-router-dom';
import useUser from './hooks/useUser';
import PromptPage from './components/PromptPage';
import LoginPage from './components/LoginPage';
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
          path='/'
          element={<PromptPage user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App
