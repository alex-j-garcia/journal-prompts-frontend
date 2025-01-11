import { useState } from 'react';
import Header from './components/Header';
import JournalEntry from './components/JournalEntry';
import Notification from './components/Notification';
import './App.css'

function App() {
  const [notification, setNotification] = useState(null);

  const onNotificationChange = (message) => {
    setNotification(message);
  };

  return (
    <div className='app'>
      <Header />
      <Notification message={notification} />
      <JournalEntry handleNotificationChange={onNotificationChange} />
    </div>
  );
}

export default App
