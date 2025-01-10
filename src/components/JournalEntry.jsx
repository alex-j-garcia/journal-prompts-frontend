import { useState, useEffect, } from 'react';
import JournalForm from "./JournalForm";
import JournalPrompt from "./JournalPrompt";
import noteService from '../services/prompts';

const JournalEntry = () => {
  const [todaysPrompt, setTodaysPrompt] = useState(null);
  const [formData, setFormData] = useState({
    promptOne: '',
    promptTwo: '',
  });

  useEffect(() => {
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
    <div className='journalEntry'>
      <JournalPrompt prompt={todaysPrompt} />
      <JournalForm data={formData} handleChange={onFormChange} />
    </div>
  );
}

export default JournalEntry;
