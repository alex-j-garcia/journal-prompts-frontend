import { useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import PromptPage from './components/PromptPage';
import LoginPage from './components/LoginPage';
import './App.css'

function App() {
  const [notification, setNotification] = useState(null);

  const onNotificationChange = (message) => {
    setNotification(message);
  };

  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<PromptPage />} />
      </Routes>
    </div>
  );
}

export default App
