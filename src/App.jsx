import { useState } from 'react';
import PromptPage from './components/PromptPage';
import './App.css'

function App() {
  const [notification, setNotification] = useState(null);

  const onNotificationChange = (message) => {
    setNotification(message);
  };

  return (
    <div className='app'>
        <PromptPage />
    </div>
  );
}

export default App
