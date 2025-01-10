import { useState, useEffect, } from 'react';
import noteService from './services/prompts';
import Header from './components/Header';
import JournalForm from './components/JournalForm';
import JournalPrompt from './components/JournalPrompt';
import './App.css'

function App() {
  const [prompts, setPrompts] = useState([]);
  const [todaysPrompt, setTodaysPrompt] = useState(null);
  const [formData, setFormData] = useState({
    promptOne: '',
    promptTwo: '',
  });

  useEffect(() => {
    noteService.getAll()
      .then((prompts) => {
        setPrompts(prompts)
      });

    noteService.getTodaysPrompt()
      .then((prompt) => {
        setTodaysPrompt(prompt)
      });
  }, []);

  const onFormChange = ({ target }) => {
    setFormData({ 
      ...formData, 
      [target.name]: target.value,
    });
  };

  return (
    <div className='app'>
      <Header />
      <JournalPrompt prompt={todaysPrompt} />
      <JournalForm data={formData} handleChange={onFormChange} />
    </div>
  );
}

export default App
