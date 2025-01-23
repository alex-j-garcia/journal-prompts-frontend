import { useState } from 'react';
import PromptPage from './components/PromptPage';
import Notification from './components/Notification';
import Layout from './components/Layout';
import './App.css'

function App() {
  const [notification, setNotification] = useState(null);

  const onNotificationChange = (message) => {
    setNotification(message);
  };

  return (
    <div className='app'>
      <Layout>
        <Notification message={notification} />
        <PromptPage />
      </Layout>
    </div>
  );
}

export default App
