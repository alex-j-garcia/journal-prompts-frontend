import { useState, useEffect, } from 'react';
import JournalForm from "./JournalForm";
import JournalPrompt from "./JournalPrompt";
import noteService from '../services/prompts';

const JournalEntry = () => {
  const [todaysPrompt, setTodaysPrompt] = useState(null);
  const [formData, setFormData] = useState({
    entryOne: '',
    entryTwo: '',
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

  const onFormSubmit = (event) => {
    event.preventDefault();
    noteService.addEntry({
      ...formData,
      prompt: todaysPrompt,
    })

    setFormData({
      entryOne: '',
      entryTwo: '',
    });
  };

  return (
    <div className='journalEntry'>
      <JournalPrompt prompt={todaysPrompt} />
      <JournalForm 
        data={formData}
        handleChange={onFormChange}
        handleSubmit={onFormSubmit}
      />
    </div>
  );
}

export default JournalEntry;
