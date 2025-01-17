import { useState, useEffect, } from 'react';
import JournalForm from "./JournalForm";
import JournalPrompt from "./JournalPrompt";
import noteService from '../services/prompts';
import entryService from '../services/entries';

const JournalEntry = ({ handleNotificationChange }) => {
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
    
    entryService
      .addEntry({
        ...formData,
        prompt: todaysPrompt,
      })
      .then((response) => {
        handleNotificationChange(`Successfully created ${response.id}`)
      })
      .catch((error) => {
        handleNotificationChange(`There's been some error: ${error.name}`);
      })
      .finally(() => {
        setTimeout(() => {
          handleNotificationChange(null)
        }, 5000);
      });

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
