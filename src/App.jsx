import { useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import PromptPage from './components/PromptPage';
import LoginPage from './components/LoginPage';
import './App.css'

function App() {
  const [userToken, setUserToken] = useState(null);

  const onLogin = (token) => {
    setUserToken(token);
  };

  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<LoginPage handleLogin={onLogin} />} />
        <Route path='/' element={<PromptPage userToken={userToken} />} />
      </Routes>
    </div>
  );
}

export default App
